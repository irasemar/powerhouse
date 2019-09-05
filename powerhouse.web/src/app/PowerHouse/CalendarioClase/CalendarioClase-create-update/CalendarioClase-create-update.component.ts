import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,CalendarioClaseView } from "../../../services/catalogs.service";
import { UploadService } from '../../../services/upload.service';
import { forkJoin } from 'rxjs';
import {NgxMaterialTimepickerComponent} from 'ngx-material-timepicker';

@Component({
  selector: 'fury-CalendarioClase-create-update',
  templateUrl: './CalendarioClase-create-update.component.html',
  styleUrls: ['./CalendarioClase-create-update.component.scss']
})
export class CalendarioClaseCreateUpdateComponent implements OnInit {
  
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  Usuarios = [];
  nfk_calendario = "";
  NPK_CalendarioClase = 0;
  Hora24
  
  Instructors = [];
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<CalendarioClaseCreateUpdateComponent>,
              private fb: FormBuilder, private catalog: CatalogsService, private uploadService: UploadService) {
  }

  ngOnInit() {
    this.NPK_CalendarioClase =  this.defaults.NPK_CalendarioClase;
    this.nfk_calendario = this.defaults.NFK_Calendario;
    console.log(this.defaults);

    if (this.defaults && this.defaults.NPK_CalendarioClase > 0) {
      this.mode = 'update';
    } else {
      this.defaults = {} as CalendarioClaseView;
    }

    this.form = this.fb.group({
      NPK_CalendarioClase: [this.defaults.NPK_CalendarioClase || ''],
      NFK_Calendario: [this.nfk_calendario || ''],
      NFK_Instructor: [this.defaults.NFK_Instructor || ''],
      NFK_InstructorAdjunto: [this.defaults.NFK_InstructorAdjunto || ''],
      HoraInicio: [this.defaults.HoraInicio || ''],
      Duracion: [this.defaults.Duracion || ''],
      Actividad: [this.defaults.Actividad || ''],
      Activo: [this.defaults.Activo || 0],
    });
    this.Hora24 = this.defaults.HoraInicio;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.catalog.getInstructors(1).subscribe(instructors =>{this.Instructors = instructors;})
    });
  }
  save() {
    if (this.mode === 'create') {
      this.createCalendarioClase();
    } else if (this.mode === 'update') {
      this.updateCalendarioClase();
    }
  }

  createCalendarioClase() {
    const CalendarioClase = this.form.value;
    CalendarioClase.NFK_Calendario = this.nfk_calendario;
    CalendarioClase.NPK_CalendarioClase = 0;
    this.catalog.letCalendarioClase(CalendarioClase).subscribe(CalendarioClases =>{
      this.dialogRef.close(CalendarioClases);
    });
  }

  updateCalendarioClase() {
    const CalendarioClase = this.form.value;
    this.catalog.letCalendarioClase(CalendarioClase).subscribe(CalendarioClases =>{
      this.dialogRef.close(CalendarioClases);
    });
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
  
}
