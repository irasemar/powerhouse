import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { PaqueteCreateUpdateComponent } from './Paquete-create-update/Paquete-create-update.component';
import { CatalogsService,PaqueteForm } from "../../services/catalogs.service";

@Component({
  selector: 'fury-Paquete',
  templateUrl: './Paquete.component.html',
  styleUrls: ['./Paquete.component.scss']
})
export class PaqueteComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<PaqueteForm[]> = new ReplaySubject<PaqueteForm[]>(1);
  data$: Observable<PaqueteForm[]> = this.subject$.asObservable();
  paquetes = [];
  
  @Input()
  columns: ListColumn[] = [
		{ name: '#Paquete', property:' NPK_Paquete', visible: false, isModelProperty: true },
		{ name: 'Paquete', property: 'Paquete', visible: true, isModelProperty: true },
		{ name: 'Cantidad de Clases', property: 'CantidadClases', visible: true, isModelProperty: true },
		{ name: 'Precio', property: 'Precio', visible: true, isModelProperty: true },
		{ name: 'Descripcion de Expiracion', property: 'DescripcionExpiracion', visible: true, isModelProperty: true },
		{ name: 'Expiracion en Dias', property: 'ExpiracionDias', visible: true, isModelProperty: true },
		{ name: 'Activo', property: 'Activo', visible: true, isModelProperty: true },
	{ name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<PaqueteForm> | null;

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
	createPaquete() {
		this.dialog.open(PaqueteCreateUpdateComponent,{height: "500px",width: "800px",}).afterClosed().subscribe((paquete: PaqueteForm) => {
			if (paquete) {
				this.fillGrid();
			}
		});
	}
	updatePaquete(paquete) {
		this.dialog.open(PaqueteCreateUpdateComponent, {
			data: paquete,height: "500px",width: "800px",}).afterClosed().subscribe((paquete) => {
			if (paquete) {
				this.fillGrid();
			}
		});
	}
	activatePaquete(paquete,activo) {
		this.catalog.letActivarPaquete(paquete.NPK_Paquete,activo).subscribe(paquetes =>{
			this.fillGrid();
		});
	}
	fillGrid(){
		this.catalog.getPaquetes(2).subscribe(paquetelist =>{
			this.paquetes = paquetelist;
			this.subject$.next(paquetelist);
	})

	this.dataSource = new MatTableDataSource();

	this.data$.pipe(
	  filter(Boolean)
	).subscribe((paquetes) => {
	  this.paquetes = paquetes;
	  this.dataSource.data = paquetes;
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
