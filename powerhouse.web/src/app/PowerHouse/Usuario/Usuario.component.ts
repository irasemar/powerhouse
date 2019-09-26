import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { CatalogsService,UsuarioView } from "../../services/catalogs.service";
import { Router } from '@angular/router';

@Component({
  selector: 'fury-Usuario',
  templateUrl: './Usuario.component.html',
  styleUrls: ['./Usuario.component.scss']
})
export class UsuarioComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<UsuarioView[]> = new ReplaySubject<UsuarioView[]>(1);
  data$: Observable<UsuarioView[]> = this.subject$.asObservable();
  usuarios = [];

  @Input()
  columns: ListColumn[] = [	  
		{ name: '#Usuario', property:'NPK_Usuario', visible: true, isModelProperty: true },
		{ name: 'Nombre', property: 'Nombre', visible: true, isModelProperty: true },
		{ name: 'Apellidos', property: 'Apellidos', visible: true, isModelProperty: true },
		{ name: 'Usuario', property: 'Usuario', visible: true, isModelProperty: true },
		{ name: 'Telefono', property: 'Telefono', visible: false, isModelProperty: true },
		{ name: 'Fecha de Nacimiento', property: 'FechaNacimiento', visible: true, isModelProperty: true },
		{ name: 'Genero', property: 'Genero', visible: true, isModelProperty: true },
		{ name: 'Contacto de Emergencia', property: 'ContactoEmergencia', visible: false, isModelProperty: true },
		{ name: 'Tel de Contacto', property: 'TelefonoContacto', visible: false, isModelProperty: true },
		{ name: 'Correo', property: 'Correo', visible: false, isModelProperty: true },
		{ name: 'Fecha Alta', property: 'FechaCreacion', visible: true, isModelProperty: true },		
	{ name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 50;
  dataSource: MatTableDataSource<UsuarioView> | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private catalog: CatalogsService, private router: Router) {
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
	
	detalleUsuario(usuario) {
		this.router.navigate(['/DetalleUsuario/' + usuario.NPK_Usuario + '/CLIENTE: ' + usuario.Nombre + ' ' + usuario.Apellidos]);
	}
	
	fillGrid(){
		this.catalog.getUsuarios(2).subscribe(usuariolist =>{
			this.usuarios = usuariolist;
			this.subject$.next(usuariolist);
	})

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

  ngOnDestroy() {
  }
}
