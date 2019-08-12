import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,SalonForm } from '../../../services/catalogs.service';
@Component({
  selector: 'fury-Salon-create-update',
  templateUrl: './Salon-create-update.component.html',
  styleUrls: ['./Salon-create-update.component.scss']
})
export class SalonCreateUpdateComponent implements OnInit {

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<SalonCreateUpdateComponent>,
              private fb: FormBuilder, private catalog: CatalogsService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as SalonForm;
    }

    this.form = this.fb.group({
      NPK_Salon: [this.defaults.NPK_Salon || ''],
      Salon: [this.defaults.Salon || ''],
      Activo: [this.defaults.Activo || 0],
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createSalon();
    } else if (this.mode === 'update') {
      this.updateSalon();
    }
  }

  createSalon() {
    const salon = this.form.value;
    salon.NPK_Salon = 0;
    this.catalog.letSalon(salon).subscribe(salons =>{this.dialogRef.close(salon);});
  }

  updateSalon() {
    const salon = this.form.value;
    this.catalog.letSalon(salon).subscribe(salons =>{this.dialogRef.close(salon);});
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
