import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { AnioCreateUpdateComponent } from './Anio-create-update/Anio-create-update.component';
import { CatalogsService,AñoForm } from "../../services/catalogs.service";

@Component({
  selector: 'fury-Anio',
  templateUrl: './Anio.component.html',
  styleUrls: ['./Anio.component.scss']
})
export class AnioComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<AñoForm[]> = new ReplaySubject<AñoForm[]>(1);
  data$: Observable<AñoForm[]> = this.subject$.asObservable();
  años : AñoForm[];

  @Input()
  columns: ListColumn[] = [
		{ name: '#Año', property:'NPK_Anio', visible: false, isModelProperty: true },
		{ name: 'Año', property: 'Anio', visible: true, isModelProperty: true },
		{ name: 'Activo', property: 'Activo', visible: true, isModelProperty: true },
	{ name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<AñoForm> | null;

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
	createAnio() {
		this.dialog.open(AnioCreateUpdateComponent,{height: "500px",width: "800px",}).afterClosed().subscribe((año: AñoForm) => {
			if (año) {
				this.fillGrid();
			}
		});
	}
	updateAnio(año) {
		this.dialog.open(AnioCreateUpdateComponent, {
			data: año,height: "500px",width: "800px",}).afterClosed().subscribe((año) => {
			if (año) {
				this.fillGrid();
			}
		});
	}
	activateAnio(año,activo) {
		this.catalog.letActivarAño(año.NPK_Año,activo).subscribe(años =>{
			this.fillGrid();
		});
	}
	fillGrid(){
		this.catalog.getAnios(2).subscribe(añolist =>{
			this.años = añolist;
			this.subject$.next(añolist);
	})

	this.dataSource = new MatTableDataSource();

	this.data$.pipe(
	  filter(Boolean)
	).subscribe((años) => {
	  this.años = años;
	  this.dataSource.data = años;
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
