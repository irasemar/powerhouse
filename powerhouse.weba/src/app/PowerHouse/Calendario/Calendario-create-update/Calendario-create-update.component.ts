import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,CalendarioForm } from '../../../services/catalogs.service';
@Component({
  selector: 'fury-Calendario-create-update',
  templateUrl: './Calendario-create-update.component.html',
  styleUrls: ['./Calendario-create-update.component.scss']
})
export class CalendarioCreateUpdateComponent implements OnInit {

  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  Anios = [];  Semanas = [];  Clases = [];
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<CalendarioCreateUpdateComponent>,
              private fb: FormBuilder, private catalog: CatalogsService) {
  }

  ngOnInit() {
    var dateIni = new Date();
    if (this.defaults) {
      this.mode = 'update';
      dateIni = new Date(parseInt(String(this.defaults.Date).split('-')[2]),
      parseInt(String(this.defaults.Date).split('-')[1])-1,
      parseInt(String(this.defaults.Date).split('-')[0]));
    } else {
      this.defaults = {} as CalendarioForm;
      dateIni = new Date();
    }
    

    console.log(this.defaults);
    this.form = this.fb.group({
      NPK_Calendario: [this.defaults.NPK_Calendario || ''],
      NFK_Anio: [this.defaults.NFK_Año || ''],
      NFK_Semana: [this.defaults.NFK_Semana || ''],
      Date: [dateIni || ''],
      NFK_Clase: [this.defaults.NFK_Clase || ''],
      Activo: [this.defaults.Activo || 0],
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
          this.catalog.getAnios(1).subscribe(anios =>{this.Anios = anios;})
          this.catalog.getClases(1).subscribe(clases =>{this.Clases = clases;})
          this.catalog.getSemanas(1).subscribe(semanas =>{this.Semanas = semanas;})
    });
  }
  save() {
    if (this.mode === 'create') {
      this.createCalendario();
    } else if (this.mode === 'update') {
      this.updateCalendario();
    }
  }

  createCalendario() {
    const calendario = this.form.value;
    calendario.NPK_Calendario = 0;
    this.catalog.letCalendario(calendario).subscribe(calendarios =>{this.dialogRef.close(calendario);});
  }

  updateCalendario() {
    const calendario = this.form.value;
    this.catalog.letCalendario(calendario).subscribe(calendarios =>{this.dialogRef.close(calendario);});
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
