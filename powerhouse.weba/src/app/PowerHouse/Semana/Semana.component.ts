import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { SemanaCreateUpdateComponent } from './Semana-create-update/Semana-create-update.component';
import { CatalogsService,SemanaForm } from "../../services/catalogs.service";

@Component({
  selector: 'fury-Semana',
  templateUrl: './Semana.component.html',
  styleUrls: ['./Semana.component.scss']
})
export class SemanaComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<SemanaForm[]> = new ReplaySubject<SemanaForm[]>(1);
  data$: Observable<SemanaForm[]> = this.subject$.asObservable();
  semanas = [];

  @Input()
  columns: ListColumn[] = [
		{ name: '#Semana', property:' NPK_Semana', visible: false, isModelProperty: true },
		{ name: 'NFK_Año', property: 'NFK_Anio', visible: false, isModelProperty: true },
		{ name: 'Año', property: 'Anio', visible: true, isModelProperty: true },
		{ name: 'NumeroSemana', property: 'NumeroSemana', visible: true, isModelProperty: true },
		{ name: 'FechaInicio', property: 'FechaInicio', visible: true, isModelProperty: true },
		{ name: 'FechaFin', property: 'FechaFin', visible: true, isModelProperty: true },
		{ name: 'Activo', property: 'Activo', visible: true, isModelProperty: true },
	{ name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<SemanaForm> | null;

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
	createSemana() {
		this.dialog.open(SemanaCreateUpdateComponent,{height: "500px",width: "800px",}).afterClosed().subscribe((semana: SemanaForm) => {
			if (semana) {
				this.fillGrid();
			}
		});
	}
	updateSemana(semana) {
		this.dialog.open(SemanaCreateUpdateComponent, {
			data: semana,height: "500px",width: "800px",}).afterClosed().subscribe((semana) => {
			if (semana) {
				this.fillGrid();
			}
		});
	}
	activateSemana(semana,activo) {
		this.catalog.letActivarSemana(semana.NPK_Semana,activo).subscribe(semanas =>{
			this.fillGrid();
		});
	}
	fillGrid(){
		this.catalog.getSemanas(2).subscribe(semanalist =>{
			this.semanas = semanalist;
			this.subject$.next(semanalist);
	})

	this.dataSource = new MatTableDataSource();

	this.data$.pipe(
	  filter(Boolean)
	).subscribe((semanas) => {
	  this.semanas = semanas;
	  this.dataSource.data = semanas;
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
