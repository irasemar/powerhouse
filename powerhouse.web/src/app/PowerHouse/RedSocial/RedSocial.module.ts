import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material-components.module';
import { RedSocialRoutingModule } from './RedSocial-routing.module';
import { RedSocialComponent } from './RedSocial.component';
import { FuryCardModule } from '../../shared/card/card.module';
import { ListModule } from '../../shared/list/list.module';
import { RedSocialCreateUpdateModule } from './RedSocial-create-update/RedSocial-create-update.module';
import { HighlightModule } from '../../shared/highlightjs/highlight.module';

@NgModule({
  imports: [
    CommonModule,
    RedSocialRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    FuryCardModule,
    // Core
    HighlightModule,
    ListModule,
    RedSocialCreateUpdateModule,
  ],
  declarations: [RedSocialComponent],
  exports: [RedSocialComponent]
})
export class RedSocialModule {
}

