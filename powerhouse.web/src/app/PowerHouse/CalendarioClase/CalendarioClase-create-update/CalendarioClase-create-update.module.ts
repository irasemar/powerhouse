import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule,FormControl, Validators } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatRadioModule, MatSelectModule } from '@angular/material';
import { CalendarioClaseCreateUpdateComponent } from './CalendarioClase-create-update.component';
import { BreadcrumbsModule } from '../../../core/breadcrumbs/breadcrumbs.module';
import { FuryCardModule } from '../../../shared/card/card.module';
import { HighlightModule } from '../../../shared/highlightjs/highlight.module';
import { MaterialModule } from '../../../shared/material-components.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    HighlightModule,
    FuryCardModule,
    BreadcrumbsModule,
    NgxMaterialTimepickerModule,
    NgxMatSelectSearchModule
  ],
  declarations: [CalendarioClaseCreateUpdateComponent],
  entryComponents: [CalendarioClaseCreateUpdateComponent],
  exports: [CalendarioClaseCreateUpdateComponent]
})
export class CalendarioClaseCreateUpdateModule {

  
  
}


