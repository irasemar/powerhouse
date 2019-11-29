import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material-components.module';
import { ReporteClasesUsuarioRoutingModule } from './ReporteClasesUsuario-routing.module';
import { ReporteClasesUsuarioComponent } from './ReporteClasesUsuario.component';
import { FuryCardModule } from '../../shared/card/card.module';
import { ListModule } from '../../shared/list/list.module';
import { HighlightModule } from '../../shared/highlightjs/highlight.module';

@NgModule({
  imports: [
    CommonModule,
    ReporteClasesUsuarioRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    FuryCardModule,
    // Core
    HighlightModule,
    ListModule,
  ],
  declarations: [ReporteClasesUsuarioComponent],
  exports: [ReporteClasesUsuarioComponent]
})
export class ReporteClasesUsuarioModule {
}

