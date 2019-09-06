import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material-components.module';
import { InstructorRoutingModule } from './Instructor-routing.module';
import { InstructorComponent } from './Instructor.component';
import { FuryCardModule } from '../../shared/card/card.module';
import { ListModule } from '../../shared/list/list.module';
import { InstructorCreateUpdateModule } from './Instructor-create-update/Instructor-create-update.module';
import { HighlightModule } from '../../shared/highlightjs/highlight.module';

@NgModule({
  imports: [
    CommonModule,
    InstructorRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    FuryCardModule,
    // Core
    HighlightModule,
    ListModule,
    InstructorCreateUpdateModule,
  ],
  declarations: [InstructorComponent],
  exports: [InstructorComponent]
})
export class InstructorModule {
}

