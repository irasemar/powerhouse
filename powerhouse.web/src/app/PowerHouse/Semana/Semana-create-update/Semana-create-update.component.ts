import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,SemanaForm } from '../../../services/catalogs.service';
@Component({
  selector: 'fury-Semana-create-update',
  templateUrl: './Semana-create-update.component.html',
  styleUrls: ['./Semana-create-update.component.scss']
})
export class SemanaCreateUpdateComponent implements OnInit {

  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  Anios = [];
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<SemanaCreateUpdateComponent>,
              private fb: FormBuilder, private catalog: CatalogsService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as SemanaForm;
    }

    var dateIni = new Date(parseInt(String(this.defaults.FechaInicio).split('-')[2]),
      parseInt(String(this.defaults.FechaInicio).split('-')[1])-1,
      parseInt(String(this.defaults.FechaInicio).split('-')[0]));
    var dateFin = new Date(parseInt(String(this.defaults.FechaFin).split('-')[2]),
      parseInt(String(this.defaults.FechaFin).split('-')[1])-1,
      parseInt(String(this.defaults.FechaFin).split('-')[0]));
    console.log(this.defaults);
    this.form = this.fb.group({
      NPK_Semana: [this.defaults.NPK_Semana || ''],
      NFK_Anio: [this.defaults.NFK_Anio || ''],
      NumeroSemana: [this.defaults.NumeroSemana || ''],
      FechaInicio: [dateIni || ''],
      FechaFin: [dateFin || ''],
      Activo: [this.defaults.Activo || 0],
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
          this.catalog.getAnios(1).subscribe(años =>{this.Anios = años;console.log(this.Anios);})
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createSemana();
    } else if (this.mode === 'update') {
      this.updateSemana();
    }
  }

  createSemana() {
    const semana = this.form.value;
    semana.NPK_Semana = 0;
    this.catalog.letSemana(semana).subscribe(semanas =>{this.dialogRef.close(semana);});
  }

  updateSemana() {
    const semana = this.form.value;
    this.catalog.letSemana(semana).subscribe(semanas =>{this.dialogRef.close(semana);});
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
