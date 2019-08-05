import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { SalonLugarCreateUpdateComponent } from './SalonLugar-create-update/SalonLugar-create-update.component';
import { CatalogsService,SalonLugarForm, SalonLugarView } from "../../services/catalogs.service";

@Component({
  selector: 'fury-SalonLugar',
  templateUrl: './SalonLugar.component.html',
  styleUrls: ['./SalonLugar.component.scss']
})
export class SalonLugarComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<SalonLugarView[]> = new ReplaySubject<SalonLugarView[]>(1);
  data$: Observable<SalonLugarView[]> = this.subject$.asObservable();
  salonlugars = [];

  @Input()
  columns: ListColumn[] = [
		{ name: '#SalonLugar', property:' NPK_SalonLugar', visible: false, isModelProperty: true },
		{ name: 'NFK_Salon', property: 'NFK_Salon', visible: false, isModelProperty: true },
		{ name: 'Salon', property: 'Salon', visible: true, isModelProperty: true },
		{ name: 'Lugar En Salon', property: 'SalonLugar', visible: true, isModelProperty: true },
		{ name: 'Activo', property: 'Activo', visible: true, isModelProperty: true },
	{ name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<SalonLugarView> | null;

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
	createSalonLugar() {
		this.dialog.open(SalonLugarCreateUpdateComponent,{height: "500px",width: "800px",}).afterClosed().subscribe((salonlugar: SalonLugarForm) => {
			if (salonlugar) {
				this.fillGrid();
			}
		});
	}
	updateSalonLugar(salonlugar) {
		this.dialog.open(SalonLugarCreateUpdateComponent, {
			data: salonlugar,height: "500px",width: "800px",}).afterClosed().subscribe((salonlugar) => {
			if (salonlugar) {
				this.fillGrid();
			}
		});
	}
	activateSalonLugar(salonlugar,activo) {
		this.catalog.letActivarSalonLugar(salonlugar.NPK_SalonLugar,activo).subscribe(salonlugars =>{
			this.fillGrid();
		});
	}
	fillGrid(){
		this.catalog.getSalonLugars(2).subscribe(salonlugarlist =>{
			this.salonlugars = salonlugarlist;
			this.subject$.next(salonlugarlist);
	})

	this.dataSource = new MatTableDataSource();

	this.data$.pipe(
	  filter(Boolean)
	).subscribe((salonlugars) => {
	  this.salonlugars = salonlugars;
	  this.dataSource.data = salonlugars;
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
