import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material-components.module';
import { PaqueteRoutingModule } from './Paquete-routing.module';
import { PaqueteComponent } from './Paquete.component';
import { FuryCardModule } from '../../shared/card/card.module';
import { ListModule } from '../../shared/list/list.module';
import { PaqueteCreateUpdateModule } from './Paquete-create-update/Paquete-create-update.module';
import { HighlightModule } from '../../shared/highlightjs/highlight.module';

@NgModule({
  imports: [
    CommonModule,
    PaqueteRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    FuryCardModule,
    // Core
    HighlightModule,
    ListModule,
    PaqueteCreateUpdateModule,
  ],
  declarations: [PaqueteComponent],
  exports: [PaqueteComponent]
})
export class PaqueteModule {
}

