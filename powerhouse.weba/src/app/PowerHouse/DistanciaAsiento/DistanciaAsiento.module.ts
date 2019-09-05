import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material-components.module';
import { DistanciaAsientoRoutingModule } from './DistanciaAsiento-routing.module';
import { DistanciaAsientoComponent } from './DistanciaAsiento.component';
import { FuryCardModule } from '../../shared/card/card.module';
import { ListModule } from '../../shared/list/list.module';
import { DistanciaAsientoCreateUpdateModule } from './DistanciaAsiento-create-update/DistanciaAsiento-create-update.module';
import { HighlightModule } from '../../shared/highlightjs/highlight.module';

@NgModule({
  imports: [
    CommonModule,
    DistanciaAsientoRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    FuryCardModule,
    // Core
    HighlightModule,
    ListModule,
    DistanciaAsientoCreateUpdateModule,
  ],
  declarations: [DistanciaAsientoComponent],
  exports: [DistanciaAsientoComponent]
})
export class DistanciaAsientoModule {
}

