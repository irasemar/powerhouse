import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { AlturaManubrioCreateUpdateComponent } from './AlturaManubrio-create-update/AlturaManubrio-create-update.component';
import { CatalogsService,AlturaManubrioForm } from "../../services/catalogs.service";

@Component({
  selector: 'fury-AlturaManubrio',
  templateUrl: './AlturaManubrio.component.html',
  styleUrls: ['./AlturaManubrio.component.scss']
})
export class AlturaManubrioComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<AlturaManubrioForm[]> = new ReplaySubject<AlturaManubrioForm[]>(1);
  data$: Observable<AlturaManubrioForm[]> = this.subject$.asObservable();
  alturamanubrios = [];

  @Input()
  columns: ListColumn[] = [
		{ name: '#Altura de Manubrio', property:' NPK_AlturaManubrio', visible: false, isModelProperty: true },
		{ name: 'Altura de Manubrio', property: 'AlturaManubrio', visible: true, isModelProperty: true },
		{ name: 'Activo', property: 'Activo', visible: true, isModelProperty: true },
	{ name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<AlturaManubrioForm> | null;

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
	createAlturaManubrio() {
		this.dialog.open(AlturaManubrioCreateUpdateComponent,{height: "500px",width: "800px",}).afterClosed().subscribe((alturamanubrio: AlturaManubrioForm) => {
			if (alturamanubrio) {
				this.fillGrid();
			}
		});
	}
	updateAlturaManubrio(alturamanubrio) {
		this.dialog.open(AlturaManubrioCreateUpdateComponent, {
			data: alturamanubrio,height: "500px",width: "800px",}).afterClosed().subscribe((alturamanubrio) => {
			if (alturamanubrio) {
				this.fillGrid();
			}
		});
	}
	activateAlturaManubrio(alturamanubrio,activo) {
		this.catalog.letActivarAlturaManubrio(alturamanubrio.NPK_AlturaManubrio,activo).subscribe(alturamanubrios =>{
			this.fillGrid();
		});
	}
	fillGrid(){
		this.catalog.getAlturaManubrios(2).subscribe(alturamanubriolist =>{
			this.alturamanubrios = alturamanubriolist;
			console.log(alturamanubriolist);
			this.subject$.next(alturamanubriolist);
	})

	this.dataSource = new MatTableDataSource();

	this.data$.pipe(
	  filter(Boolean)
	).subscribe((alturamanubrios) => {
	  this.alturamanubrios = alturamanubrios;
	  this.dataSource.data = alturamanubrios;
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
