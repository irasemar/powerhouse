import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { CalendarioCreateUpdateComponent } from './Calendario-create-update/Calendario-create-update.component';
import { CatalogsService,CalendarioForm,CalendarioView } from "../../services/catalogs.service";
import { Router } from '@angular/router';

@Component({
  selector: 'fury-Calendario',
  templateUrl: './Calendario.component.html',
  styleUrls: ['./Calendario.component.scss']
})
export class CalendarioComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<CalendarioForm[]> = new ReplaySubject<CalendarioForm[]>(1);
  data$: Observable<CalendarioForm[]> = this.subject$.asObservable();
  calendarios : CalendarioView[];

  @Input()
  columns: ListColumn[] = [
		{ name: '#Calendario', property:' NPK_Calendario', visible: false, isModelProperty: true },
		{ name: 'NFK_Anio', property: 'NFK_Anio', visible: false, isModelProperty: true },
		{ name: 'Año', property: 'Anio', visible: true, isModelProperty: true },
		{ name: 'NFK_Semana', property: 'NFK_Semana', visible: false, isModelProperty: true },
		{ name: 'Semana', property: 'NumeroSemana', visible: true, isModelProperty: true },
		{ name: 'Date', property: 'Date', visible: true, isModelProperty: true },
		{ name: 'NFK_Clase', property: 'NFK_Clase', visible: false, isModelProperty: true },
		{ name: 'Clase', property: 'Clase', visible: true, isModelProperty: true },
		{ name: 'Activo', property: 'Activo', visible: true, isModelProperty: true },
	{ name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<CalendarioForm> | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private catalog: CatalogsService, private router: Router) {
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
	createCalendario() {
		this.dialog.open(CalendarioCreateUpdateComponent,{height: "500px",width: "800px",}).afterClosed().subscribe((calendario: CalendarioForm) => {
			if (calendario) {
				this.fillGrid();
			}
		});
	}
	updateCalendario(calendario) {
		this.dialog.open(CalendarioCreateUpdateComponent, {
			data: calendario,height: "500px",width: "800px",}).afterClosed().subscribe((calendario) => {
			if (calendario) {
				this.fillGrid();
			}
		});
	}
	activateCalendario(calendario,activo) {
		this.catalog.letActivarCalendario(calendario.NPK_Calendario,activo).subscribe(calendarios =>{
			this.fillGrid();
		});
	}
	fillGrid(){
		this.catalog.getCalendarios(2).subscribe(calendariolist =>{
			this.calendarios = calendariolist;
			this.subject$.next(calendariolist);
	})

	this.dataSource = new MatTableDataSource();

	this.data$.pipe(
	  filter(Boolean)
	).subscribe((calendarios) => {
	  this.calendarios = calendarios;
	  this.dataSource.data = calendarios;
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
  verClases(Calendario) {
	this.router.navigate(['/CalendarioClase/' + Calendario.NPK_Calendario + '/Clase: ' + Calendario.Clase + ' Semana: ' + Calendario.NumeroSemana + ' DIA: ' + Calendario.Date]);
}
}
