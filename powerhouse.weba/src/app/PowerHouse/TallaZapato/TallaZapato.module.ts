import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material-components.module';
import { TallaZapatoRoutingModule } from './TallaZapato-routing.module';
import { TallaZapatoComponent } from './TallaZapato.component';
import { FuryCardModule } from '../../shared/card/card.module';
import { ListModule } from '../../shared/list/list.module';
import { TallaZapatoCreateUpdateModule } from './TallaZapato-create-update/TallaZapato-create-update.module';
import { HighlightModule } from '../../shared/highlightjs/highlight.module';

@NgModule({
  imports: [
    CommonModule,
    TallaZapatoRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    FuryCardModule,
    // Core
    HighlightModule,
    ListModule,
    TallaZapatoCreateUpdateModule,
  ],
  declarations: [TallaZapatoComponent],
  exports: [TallaZapatoComponent]
})
export class TallaZapatoModule {
}

