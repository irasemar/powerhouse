import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { PowerHouseCreateUpdateComponent } from './PowerHouse-create-update/PowerHouse-create-update.component';
import { CatalogsService,PowerHouseForm } from "../../services/catalogs.service";

@Component({
  selector: 'fury-PowerHouse',
  templateUrl: './PowerHouse.component.html',
  styleUrls: ['./PowerHouse.component.scss']
})
export class PowerHouseComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<PowerHouseForm[]> = new ReplaySubject<PowerHouseForm[]>(1);
  data$: Observable<PowerHouseForm[]> = this.subject$.asObservable();
  powerhouses = [];

  @Input()
  columns: ListColumn[] = [
		{ name: '#PowerHouse', property:' NPK_PowerHouse', visible: false, isModelProperty: true },
		{ name: 'Direccion', property: 'Direccion', visible: true, isModelProperty: true },
		{ name: 'Telefonos', property: 'Telefonos', visible: true, isModelProperty: true },
		{ name: 'Latitud', property: 'Latitud', visible: true, isModelProperty: true },
		{ name: 'Longitud', property: 'Longitud', visible: true, isModelProperty: true },
		{ name: 'Activo', property: 'Activo', visible: true, isModelProperty: true },
	{ name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<PowerHouseForm> | null;

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
	createPowerHouse() {
		this.dialog.open(PowerHouseCreateUpdateComponent,{height: "500px",width: "800px",}).afterClosed().subscribe((powerhouse: PowerHouseForm) => {
			if (powerhouse) {
				this.fillGrid();
			}
		});
	}
	updatePowerHouse(powerhouse) {
		this.dialog.open(PowerHouseCreateUpdateComponent, {
			data: powerhouse,height: "500px",width: "800px",}).afterClosed().subscribe((powerhouse) => {
			if (powerhouse) {
				this.fillGrid();
			}
		});
	}
	activatePowerHouse(powerhouse,activo) {
		this.catalog.letActivarPowerHouse(powerhouse.NPK_PowerHouse,activo).subscribe(powerhouses =>{
			this.fillGrid();
		});
	}
	fillGrid(){
		this.catalog.getPowerHouses(2).subscribe(powerhouselist =>{
			this.powerhouses = powerhouselist;
			this.subject$.next(powerhouselist);
	})

	this.dataSource = new MatTableDataSource();

	this.data$.pipe(
	  filter(Boolean)
	).subscribe((powerhouses) => {
	  this.powerhouses = powerhouses;
	  this.dataSource.data = powerhouses;
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
