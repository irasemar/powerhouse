import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { CatalogsService,UsuarioPorInstructorView } from "../../services/catalogs.service";
import { Router } from '@angular/router';
import { ExcelService } from '../../services/excel.services'

@Component({
  selector: 'fury-ReporteUsuarioInstructor',
  templateUrl: './ReporteUsuarioInstructor.component.html',
  styleUrls: ['./ReporteUsuarioInstructor.component.scss']
})
export class ReporteUsuarioInstructorComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<UsuarioPorInstructorView[]> = new ReplaySubject<UsuarioPorInstructorView[]>(1);
  data$: Observable<UsuarioPorInstructorView[]> = this.subject$.asObservable();
  usuarios = [];

  @Input()
  columns: ListColumn[] = [	  
		{ name: '# Usuario', property:'NPK_Usuario', visible: true, isModelProperty: true },
		{ name: 'Nombre', property: 'Nombre', visible: true, isModelProperty: true },
		{ name: 'Usuario', property: 'Usuario', visible: true, isModelProperty: true },
		{ name: 'Clase', property: 'Clase', visible: true, isModelProperty: true },
		{ name: 'Instructor', property: 'Instructor', visible: true, isModelProperty: true },
		{ name: 'Cant. Clases', property: 'CantClases', visible: true, isModelProperty: true },
	{ name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 50;
  dataSource: MatTableDataSource<UsuarioPorInstructorView> | null;

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
		this.catalog.getUsuariosReportePorInstructor().subscribe(usuariolist => {
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
		this.excelService.exportAsExcelFile(this.usuarios, 'UsuariosPorInstructorpwh');
	}

  ngOnDestroy() {
  }
}
