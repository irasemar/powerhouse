import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { AlturaAsientoCreateUpdateComponent } from './AlturaAsiento-create-update/AlturaAsiento-create-update.component';
import { CatalogsService,AlturaAsientoForm } from "../../services/catalogs.service";

@Component({
  selector: 'fury-AlturaAsiento',
  templateUrl: './AlturaAsiento.component.html',
  styleUrls: ['./AlturaAsiento.component.scss']
})
export class AlturaAsientoComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<AlturaAsientoForm[]> = new ReplaySubject<AlturaAsientoForm[]>(1);
  data$: Observable<AlturaAsientoForm[]> = this.subject$.asObservable();
  alturaasientos = [];

  @Input()
  columns: ListColumn[] = [
		{ name: '#Altura de Asiento', property:' NPK_AlturaAsiento', visible: false, isModelProperty: true },
		{ name: 'Altura de Asiento', property: 'AlturaAsiento', visible: true, isModelProperty: true },
		{ name: 'Activo', property: 'Activo', visible: true, isModelProperty: true },
	{ name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<AlturaAsientoForm> | null;

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
	createAlturaAsiento() {
		this.dialog.open(AlturaAsientoCreateUpdateComponent,{height: "500px",width: "800px",}).afterClosed().subscribe((alturaasiento: AlturaAsientoForm) => {
			if (alturaasiento) {
				this.fillGrid();
			}
		});
	}
	updateAlturaAsiento(alturaasiento) {
		this.dialog.open(AlturaAsientoCreateUpdateComponent, {
			data: alturaasiento,height: "500px",width: "800px",}).afterClosed().subscribe((alturaasiento) => {
			if (alturaasiento) {
				this.fillGrid();
			}
		});
	}
	activateAlturaAsiento(alturaasiento,activo) {
		this.catalog.letActivarAlturaAsiento(alturaasiento.NPK_AlturaAsiento,activo).subscribe(alturaasientos =>{
			this.fillGrid();
		});
	}
	fillGrid(){
		this.catalog.getAlturaAsientos(2).subscribe(alturaasientolist =>{
			this.alturaasientos = alturaasientolist;
			this.subject$.next(alturaasientolist);
	})

	this.dataSource = new MatTableDataSource();

	this.data$.pipe(
	  filter(Boolean)
	).subscribe((alturaasientos) => {
	  this.alturaasientos = alturaasientos;
	  this.dataSource.data = alturaasientos;
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
