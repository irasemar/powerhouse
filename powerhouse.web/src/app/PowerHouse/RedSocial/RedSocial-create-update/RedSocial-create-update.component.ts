import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,RedSocialForm } from '../../../services/catalogs.service';
@Component({
  selector: 'fury-RedSocial-create-update',
  templateUrl: './RedSocial-create-update.component.html',
  styleUrls: ['./RedSocial-create-update.component.scss']
})
export class RedSocialCreateUpdateComponent implements OnInit {

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<RedSocialCreateUpdateComponent>,
              private fb: FormBuilder, private catalog: CatalogsService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as RedSocialForm;
    }

    this.form = this.fb.group({
      NPK_RedSocial: [this.defaults.NPK_RedSocial || ''],
      RedSocial: [this.defaults.RedSocial || ''],
      RedSocialImagen: [this.defaults.RedSocialImagen || ''],
      Activo: [this.defaults.Activo || 0],
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createRedSocial();
    } else if (this.mode === 'update') {
      this.updateRedSocial();
    }
  }

  createRedSocial() {
    const redsocial = this.form.value;
    redsocial.NPK_RedSocial = 0;
    this.catalog.letRedSocial(redsocial).subscribe(redsocials =>{this.dialogRef.close(redsocial);});
  }

  updateRedSocial() {
    const redsocial = this.form.value;
    this.catalog.letRedSocial(redsocial).subscribe(redsocials =>{this.dialogRef.close(redsocial);});
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
