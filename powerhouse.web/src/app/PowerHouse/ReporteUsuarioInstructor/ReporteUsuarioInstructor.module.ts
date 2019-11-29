import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material-components.module';
import { ReporteUsuarioInstructorRoutingModule } from './ReporteUsuarioInstructor-routing.module';
import { ReporteUsuarioInstructorComponent } from './ReporteUsuarioInstructor.component';
import { FuryCardModule } from '../../shared/card/card.module';
import { ListModule } from '../../shared/list/list.module';
import { HighlightModule } from '../../shared/highlightjs/highlight.module';

@NgModule({
  imports: [
    CommonModule,
    ReporteUsuarioInstructorRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    FuryCardModule,
    // Core
    HighlightModule,
    ListModule,
  ],
  declarations: [ReporteUsuarioInstructorComponent],
  exports: [ReporteUsuarioInstructorComponent]
})
export class ReporteUsuarioInstructorModule {
}

