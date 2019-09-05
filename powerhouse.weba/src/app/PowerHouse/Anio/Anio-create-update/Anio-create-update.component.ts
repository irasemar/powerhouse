import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,AñoForm } from '../../../services/catalogs.service';
@Component({
  selector: 'fury-Anio-create-update',
  templateUrl: './Anio-create-update.component.html',
  styleUrls: ['./Anio-create-update.component.scss']
})
export class AnioCreateUpdateComponent implements OnInit {

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<AnioCreateUpdateComponent>,
              private fb: FormBuilder, private catalog: CatalogsService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as AñoForm;
    }
    this.form = this.fb.group({
      NPK_Anio: [this.defaults.NPK_Año || ''],
      Anio: [this.defaults.Anio || ''],
      Activo: [this.defaults.Activo || 0],
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createAño();
    } else if (this.mode === 'update') {
      this.updateAño();
    }
  }

  createAño() {
    const año = this.form.value;
    año.NPK_Anio = 0;
    this.catalog.letAño(año).subscribe(años =>{this.dialogRef.close(año);});
  }

  updateAño() {
    const año = this.form.value;
    this.catalog.letAño(año).subscribe(años =>{this.dialogRef.close(año);});
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
