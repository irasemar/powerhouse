import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { CatalogsService, Saldo, MisPagos, HistoriaReserva, RespuestaView, PaqueteForm, vwVentaPaqueteAdmin, MisTarjetas } from "../../services/catalogs.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormControl } from '@angular/forms';
import { AuthService, Usuario,} from '../../services/auth.services';
import { DetalleVentaComponent } from '../../PowerHouse/DetalleVenta/DetalleVenta.component';


@Component({
  selector: 'fury-DetalleUsuario',
  templateUrl: './DetalleUsuario.component.html',
  styleUrls: ['./DetalleUsuario.component.scss']
})
export class DetalleUsuarioComponent implements OnInit, AfterViewInit, OnDestroy {
	form = this.fb.group({
		Cantidad : ""
	  });
	formpaquete= this.fb.group({
		NPK_Paquete : 0,
		Tarjeta : "",
		NumeroAutorizacion : ""
	  });
	npk_usuario = "";
	NPK_UsuarioLogedo = 0;
	usuario = "";
	rows: any[];

	tableHover = true;
	tableStriped = true;
	tableCondensed = true;
	tableBordered = true;
	Saldo : Saldo[];
	MisPagos : MisPagos[];
	HistoriaClases : HistoriaReserva[];
	Reservas : HistoriaReserva[];
	SaldoClases : number = 0;
	CantClasesReservadas : number = 0;
	ReservasHoyRide : number = 0;
	ReservasHoyTrain : number = 0;
	TotalAsistenciaRide : number = 0;
	TotalAsistenciaTrain : number = 0;
	CantClasesTomadas : number = 0;
	CantPagos : number = 0;
	ClaseGratis: RespuestaView;
	paquetes : PaqueteForm [];
	Tarjetas: MisTarjetas[];

	constructor( private route: ActivatedRoute,private router: Router, private catalog: CatalogsService,private fb: FormBuilder,public auth: AuthService,
		private dialog: MatDialog,) { }
	private _gap = 16;
	gap = `${this._gap}px`;
	ngOnInit() {
		this.npk_usuario = this.route.snapshot.paramMap.get("npk_usuario");
		this.usuario = this.route.snapshot.paramMap.get("usuario");
		this.NPK_UsuarioLogedo = this.auth.getAccount().NPK_Usuario;
	}
	ngAfterViewInit() {
		setTimeout(() => {
			this.catalog.getPaquetes(1).subscribe(paquetelist =>{
				this.paquetes = paquetelist;
			});
			this.fillView();
		});
	}
	fillView() {
		this.catalog.getMiSaldo(this.npk_usuario).subscribe(saldo => {
			this.Saldo = saldo;
			this.SaldoClases = this.Saldo[0].Saldo;
			this.ReservasHoyRide = this.Saldo[0].ReservasHoyRide;
			this.ReservasHoyTrain = this.Saldo[0].ReservasHoyTrain;
			this.TotalAsistenciaRide = this.Saldo[0].TotalAsistenciaRide;
			this.TotalAsistenciaTrain = this.Saldo[0].TotalAsistenciaTrain;
		});
		this.catalog.getMiHistoriaPagos(this.npk_usuario).subscribe(pagos => {
			this.MisPagos = pagos;
			console.log(pagos);
			this.CantPagos = this.MisPagos.length;
		});
		this.catalog.getMiHistoria(this.npk_usuario).subscribe(clases => {
			this.HistoriaClases = clases;
			this.CantClasesTomadas = this.HistoriaClases.length;
		});
		this.catalog.getMisReservas(this.npk_usuario).subscribe(reservas => {
			this.Reservas = reservas;
			this.CantClasesReservadas = this.Reservas.length;
		});
		this.catalog.getMisTarjetas(this.npk_usuario).subscribe(tarjetas => { this.Tarjetas = tarjetas; console.log(tarjetas); });
	}
	ngOnDestroy() {
	}
	col(colAmount: number) {
		return `1 1 calc(${100 / colAmount}% - ${this._gap - (this._gap / colAmount)}px)`;
	}
	save() {
		if (this.form.value.Cantidad > 0) {
			this.catalog.getRegistrarRegalar_Clases(this.npk_usuario, this.form.value.Cantidad, this.auth.getAccount().NPK_Usuario).subscribe(reservas => {
				this.ClaseGratis = reservas;
				this.form = this.fb.group({
					Cantidad : ""
				  });
				this.fillView();
			});
		}

	}
	eliminarventa(Venta){
		console.log(Venta);
		this.catalog.letEliminarVenta(Venta.NPK_Venta).subscribe(reservas => { 
			this.fillView();
		});
	}
	eliminartarjeta(tarjeta) {
		console.log(tarjeta);
		this.catalog.letEliminarTarjeta(tarjeta).subscribe(reservas => { 
			this.fillView();
		});
	}
	CancelarReserva(Reserva) {  
		console.log(Reserva);
		this.catalog.letCancelarAsistencias(Reserva.NPK_CalendarioClase, Reserva.NPK_ReservaClase).subscribe(reservas => { 
			this.fillView();
		});
	}
	savePaquete() {
		var Paquete = {} as vwVentaPaqueteAdmin;
		var forma = this.formpaquete.value;
		Paquete.NFK_Usuario = Number(this.npk_usuario);
		Paquete.NFK_Paquete = forma.NPK_Paquete;
		Paquete.Tarjeta = forma.Tarjeta;
		Paquete.NumeroAutorizacion = forma.NumeroAutorizacion;
		Paquete.CreadoPor = this.auth.getAccount().NPK_Usuario;

		if (Paquete.NFK_Paquete > 0) {
			this.catalog.letRegistrar_VentaPaquete_Clases(Paquete).subscribe(reservas => {
				this.ClaseGratis = reservas;
				this.formpaquete = this.fb.group({
					NPK_Paquete : 0,
					Tarjeta : "",
					NumeroAutorizacion : ""
				  });
				this.fillView();
			});
		}

	}
	AbrirComportamientoPago(row) {    
		this.dialog.open(DetalleVentaComponent, {
				data: row,height: "800px",width: "800px",}).afterClosed().subscribe((genero) => {	
			});
	  }
}
