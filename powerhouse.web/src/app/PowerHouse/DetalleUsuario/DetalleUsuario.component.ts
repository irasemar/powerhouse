import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { CatalogsService, Saldo, MisPagos, HistoriaReserva } from "../../services/catalogs.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'fury-DetalleUsuario',
  templateUrl: './DetalleUsuario.component.html',
  styleUrls: ['./DetalleUsuario.component.scss']
})
export class DetalleUsuarioComponent implements OnInit, AfterViewInit, OnDestroy {
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
	constructor( private route: ActivatedRoute,private router: Router, private catalog: CatalogsService,) { }
	private _gap = 16;
	gap = `${this._gap}px`;
	ngOnInit() {
		this.npk_usuario = this.route.snapshot.paramMap.get("npk_usuario");
		this.usuario = this.route.snapshot.paramMap.get("usuario");

	  this.rows = [
		{
		  'name': {
			'first': 'Debora',
			'last': 'Castro'
		  },
		  'picture': 'assets/img/avatars/15.jpg',
		  'company': 'SIGNIDYNE',
		  'email': 'debora.castro@signidyne.ca',
		  'phone': '+1 (979) 427-3700',
		  'balance': '$1,743.04'
		},
		{
		  'name': {
			'first': 'Warren',
			'last': 'Gallegos'
		  },
		  'picture': 'assets/img/avatars/8.jpg',
		  'company': 'XSPORTS',
		  'email': 'warren.gallegos@xsports.biz',
		  'phone': '+1 (964) 433-3008',
		  'balance': '$1,122.90'
		},
		{
		  'name': {
			'first': 'Gordon',
			'last': 'Sloan'
		  },
		  'picture': 'assets/img/avatars/17.jpg',
		  'company': 'FUTURIS',
		  'email': 'gordon.sloan@futuris.com',
		  'phone': '+1 (904) 572-2860',
		  'balance': '$1,505.24'
		},
		{
		  'name': {
			'first': 'Nettie',
			'last': 'Hoover'
		  },
		  'picture': 'assets/img/avatars/5.jpg',
		  'company': 'UNEEQ',
		  'email': 'nettie.hoover@uneeq.us',
		  'phone': '+1 (943) 579-2855',
		  'balance': '$2,206.32'
		},
		{
		  'name': {
			'first': 'Bartlett',
			'last': 'Kramer'
		  },
		  'picture': 'assets/img/avatars/13.jpg',
		  'company': 'MIXERS',
		  'email': 'bartlett.kramer@mixers.co.uk',
		  'phone': '+1 (897) 410-2327',
		  'balance': '$1,220.73'
		},
		{
		  'name': {
			'first': 'Martina',
			'last': 'Barnes'
		  },
		  'picture': 'assets/img/avatars/17.jpg',
		  'company': 'VERAQ',
		  'email': 'martina.barnes@veraq.biz',
		  'phone': '+1 (917) 535-3821',
		  'balance': '$1,236.69'
		},
		{
		  'name': {
			'first': 'Vasquez',
			'last': 'Pugh'
		  },
		  'picture': 'assets/img/avatars/8.jpg',
		  'company': 'MOMENTIA',
		  'email': 'vasquez.pugh@momentia.net',
		  'phone': '+1 (903) 505-2458',
		  'balance': '$1,734.39'
		},
		{
		  'name': {
			'first': 'Moran',
			'last': 'Burris'
		  },
		  'picture': 'assets/img/avatars/9.jpg',
		  'company': 'ZOLAVO',
		  'email': 'moran.burris@zolavo.org',
		  'phone': '+1 (985) 531-3293',
		  'balance': '$2,320.01'
		},
		{
		  'name': {
			'first': 'Kayla',
			'last': 'Langley'
		  },
		  'picture': 'assets/img/avatars/6.jpg',
		  'company': 'ELECTONIC',
		  'email': 'kayla.langley@electonic.tv',
		  'phone': '+1 (901) 473-2752',
		  'balance': '$2,600.99'
		},
		{
		  'name': {
			'first': 'Hutchinson',
			'last': 'Golden'
		  },
		  'picture': 'assets/img/avatars/4.jpg',
		  'company': 'CEDWARD',
		  'email': 'hutchinson.golden@cedward.name',
		  'phone': '+1 (906) 540-2818',
		  'balance': '$3,077.00'
		},
		{
		  'name': {
			'first': 'Cherry',
			'last': 'Pollard'
		  },
		  'picture': 'assets/img/avatars/6.jpg',
		  'company': 'ZOXY',
		  'email': 'cherry.pollard@zoxy.io',
		  'phone': '+1 (962) 591-3338',
		  'balance': '$2,528.52'
		},
		{
		  'name': {
			'first': 'Samantha',
			'last': 'Flowers'
		  },
		  'picture': 'assets/img/avatars/4.jpg',
		  'company': 'COMTOUR',
		  'email': 'samantha.flowers@comtour.me',
		  'phone': '+1 (948) 513-3422',
		  'balance': '$3,517.51'
		}
	  ];
  
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
}
