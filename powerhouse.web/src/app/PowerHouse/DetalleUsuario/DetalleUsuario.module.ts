import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material-components.module';
import { DetalleUsuarioRoutingModule } from './DetalleUsuario-routing.module';
import { DetalleUsuarioComponent } from './DetalleUsuario.component';
import { FuryCardModule } from '../../shared/card/card.module';
import { ListModule } from '../../shared/list/list.module';
import { HighlightModule } from '../../shared/highlightjs/highlight.module';
import { QuickInfoWidgetModule } from '../../shared/widgets/quick-info-widget/quick-info-widget.module';
import { DetalleVentaModule } from 'app/PowerHouse/DetalleVenta/DetalleVenta.module';

@NgModule({
  imports: [
    CommonModule,
    DetalleUsuarioRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    FuryCardModule,
    // Core
    HighlightModule,
    ListModule,
    QuickInfoWidgetModule,
    DetalleVentaModule
  ],
  declarations: [DetalleUsuarioComponent],
  exports: [DetalleUsuarioComponent]
})
export class DetalleUsuarioModule {
}

