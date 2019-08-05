import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material-components.module';
import { PowerHouseRedSocialRoutingModule } from './PowerHouseRedSocial-routing.module';
import { PowerHouseRedSocialComponent } from './PowerHouseRedSocial.component';
import { FuryCardModule } from '../../shared/card/card.module';
import { ListModule } from '../../shared/list/list.module';
import { PowerHouseRedSocialCreateUpdateModule } from './PowerHouseRedSocial-create-update/PowerHouseRedSocial-create-update.module';
import { HighlightModule } from '../../shared/highlightjs/highlight.module';

@NgModule({
  imports: [
    CommonModule,
    PowerHouseRedSocialRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    FuryCardModule,
    // Core
    HighlightModule,
    ListModule,
    PowerHouseRedSocialCreateUpdateModule,
  ],
  declarations: [PowerHouseRedSocialComponent],
  exports: [PowerHouseRedSocialComponent]
})
export class PowerHouseRedSocialModule {
}

