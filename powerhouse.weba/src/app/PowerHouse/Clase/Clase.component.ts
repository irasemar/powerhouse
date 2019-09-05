import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { ClaseCreateUpdateComponent } from './Clase-create-update/Clase-create-update.component';
import { CatalogsService,ClaseForm } from "../../services/catalogs.service";

@Component({
  selector: 'fury-Clase',
  templateUrl: './Clase.component.html',
  styleUrls: ['./Clase.component.scss']
})
export class ClaseComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<ClaseForm[]> = new ReplaySubject<ClaseForm[]>(1);
  data$: Observable<ClaseForm[]> = this.subject$.asObservable();
  clases = [];

  @Input()
  columns: ListColumn[] = [
		{ name: '#Clase', property:' NPK_Clase', visible: false, isModelProperty: true },
		{ name: 'Clase', property: 'Clase', visible: true, isModelProperty: true },
		{ name: 'DescripcionClase', property: 'DescripcionClase', visible: true, isModelProperty: true },
		{ name: 'Tiempo', property: 'Tiempo', visible: true, isModelProperty: true },
		{ name: 'Activo', property: 'Activo', visible: true, isModelProperty: true },
	{ name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<ClaseForm> | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private catalog: CatalogsService) {
}
	get visibleColumns() {
		return this.columns.filter(column => column.visible).map(column => column.property);
	}  
	ngOnInit() {   
		this.fillGrid();
	}  
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
	createClase() {
		this.dialog.open(ClaseCreateUpdateComponent,{height: "500px",width: "800px",}).afterClosed().subscribe((clase: ClaseForm) => {
			if (clase) {
				this.fillGrid();
			}
		});
	}
	updateClase(clase) {
		this.dialog.open(ClaseCreateUpdateComponent, {
			data: clase,height: "500px",width: "800px",}).afterClosed().subscribe((clase) => {
			if (clase) {
				this.fillGrid();
			}
		});
	}
	activateClase(clase,activo) {
		this.catalog.letActivarClase(clase.NPK_Clase,activo).subscribe(clases =>{
			this.fillGrid();
		});
	}
	fillGrid(){
		this.catalog.getClases(2).subscribe(claselist =>{
			this.clases = claselist;
			this.subject$.next(claselist);
	})

	this.dataSource = new MatTableDataSource();

	this.data$.pipe(
	  filter(Boolean)
	).subscribe((clases) => {
	  this.clases = clases;
	  this.dataSource.data = clases;
	});
  }

	onFilterChange(value) {
		if (!this.dataSource) {
			return;
		}
		value = value.trim();
		value = value.toLowerCase();
		this.dataSource.filter = value;
	}

  ngOnDestroy() {
  }
}
