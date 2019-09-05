import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material-components.module';
import { InstructorRedSocialRoutingModule } from './InstructorRedSocial-routing.module';
import { InstructorRedSocialComponent } from './InstructorRedSocial.component';
import { FuryCardModule } from '../../shared/card/card.module';
import { ListModule } from '../../shared/list/list.module';
import { InstructorRedSocialCreateUpdateModule } from './InstructorRedSocial-create-update/InstructorRedSocial-create-update.module';
import { HighlightModule } from '../../shared/highlightjs/highlight.module';


@NgModule({
  imports: [
    CommonModule,
    InstructorRedSocialRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    FuryCardModule,
    // Core
    HighlightModule,
    ListModule,
    InstructorRedSocialCreateUpdateModule,
  ],
  declarations: [InstructorRedSocialComponent],
  exports: [InstructorRedSocialComponent]
})
export class InstructorRedSocialModule {
}

