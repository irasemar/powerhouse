import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material-components.module';
import { SalonLugarRoutingModule } from './SalonLugar-routing.module';
import { SalonLugarComponent } from './SalonLugar.component';
import { FuryCardModule } from '../../shared/card/card.module';
import { ListModule } from '../../shared/list/list.module';
import { SalonLugarCreateUpdateModule } from './SalonLugar-create-update/SalonLugar-create-update.module';
import { HighlightModule } from '../../shared/highlightjs/highlight.module';

@NgModule({
  imports: [
    CommonModule,
    SalonLugarRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    FuryCardModule,
    // Core
    HighlightModule,
    ListModule,
    SalonLugarCreateUpdateModule,
  ],
  declarations: [SalonLugarComponent],
  exports: [SalonLugarComponent]
})
export class SalonLugarModule {
}

