import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material-components.module';
import { AlturaAsientoRoutingModule } from './AlturaAsiento-routing.module';
import { AlturaAsientoComponent } from './AlturaAsiento.component';
import { FuryCardModule } from '../../shared/card/card.module';
import { ListModule } from '../../shared/list/list.module';
import { AlturaAsientoCreateUpdateModule } from './AlturaAsiento-create-update/AlturaAsiento-create-update.module';
import { HighlightModule } from '../../shared/highlightjs/highlight.module';

@NgModule({
  imports: [
    CommonModule,
    AlturaAsientoRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    FuryCardModule,
    // Core
    HighlightModule,
    ListModule,
    AlturaAsientoCreateUpdateModule,
  ],
  declarations: [AlturaAsientoComponent],
  exports: [AlturaAsientoComponent]
})
export class AlturaAsientoModule {
}

