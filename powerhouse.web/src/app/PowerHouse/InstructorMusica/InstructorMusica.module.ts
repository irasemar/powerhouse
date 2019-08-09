import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material-components.module';
import { InstructorMusicaRoutingModule } from './InstructorMusica-routing.module';
import { InstructorMusicaComponent } from './InstructorMusica.component';
import { FuryCardModule } from '../../shared/card/card.module';
import { ListModule } from '../../shared/list/list.module';
import { InstructorMusicaCreateUpdateModule } from './InstructorMusica-create-update/InstructorMusica-create-update.module';
import { HighlightModule } from '../../shared/highlightjs/highlight.module';


@NgModule({
  imports: [
    CommonModule,
    InstructorMusicaRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    FuryCardModule,
    // Core
    HighlightModule,
    ListModule,
    InstructorMusicaCreateUpdateModule,
  ],
  declarations: [InstructorMusicaComponent],
  exports: [InstructorMusicaComponent]
})
export class InstructorMusicaModule {
}

