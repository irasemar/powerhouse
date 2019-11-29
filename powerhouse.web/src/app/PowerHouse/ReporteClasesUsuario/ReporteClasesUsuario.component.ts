import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { CatalogsService,UsuarioPremiosView } from "../../services/catalogs.service";
import { Router } from '@angular/router';
import { ExcelService } from '../../services/excel.services'

@Component({
  selector: 'fury-ReporteClasesUsuario',
  templateUrl: './ReporteClasesUsuario.component.html',
  styleUrls: ['./ReporteClasesUsuario.component.scss']
})
export class ReporteClasesUsuarioComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<UsuarioPremiosView[]> = new ReplaySubject<UsuarioPremiosView[]>(1);
  data$: Observable<UsuarioPremiosView[]> = this.subject$.asObservable();
  usuarios = [];

  @Input()
  columns: ListColumn[] = [	  
		{ name: '# Usuario', property:'NPK_Usuario', visible: true, isModelProperty: true },
		{ name: 'Nombre', property: 'Nombre', visible: true, isModelProperty: true },
		{ name: 'Usuario', property: 'Usuario', visible: false, isModelProperty: true },
		{ name: 'Correo', property: 'Correo', visible: false, isModelProperty: true },
		{ name: 'Cant. Compras', property: 'CantidadCompras', visible: true, isModelProperty: true },
		{ name: 'Cant. Clases Compradas', property: 'CantClasesCompradas', visible: true, isModelProperty: true },
		{ name: 'Cant. Clases Asistio', property: 'CantidadClasesAsistio', visible: true, isModelProperty: true },
		{ name: 'Cant. Clases SinAsistir', property: 'CantidadClasesSinAsistir', visible: true, isModelProperty: true },
		{ name: 'Total Clases', property: 'TotalClases', visible: true, isModelProperty: true },
		{ name: 'Cant Clases RIDE', property: 'CantClasesAsistioRIDE', visible: true, isModelProperty: true },
		{ name: 'Cant Clases TRAIN', property: 'CantClasesAsistioTRAIN', visible: true, isModelProperty: true },
		{ name: 'Premio 1', property: 'Premio1', visible: true, isModelProperty: true },
		{ name: 'Premio 2', property: 'Premio2', visible: true, isModelProperty: true },
		{ name: 'Premio 3', property: 'Premio3', visible: true, isModelProperty: true },
		{ name: 'Premio 4', property: 'Premio4', visible: true, isModelProperty: true },
		{ name: 'Premio 5', property: 'Premio5', visible: true, isModelProperty: true },
		{ name: 'Premio 6', property: 'Premio6', visible: true, isModelProperty: true },
		{ name: 'Premio 7', property: 'Premio7', visible: true, isModelProperty: true },
		{ name: 'Premio 8', property: 'Premio8', visible: true, isModelProperty: true },
		{ name: 'Premio 9', property: 'Premio9', visible: true, isModelProperty: true },
		{ name: 'Premio 10', property: 'Premio10', visible: true, isModelProperty: true },
	{ name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 50;
  dataSource: MatTableDataSource<UsuarioPremiosView> | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private catalog: CatalogsService, private router: Router, private excelService: ExcelService) {
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
	
	
	fillGrid(){
		this.catalog.getUsuariosReportePremio(0).subscribe(usuariolist => {
			this.usuarios = usuariolist;
			this.subject$.next(usuariolist);
		});

	this.dataSource = new MatTableDataSource();

	this.data$.pipe(
	  filter(Boolean)
	).subscribe((usuarios) => {
	  this.usuarios = usuarios;
	  this.dataSource.data = usuarios;
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
	exportAsXLSX(): void {
		this.excelService.exportAsExcelFile(this.usuarios, 'UsuariosPremiospwh');
	}

  ngOnDestroy() {
  }
}
