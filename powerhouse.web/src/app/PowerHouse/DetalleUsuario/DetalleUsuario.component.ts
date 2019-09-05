import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { CatalogsService, Saldo, MisPagos, HistoriaReserva, RespuestaView } from "../../services/catalogs.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormControl } from '@angular/forms';
import { AuthService, Usuario,} from '../../services/auth.services';

@Component({
  selector: 'fury-DetalleUsuario',
  templateUrl: './DetalleUsuario.component.html',
  styleUrls: ['./DetalleUsuario.component.scss']
})
export class DetalleUsuarioComponent implements OnInit, AfterViewInit, OnDestroy {
	form = this.fb.group({
		Cantidad : ""
	  });
	npk_usuario = "";
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

	constructor( private route: ActivatedRoute,private router: Router, private catalog: CatalogsService,private fb: FormBuilder,public auth: AuthService,) { }
	private _gap = 16;
	gap = `${this._gap}px`;
	ngOnInit() {
		this.npk_usuario = this.route.snapshot.paramMap.get("npk_usuario");
		this.usuario = this.route.snapshot.paramMap.get("usuario");
	  
	}
	ngAfterViewInit() {
		setTimeout(() => {
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
		});
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
			});
		}

	}
}
