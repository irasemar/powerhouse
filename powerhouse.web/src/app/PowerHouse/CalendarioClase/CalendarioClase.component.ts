import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { CalendarioClaseCreateUpdateComponent } from './CalendarioClase-create-update/CalendarioClase-create-update.component';
import { CatalogsService,CalendarioClaseForm, CalendarioClaseView } from "../../services/catalogs.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'fury-CalendarioClase',
  templateUrl: './CalendarioClase.component.html',
  styleUrls: ['./CalendarioClase.component.scss']
})
export class CalendarioClaseComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<CalendarioClaseView[]> = new ReplaySubject<CalendarioClaseView[]>(1);
  data$: Observable<CalendarioClaseView[]> = this.subject$.asObservable();
  CalendarioClases = [];
	nfk_calendario = "";
	calendario = "";
  @Input()
  columns: ListColumn[] = [
		{ name: '#CalendarioClase', property:'NPK_CalendarioClase', visible: false, isModelProperty: true },
		{ name: 'NFK_Calendario', property: 'NFK_Calendario', visible: false, isModelProperty: true },
		{ name: 'NFK_Instructor', property: 'NFK_Instructor', visible: false, isModelProperty: true },
		{ name: 'Instructor', property: 'Instructor', visible: true, isModelProperty: true },
		{ name: 'Instructor 2', property: 'InstructorAdjunto', visible: true, isModelProperty: true },
		{ name: 'Hora Inicio', property: 'HoraInicio', visible: true, isModelProperty: true },
		{ name: 'Duracion', property: 'Duracion', visible: true, isModelProperty: true },
		{ name: 'Actividad', property: 'Actividad', visible: true, isModelProperty: true },
		

	{ name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<CalendarioClaseView> | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private catalog: CatalogsService,private route: ActivatedRoute,private router: Router) {
}
	get visibleColumns() {
		return this.columns.filter(column => column.visible).map(column => column.property);
	}  
	ngOnInit() {  
		this.nfk_calendario = this.route.snapshot.paramMap.get("npk_calendario");
		console.log(this.nfk_calendario);
		this.calendario = this.route.snapshot.paramMap.get("calendario");
		console.log(this.calendario); 
		this.fillGrid(this.nfk_calendario);
	}  
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
	createCalendarioClase() {
		this.dialog.open(CalendarioClaseCreateUpdateComponent,{data: {NFK_Calendario: this.nfk_calendario},height: "500px",width: "800px",}).afterClosed().subscribe((CalendarioClase: CalendarioClaseForm) => {
			if (CalendarioClase) {
				this.fillGrid(this.nfk_calendario);
			}
		});
	}
	updateCalendarioClase(CalendarioClase) {
		this.dialog.open(CalendarioClaseCreateUpdateComponent, {
			data: CalendarioClase,height: "500px",width: "800px",}).afterClosed().subscribe((CalendarioClase) => {
			if (CalendarioClase) {
				this.fillGrid(this.nfk_calendario);
			}
		});
	}
	eliminarCalendarioClase(CalendarioClase) {
		this.catalog.letEliminarCalendarioClase(CalendarioClase.NPK_CalendarioClase).subscribe(CalendarioClases =>{
			this.fillGrid(this.nfk_calendario);
		});
	}
	fillGrid(pNFK_Calendario){
		this.catalog.getCalendarioClases(pNFK_Calendario).subscribe(CalendarioClaselist =>{
			this.CalendarioClases = CalendarioClaselist;
			this.subject$.next(CalendarioClaselist);
	})

	this.dataSource = new MatTableDataSource();

	this.data$.pipe(
	  filter(Boolean)
	).subscribe((CalendarioClases) => {
	  this.CalendarioClases = CalendarioClases;
	  this.dataSource.data = CalendarioClases;
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
