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

@Component({
  selector: 'fury-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class DashboardComponent implements OnInit {
  
  MiDashboardMantenimiento = [];
  DashboardMantenimiento = [];
  MiDashboardFalla = [];
  DashboardFalla = [];
  constructor(
    private router: Router,
    public auth: AuthService,
    config: NgbCarouselConfig, private _http: HttpClient, 
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
    console.log(acc);
    if (!acc)
      this.router.navigate(['/']);
    else
      this.router.navigate(['/dashboard']);
  }  
}
