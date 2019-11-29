import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AspectRatioModule } from '../../shared/aspect-ratio/aspect-ratio.module';
import { MaterialModule } from '../../shared/material-components.module';
import { AdvancedPieChartWidgetModule } from '../../shared/widgets/advanced-pie-chart-widget/advanced-pie-chart-widget.module';
import { AudienceOverviewWidgetModule } from '../../shared/widgets/audience-overview-widget/audience-overview-widget.module';
import { BarChartWidgetModule } from '../../shared/widgets/bar-chart-widget/bar-chart-widget.module';
import { DonutChartWidgetModule } from '../../shared/widgets/donut-chart-widget/donut-chart-widget.module';
import { LineChartWidgetModule } from '../../shared/widgets/line-chart-widget/line-chart-widget.module';
import { MapsWidgetModule } from '../../shared/widgets/maps-widget/maps-widget.module';
import { MarketWidgetModule } from '../../shared/widgets/market-widget/market-widget.module';
import { QuickInfoWidgetModule } from '../../shared/widgets/quick-info-widget/quick-info-widget.module';
import { RealtimeUsersWidgetModule } from '../../shared/widgets/realtime-users-widget/realtime-users-widget.module';
import { RecentSalesWidgetModule } from '../../shared/widgets/recent-sales-widget/recent-sales-widget.module';
import { SalesSummaryWidgetModule } from '../../shared/widgets/sales-summary-widget/sales-summary-widget.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AsistenciaModule } from '../../../app/PowerHouse/Asistencia/Asistencia.module';
import { CambiarInstructorModule } from '../../../app/PowerHouse/CambiarInstructor/CambiarInstructor.module';
import { ReservarLugarModule } from '../../../app/PowerHouse/ReservarLugar/ReservarLugar.module';
import { DetalleVentaModule } from '../../../app/PowerHouse/DetalleVenta/DetalleVenta.module';
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,

    // Core
    AspectRatioModule,

    // Widgets
    BarChartWidgetModule,
    LineChartWidgetModule,
    DonutChartWidgetModule,
    SalesSummaryWidgetModule,
    AudienceOverviewWidgetModule,
    RealtimeUsersWidgetModule,
    QuickInfoWidgetModule,
    RecentSalesWidgetModule,
    AdvancedPieChartWidgetModule,
    MapsWidgetModule,
    MarketWidgetModule,
    NgbModule,
    AsistenciaModule,
    CambiarInstructorModule,
    ReservarLugarModule,
    DetalleVentaModule
  ],
  declarations: [DashboardComponent],
  providers: [DashboardService]
})
export class DashboardModule {
}
