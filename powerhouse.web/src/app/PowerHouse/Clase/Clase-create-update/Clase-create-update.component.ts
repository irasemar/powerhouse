import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,ClaseForm } from '../../../services/catalogs.service';
@Component({
  selector: 'fury-Clase-create-update',
  templateUrl: './Clase-create-update.component.html',
  styleUrls: ['./Clase-create-update.component.scss']
})
export class ClaseCreateUpdateComponent implements OnInit {

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<ClaseCreateUpdateComponent>,
              private fb: FormBuilder, private catalog: CatalogsService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as ClaseForm;
    }

    this.form = this.fb.group({
      NPK_Clase: [this.defaults.NPK_Clase || ''],
      Clase: [this.defaults.Clase || ''],
      DescripcionClase: [this.defaults.DescripcionClase || ''],
      Tiempo: [this.defaults.Tiempo || ''],
      Activo: [this.defaults.Activo || 0],
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createClase();
    } else if (this.mode === 'update') {
      this.updateClase();
    }
  }

  createClase() {
    const clase = this.form.value;
    clase.NPK_Clase = 0;
    this.catalog.letClase(clase).subscribe(clases =>{this.dialogRef.close(clase);});
  }

  updateClase() {
    const clase = this.form.value;
    this.catalog.letClase(clase).subscribe(clases =>{this.dialogRef.close(clase);});
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
