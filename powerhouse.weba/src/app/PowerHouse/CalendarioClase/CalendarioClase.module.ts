import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material-components.module';
import { CalendarioClaseRoutingModule } from './CalendarioClase-routing.module';
import { CalendarioClaseComponent } from './CalendarioClase.component';
import { FuryCardModule } from '../../shared/card/card.module';
import { ListModule } from '../../shared/list/list.module';
import { CalendarioClaseCreateUpdateModule } from './CalendarioClase-create-update/CalendarioClase-create-update.module';
import { HighlightModule } from '../../shared/highlightjs/highlight.module';


@NgModule({
  imports: [
    CommonModule,
    CalendarioClaseRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    FuryCardModule,
    // Core
    HighlightModule,
    ListModule,
    CalendarioClaseCreateUpdateModule,
  ],
  declarations: [CalendarioClaseComponent],
  exports: [CalendarioClaseComponent]
})
export class CalendarioClaseModule {
}

