import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { CatalogsService, UsuarioView } from "../../services/catalogs.service";
import { Router } from '@angular/router';
import { UsuarioCreateUpdateComponent } from './Usuario-create-update/Usuario-create-update.component';
import { ExcelService } from '../../services/excel.services'

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
		{ name: '#Usuario', property: 'NPK_Usuario', visible: true, isModelProperty: true },
		{ name: 'Nombre', property: 'Nombre', visible: true, isModelProperty: true },
		{ name: 'Apellidos', property: 'Apellidos', visible: true, isModelProperty: true },
		{ name: 'Saldo', property: 'SaldoTotal', visible: true, isModelProperty: true },
		{ name: 'Usuario', property: 'Usuario', visible: true, isModelProperty: true },
		{ name: 'Telefono', property: 'Telefono', visible: false, isModelProperty: true },
		{ name: 'Fecha de Nacimiento', property: 'FechaNacimiento', visible: false, isModelProperty: true },
		{ name: 'Genero', property: 'Genero', visible: false, isModelProperty: true },
		{ name: 'Contacto de Emergencia', property: 'ContactoEmergencia', visible: false, isModelProperty: true },
		{ name: 'Tel de Contacto', property: 'TelefonoContacto', visible: false, isModelProperty: true },
		{ name: 'Correo', property: 'Correo', visible: false, isModelProperty: true },
		{ name: 'Fecha Alta', property: 'FechaCreacion', visible: false, isModelProperty: true },
		{ name: 'Actions', property: 'actions', visible: true },
	] as ListColumn[];
	pageSize = 100;
	dataSource: MatTableDataSource<UsuarioView> | null;

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

	detalleUsuario(usuario) {
		this.router.navigate(['/DetalleUsuario/' + usuario.NPK_Usuario + '/CLIENTE: ' + usuario.Nombre + ' ' + usuario.Apellidos]);
	}

	fillGrid() {
		this.catalog.getUsuariosAdmin(2).subscribe(usuariolist => {
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
	updateUsuario(usuario) {
		this.dialog.open(UsuarioCreateUpdateComponent, {
			data: usuario, height: "500px", width: "800px",
		}).afterClosed().subscribe((usuario) => {
			if (usuario) {
				this.fillGrid();
			}
		});
	}

	ngOnDestroy() {
	}
	exportAsXLSX(): void {
		this.excelService.exportAsExcelFile(this.usuarios, 'usuariospwh');
	}
}
