import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material-components.module';
import { PowerHouseRoutingModule } from './PowerHouse-routing.module';
import { PowerHouseComponent } from './PowerHouse.component';
import { FuryCardModule } from '../../shared/card/card.module';
import { ListModule } from '../../shared/list/list.module';
import { PowerHouseCreateUpdateModule } from './PowerHouse-create-update/PowerHouse-create-update.module';
import { HighlightModule } from '../../shared/highlightjs/highlight.module';

@NgModule({
  imports: [
    CommonModule,
    PowerHouseRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    FuryCardModule,
    // Core
    HighlightModule,
    ListModule,
    PowerHouseCreateUpdateModule,
  ],
  declarations: [PowerHouseComponent],
  exports: [PowerHouseComponent]
})
export class PowerHouseModule {
}

