import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { DistanciaAsientoCreateUpdateComponent } from './DistanciaAsiento-create-update/DistanciaAsiento-create-update.component';
import { CatalogsService,DistanciaAsientoForm } from "../../services/catalogs.service";

@Component({
  selector: 'fury-DistanciaAsiento',
  templateUrl: './DistanciaAsiento.component.html',
  styleUrls: ['./DistanciaAsiento.component.scss']
})
export class DistanciaAsientoComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<DistanciaAsientoForm[]> = new ReplaySubject<DistanciaAsientoForm[]>(1);
  data$: Observable<DistanciaAsientoForm[]> = this.subject$.asObservable();
  distanciaasientos = [];

  @Input()
  columns: ListColumn[] = [
		{ name: '#Distancia de Asiento', property:' NPK_DistanciaAsiento', visible: false, isModelProperty: true },
		{ name: 'Distancia de Asiento', property: 'DistanciaAsiento', visible: true, isModelProperty: true },
		{ name: 'Activo', property: 'Activo', visible: true, isModelProperty: true },
	{ name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<DistanciaAsientoForm> | null;

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
	createDistanciaAsiento() {
		this.dialog.open(DistanciaAsientoCreateUpdateComponent,{height: "500px",width: "800px",}).afterClosed().subscribe((distanciaasiento: DistanciaAsientoForm) => {
			if (distanciaasiento) {
				this.fillGrid();
			}
		});
	}
	updateDistanciaAsiento(distanciaasiento) {
		this.dialog.open(DistanciaAsientoCreateUpdateComponent, {
			data: distanciaasiento,height: "500px",width: "800px",}).afterClosed().subscribe((distanciaasiento) => {
			if (distanciaasiento) {
				this.fillGrid();
			}
		});
	}
	activateDistanciaAsiento(distanciaasiento,activo) {
		this.catalog.letActivarDistanciaAsiento(distanciaasiento.NPK_DistanciaAsiento,activo).subscribe(distanciaasientos =>{
			this.fillGrid();
		});
	}
	fillGrid(){
		this.catalog.getDistanciaAsientos(2).subscribe(distanciaasientolist =>{
			this.distanciaasientos = distanciaasientolist;
			this.subject$.next(distanciaasientolist);
	})

	this.dataSource = new MatTableDataSource();

	this.data$.pipe(
	  filter(Boolean)
	).subscribe((distanciaasientos) => {
	  this.distanciaasientos = distanciaasientos;
	  this.dataSource.data = distanciaasientos;
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
