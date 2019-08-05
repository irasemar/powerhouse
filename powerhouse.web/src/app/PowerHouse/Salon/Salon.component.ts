import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { SalonCreateUpdateComponent } from './Salon-create-update/Salon-create-update.component';
import { CatalogsService,SalonForm } from "../../services/catalogs.service";

@Component({
  selector: 'fury-Salon',
  templateUrl: './Salon.component.html',
  styleUrls: ['./Salon.component.scss']
})
export class SalonComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<SalonForm[]> = new ReplaySubject<SalonForm[]>(1);
  data$: Observable<SalonForm[]> = this.subject$.asObservable();
  salons = [];

  @Input()
  columns: ListColumn[] = [
		{ name: '#Salon', property:' NPK_Salon', visible: false, isModelProperty: true },
		{ name: 'Salon', property: 'Salon', visible: true, isModelProperty: true },
		{ name: 'Activo', property: 'Activo', visible: true, isModelProperty: true },
	{ name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<SalonForm> | null;

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
	createSalon() {
		this.dialog.open(SalonCreateUpdateComponent,{height: "500px",width: "800px",}).afterClosed().subscribe((salon: SalonForm) => {
			if (salon) {
				this.fillGrid();
			}
		});
	}
	updateSalon(salon) {
		this.dialog.open(SalonCreateUpdateComponent, {
			data: salon,height: "500px",width: "800px",}).afterClosed().subscribe((salon) => {
			if (salon) {
				this.fillGrid();
			}
		});
	}
	activateSalon(salon,activo) {
		this.catalog.letActivarSalon(salon.NPK_Salon,activo).subscribe(salons =>{
			this.fillGrid();
		});
	}
	fillGrid(){
		this.catalog.getSalons(2).subscribe(salonlist =>{
			this.salons = salonlist;
			this.subject$.next(salonlist);
	})

	this.dataSource = new MatTableDataSource();

	this.data$.pipe(
	  filter(Boolean)
	).subscribe((salons) => {
	  this.salons = salons;
	  this.dataSource.data = salons;
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
