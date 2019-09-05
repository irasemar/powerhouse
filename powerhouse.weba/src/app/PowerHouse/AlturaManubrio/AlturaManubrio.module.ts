import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material-components.module';
import { AlturaManubrioRoutingModule } from './AlturaManubrio-routing.module';
import { AlturaManubrioComponent } from './AlturaManubrio.component';
import { FuryCardModule } from '../../shared/card/card.module';
import { ListModule } from '../../shared/list/list.module';
import { AlturaManubrioCreateUpdateModule } from './AlturaManubrio-create-update/AlturaManubrio-create-update.module';
import { HighlightModule } from '../../shared/highlightjs/highlight.module';

@NgModule({
  imports: [
    CommonModule,
    AlturaManubrioRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    FuryCardModule,
    // Core
    HighlightModule,
    ListModule,
    AlturaManubrioCreateUpdateModule,
  ],
  declarations: [AlturaManubrioComponent],
  exports: [AlturaManubrioComponent]
})
export class AlturaManubrioModule {
}

