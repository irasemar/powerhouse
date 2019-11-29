import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material-components.module';
import { ReservarLugarRoutingModule } from './ReservarLugar-routing.module';
import { ReservarLugarComponent } from './ReservarLugar.component';
import { FuryCardModule } from '../../shared/card/card.module';
import { ListModule } from '../../shared/list/list.module';
import { HighlightModule } from '../../shared/highlightjs/highlight.module';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
  imports: [
    CommonModule,
    ReservarLugarRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    FuryCardModule,
    // Core
    HighlightModule,
    ListModule,
    NgxMatSelectSearchModule,
  ],
  declarations: [ReservarLugarComponent],
  exports: [ReservarLugarComponent]
})
export class ReservarLugarModule {
}

