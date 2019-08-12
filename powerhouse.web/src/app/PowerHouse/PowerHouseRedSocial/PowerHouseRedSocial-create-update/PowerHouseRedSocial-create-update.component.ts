import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,PowerHouseRedSocialForm } from '../../../services/catalogs.service';
@Component({
  selector: 'fury-PowerHouseRedSocial-create-update',
  templateUrl: './PowerHouseRedSocial-create-update.component.html',
  styleUrls: ['./PowerHouseRedSocial-create-update.component.scss']
})
export class PowerHouseRedSocialCreateUpdateComponent implements OnInit {

  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  RedSocials = [];
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<PowerHouseRedSocialCreateUpdateComponent>,
              private fb: FormBuilder, private catalog: CatalogsService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as PowerHouseRedSocialForm;
    }
    this.form = this.fb.group({
      NPK_PowerHouseRedSocial: [this.defaults.NPK_PowerHouseRedSocial || ''],
      NFK_RedSocial: [this.defaults.NFK_RedSocial || ''],
      RedSocial: [this.defaults.RedSocial || ''],
      Activo: [this.defaults.Activo || 0],
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
          this.catalog.getRedSocials(1).subscribe(redsocials =>{this.RedSocials = redsocials;})
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createPowerHouseRedSocial();
    } else if (this.mode === 'update') {
      this.updatePowerHouseRedSocial();
    }
  }

  createPowerHouseRedSocial() {
    const powerhouseredsocial = this.form.value;
    powerhouseredsocial.NPK_PowerHouseRedSocial = 0;
    this.catalog.letPowerHouseRedSocial(powerhouseredsocial).subscribe(powerhouseredsocials =>{this.dialogRef.close(powerhouseredsocial);});
  }

  updatePowerHouseRedSocial() {
    const powerhouseredsocial = this.form.value;
    this.catalog.letPowerHouseRedSocial(powerhouseredsocial).subscribe(powerhouseredsocials =>{this.dialogRef.close(powerhouseredsocial);});
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
