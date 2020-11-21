import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ChartData } from 'chart.js';
import * as moment from 'moment';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { AdvancedPieChartWidgetOptions } from '../../shared/widgets/advanced-pie-chart-widget/advanced-pie-chart-widget-options.interface';
import { AudienceOverviewWidgetOptions } from '../../shared/widgets/audience-overview-widget/audience-overview-widget-options.interface';
import { BarChartWidgetOptions } from '../../shared/widgets/bar-chart-widget/bar-chart-widget-options.interface';
import { DonutChartWidgetOptions } from '../../shared/widgets/donut-chart-widget/donut-chart-widget-options.interface';
import { LineChartWidgetOptions } from '../../shared/widgets/line-chart-widget/line-chart-widget-options.interface';
import {
  RealtimeUsersWidgetData,
  RealtimeUsersWidgetPages
} from '../../shared/widgets/realtime-users-widget/realtime-users-widget.interface';
import { RecentSalesWidgetOptions } from '../../shared/widgets/recent-sales-widget/recent-sales-widget-options.interface';
import { SalesSummaryWidgetOptions } from '../../shared/widgets/sales-summary-widget/sales-summary-widget-options.interface';
import { AuthService } from "../../services/auth.services";
import { NgbModule,NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from "../../app.config";
import { CatalogsService, Saldo, MisPagos, ReservasPWHHoyView, ReservaDashboardView, CambioCalendarioClaseForm } from '../../services/catalogs.service';
import { AsistenciaComponent } from '../../../app/PowerHouse/Asistencia/Asistencia.component';
import { CambiarInstructorComponent } from '../../../app/PowerHouse/CambiarInstructor/CambiarInstructor.component';
import { ReservarLugarComponent } from '../../../app/PowerHouse/ReservarLugar/ReservarLugar.component';
import { DetalleVentaComponent } from '../../../app/PowerHouse/DetalleVenta/DetalleVenta.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'fury-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class DashboardComponent implements OnInit {
  
  tableHover = true;
	tableStriped = true;
	tableCondensed = true;
	tableBordered = true;
	Saldo : Saldo[];
  MisPagos : MisPagos[];
  MisPagosHoy : MisPagos[];
  ReservasHoy : ReservasPWHHoyView[];
  ReservasAPartirHoy: ReservasPWHHoyView[];
  ReservasDashboard: ReservaDashboardView[];
  
  
  CantPagos : number = 0;
  CantPagosHoy: number = 0;
  verpagos: boolean = false;
  constructor(
    private router: Router,
    public auth: AuthService, private catalog: CatalogsService,
    config: NgbCarouselConfig, private _http: HttpClient, 
    private dialog: MatDialog,
    @Inject(APP_CONFIG) private configimages: AppConfig,
    ) {
    /**
     * Edge wrong drawing fix
     * Navigate anywhere and on Promise right back
     */
    if (/Edge/.test(navigator.userAgent)) {
      console.log("edge");
    }  
  }

  /**
   * Needed for the Layout
   */
  private _gap = 16;
  gap = `${this._gap}px`;

  /**
   * Everything implemented here is purely for Demo-Demonstration and can be removed and replaced with your implementation
   */
  ngOnInit() {


    var acc = this.auth.getAccount();
    if (acc.NPK_Usuario === 2023 || acc.NPK_Usuario === 2024 || acc.NPK_Usuario === 3018 || acc.NPK_Usuario === 2026) {
      this.verpagos = true;
    }
    if (!acc)
      this.router.navigate(['/']);
    else
      this.router.navigate(['/dashboard']);
  }  
  ngAfterViewInit() {
    setTimeout(() => {     
      this.fillView();
    });
  }
  fillView() {
    this.catalog.getMiHistoriaPagos_PWH().subscribe(pagos => {
      this.MisPagos = pagos;
      this.CantPagos = this.MisPagos.length;
    });
    this.catalog.getMiHistoriaPagos_PWHHOY().subscribe(pagos => {
      this.MisPagosHoy = pagos;
      this.CantPagosHoy = this.MisPagosHoy.length;
    });
    this.catalog.getReservasPWHHoy().subscribe(reservas => {
      this.ReservasHoy = reservas;
    });
    this.catalog.getReservasPWHApartirHoy().subscribe(reservas => {
      this.ReservasAPartirHoy = reservas;
    });
    this.catalog.getReservasDashBoard().subscribe(reservas => {
      this.ReservasDashboard = reservas;
    });
  }
  verDetalle(CalendarioClase){
    this.dialog.open(AsistenciaComponent, {
			data: CalendarioClase,height: "500px",width: "800px",}).afterClosed().subscribe((genero) => {		
        this.fillView();
		});
  }
  col(colAmount: number) {
    return `1 1 calc(${100 / colAmount}% - ${this._gap - (this._gap / colAmount)}px)`;
  }
  CambiarInstructor(CalendarioClase){
    this.dialog.open(CambiarInstructorComponent, {
			data: CalendarioClase,height: "400px",width: "400px",}).afterClosed().subscribe((genero) => {		
        this.fillView();
		});
  }
  AbrirMapa(CalendarioClase){
    this.dialog.open(ReservarLugarComponent, {
			data: CalendarioClase,height: "800px",width: "800px",}).afterClosed().subscribe((genero) => {		
        this.fillView();
		});
  }
  AbrirComportamientoPago(row) {    
    this.dialog.open(DetalleVentaComponent, {
			data: row,height: "800px",width: "800px",}).afterClosed().subscribe((genero) => {	
		});
  }
}
