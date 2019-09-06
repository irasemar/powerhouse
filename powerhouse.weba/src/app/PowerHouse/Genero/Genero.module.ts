import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material-components.module';
import { GeneroRoutingModule } from './Genero-routing.module';
import { GeneroComponent } from './Genero.component';
import { FuryCardModule } from '../../shared/card/card.module';
import { ListModule } from '../../shared/list/list.module';
import { GeneroCreateUpdateModule } from './Genero-create-update/Genero-create-update.module';
import { HighlightModule } from '../../shared/highlightjs/highlight.module';

@NgModule({
  imports: [
    CommonModule,
    GeneroRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    FuryCardModule,
    // Core
    HighlightModule,
    ListModule,
    GeneroCreateUpdateModule,
  ],
  declarations: [GeneroComponent],
  exports: [GeneroComponent]
})
export class GeneroModule {
}

