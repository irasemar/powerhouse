import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material-components.module';
import { CalendarioRoutingModule } from './Calendario-routing.module';
import { CalendarioComponent } from './Calendario.component';
import { FuryCardModule } from '../../shared/card/card.module';
import { ListModule } from '../../shared/list/list.module';
import { CalendarioCreateUpdateModule } from './Calendario-create-update/Calendario-create-update.module';
import { HighlightModule } from '../../shared/highlightjs/highlight.module';

@NgModule({
  imports: [
    CommonModule,
    CalendarioRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    FuryCardModule,
    // Core
    HighlightModule,
    ListModule,
    CalendarioCreateUpdateModule,
  ],
  declarations: [CalendarioComponent],
  exports: [CalendarioComponent]
})
export class CalendarioModule {
}

