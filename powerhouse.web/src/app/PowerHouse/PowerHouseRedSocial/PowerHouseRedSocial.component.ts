import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { PowerHouseRedSocialCreateUpdateComponent } from './PowerHouseRedSocial-create-update/PowerHouseRedSocial-create-update.component';
import { CatalogsService,PowerHouseRedSocialForm } from "../../services/catalogs.service";

@Component({
  selector: 'fury-PowerHouseRedSocial',
  templateUrl: './PowerHouseRedSocial.component.html',
  styleUrls: ['./PowerHouseRedSocial.component.scss']
})
export class PowerHouseRedSocialComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<PowerHouseRedSocialForm[]> = new ReplaySubject<PowerHouseRedSocialForm[]>(1);
  data$: Observable<PowerHouseRedSocialForm[]> = this.subject$.asObservable();
  powerhouseredsocials = [];

  @Input()
  columns: ListColumn[] = [
		{ name: '#PowerHouseRedSocial', property:' NPK_PowerHouseRedSocial', visible: false, isModelProperty: true },
		{ name: 'NFK_RedSocial', property: 'NFK_RedSocial', visible: false, isModelProperty: true },
		{ name: 'Red Social', property: 'RedSocial', visible: true, isModelProperty: true },
		{ name: 'Tipo de Red Social', property: 'RedSocialDesc', visible: true, isModelProperty: true },
		{ name: 'Activo', property: 'Activo', visible: true, isModelProperty: true },
	{ name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<PowerHouseRedSocialForm> | null;

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
	createPowerHouseRedSocial() {
		this.dialog.open(PowerHouseRedSocialCreateUpdateComponent,{height: "500px",width: "800px",}).afterClosed().subscribe((powerhouseredsocial: PowerHouseRedSocialForm) => {
			if (powerhouseredsocial) {
				this.fillGrid();
			}
		});
	}
	updatePowerHouseRedSocial(powerhouseredsocial) {
		this.dialog.open(PowerHouseRedSocialCreateUpdateComponent, {
			data: powerhouseredsocial,height: "500px",width: "800px",}).afterClosed().subscribe((powerhouseredsocial) => {
			if (powerhouseredsocial) {
				this.fillGrid();
			}
		});
	}
	activatePowerHouseRedSocial(powerhouseredsocial,activo) {
		this.catalog.letActivarPowerHouseRedSocial(powerhouseredsocial.NPK_PowerHouseRedSocial,activo).subscribe(powerhouseredsocials =>{
			this.fillGrid();
		});
	}
	fillGrid(){
		this.catalog.getPowerHouseRedSocials(2).subscribe(powerhouseredsociallist =>{
			this.powerhouseredsocials = powerhouseredsociallist;
			this.subject$.next(powerhouseredsociallist);
	})

	this.dataSource = new MatTableDataSource();

	this.data$.pipe(
	  filter(Boolean)
	).subscribe((powerhouseredsocials) => {
	  this.powerhouseredsocials = powerhouseredsocials;
	  this.dataSource.data = powerhouseredsocials;
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
