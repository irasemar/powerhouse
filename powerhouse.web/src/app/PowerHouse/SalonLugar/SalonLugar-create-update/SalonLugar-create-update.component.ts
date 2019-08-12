import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,SalonLugarForm } from '../../../services/catalogs.service';
@Component({
  selector: 'fury-SalonLugar-create-update',
  templateUrl: './SalonLugar-create-update.component.html',
  styleUrls: ['./SalonLugar-create-update.component.scss']
})
export class SalonLugarCreateUpdateComponent implements OnInit {

  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  Salons = [];
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<SalonLugarCreateUpdateComponent>,
              private fb: FormBuilder, private catalog: CatalogsService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as SalonLugarForm;
    }



    this.form = this.fb.group({
      NPK_SalonLugar: [this.defaults.NPK_SalonLugar || ''],
      NFK_Salon: [this.defaults.NFK_Salon || ''],
      SalonLugar: [this.defaults.SalonLugar || ''],
      Activo: [this.defaults.Activo || 0],
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
          this.catalog.getSalons(1).subscribe(salons =>{this.Salons = salons;})
    });
  }
  save() {
    if (this.mode === 'create') {
      this.createSalonLugar();
    } else if (this.mode === 'update') {
      this.updateSalonLugar();
    }
  }

  createSalonLugar() {
    const salonlugar = this.form.value;
    salonlugar.NPK_SalonLugar = 0;
    this.catalog.letSalonLugar(salonlugar).subscribe(salonlugars =>{this.dialogRef.close(salonlugar);});
  }

  updateSalonLugar() {
    const salonlugar = this.form.value;
    this.catalog.letSalonLugar(salonlugar).subscribe(salonlugars =>{this.dialogRef.close(salonlugar);});
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
