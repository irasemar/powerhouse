import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,GeneroForm } from '../../../services/catalogs.service';
@Component({
  selector: 'fury-Genero-create-update',
  templateUrl: './Genero-create-update.component.html',
  styleUrls: ['./Genero-create-update.component.scss']
})
export class GeneroCreateUpdateComponent implements OnInit {

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<GeneroCreateUpdateComponent>,
              private fb: FormBuilder, private catalog: CatalogsService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as GeneroForm;
    }

    this.form = this.fb.group({
      NPK_Genero: [this.defaults.NPK_Genero || ''],
      Genero: [this.defaults.Genero || ''],
      Activo: [this.defaults.Activo || 0],
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createGenero();
    } else if (this.mode === 'update') {
      this.updateGenero();
    }
  }

  createGenero() {
    const genero = this.form.value;
    genero.NPK_Genero = 0;
    this.catalog.letGenero(genero).subscribe(generos =>{this.dialogRef.close(genero);});
  }

  updateGenero() {
    const genero = this.form.value;
    this.catalog.letGenero(genero).subscribe(generos =>{this.dialogRef.close(genero);});
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
