import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule,FormControl, Validators } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatRadioModule, MatSelectModule } from '@angular/material';
import { CalendarioCreateUpdateComponent } from './Calendario-create-update.component';
import { BreadcrumbsModule } from '../../../core/breadcrumbs/breadcrumbs.module';
import { FuryCardModule } from '../../../shared/card/card.module';
import { HighlightModule } from '../../../shared/highlightjs/highlight.module';
import { MaterialModule } from '../../../shared/material-components.module';



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
    BreadcrumbsModule
  ],
  declarations: [CalendarioCreateUpdateComponent],
  entryComponents: [CalendarioCreateUpdateComponent],
  exports: [CalendarioCreateUpdateComponent]
})
export class CalendarioCreateUpdateModule {

  
  
}


