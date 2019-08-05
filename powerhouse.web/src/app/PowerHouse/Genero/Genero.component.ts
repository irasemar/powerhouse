import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { GeneroCreateUpdateComponent } from './Genero-create-update/Genero-create-update.component';
import { CatalogsService, GeneroForm } from "../../services/catalogs.service";

@Component({
  selector: 'fury-Genero',
  templateUrl: './Genero.component.html',
  styleUrls: ['./Genero.component.scss']
})
export class GeneroComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<GeneroForm[]> = new ReplaySubject<GeneroForm[]>(1);
  data$: Observable<GeneroForm[]> = this.subject$.asObservable();
  generos = [];

  @Input()
  columns: ListColumn[] = [
		{ name: '#Genero', property:' NPK_Genero', visible: false, isModelProperty: true },
		{ name: 'Genero', property: 'Genero', visible: true, isModelProperty: true },
		{ name: 'Activo', property: 'Activo', visible: true, isModelProperty: true },
	{ name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<GeneroForm> | null;

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
	createGenero() {
		this.dialog.open(GeneroCreateUpdateComponent,{height: "500px",width: "800px",}).afterClosed().subscribe((genero: GeneroForm) => {
			if (genero) {
				this.fillGrid();
			}
		});
	}
	updateGenero(genero) {
		this.dialog.open(GeneroCreateUpdateComponent, {
			data: genero,height: "500px",width: "800px",}).afterClosed().subscribe((genero) => {
			if (genero) {
				this.fillGrid();
			}
		});
	}
	activateGenero(genero,activo) {
		this.catalog.letActivarGenero(genero.NPK_Genero,activo).subscribe(generos =>{
			this.fillGrid();
		});
	}
	fillGrid(){
		this.catalog.getGeneros(2).subscribe(generolist =>{
			this.generos = generolist;
			this.subject$.next(generolist);
	})

	this.dataSource = new MatTableDataSource();

	this.data$.pipe(
	  filter(Boolean)
	).subscribe((generos) => {
	  this.generos = generos;
	  this.dataSource.data = generos;
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
