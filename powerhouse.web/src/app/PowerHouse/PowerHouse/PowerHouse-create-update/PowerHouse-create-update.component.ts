import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,PowerHouseForm } from '../../../services/catalogs.service';
@Component({
  selector: 'fury-PowerHouse-create-update',
  templateUrl: './PowerHouse-create-update.component.html',
  styleUrls: ['./PowerHouse-create-update.component.scss']
})
export class PowerHouseCreateUpdateComponent implements OnInit {

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<PowerHouseCreateUpdateComponent>,
              private fb: FormBuilder, private catalog: CatalogsService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as PowerHouseForm;
    }

    this.form = this.fb.group({
      NPK_PowerHouse: [this.defaults.NPK_PowerHouse || ''],
      Direccion: [this.defaults.Direccion || ''],
      Telefonos: [this.defaults.Telefonos || ''],
      Latitud: [this.defaults.Latitud || ''],
      Longitud: [this.defaults.Longitud || ''],
      Activo: [this.defaults.Activo || 0],
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createPowerHouse();
    } else if (this.mode === 'update') {
      this.updatePowerHouse();
    }
  }

  createPowerHouse() {
    const powerhouse = this.form.value;
    powerhouse.NPK_PowerHouse = 0;
    this.catalog.letPowerHouse(powerhouse).subscribe(powerhouses =>{this.dialogRef.close(powerhouse);});
  }

  updatePowerHouse() {
    const powerhouse = this.form.value;
    this.catalog.letPowerHouse(powerhouse).subscribe(powerhouses =>{this.dialogRef.close(powerhouse);});
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
