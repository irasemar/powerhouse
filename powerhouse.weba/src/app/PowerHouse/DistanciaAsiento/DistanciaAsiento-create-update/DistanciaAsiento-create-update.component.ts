import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,DistanciaAsientoForm } from '../../../services/catalogs.service';
@Component({
  selector: 'fury-DistanciaAsiento-create-update',
  templateUrl: './DistanciaAsiento-create-update.component.html',
  styleUrls: ['./DistanciaAsiento-create-update.component.scss']
})
export class DistanciaAsientoCreateUpdateComponent implements OnInit {

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<DistanciaAsientoCreateUpdateComponent>,
              private fb: FormBuilder, private catalog: CatalogsService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as DistanciaAsientoForm;
    }

    this.form = this.fb.group({
      NPK_DistanciaAsiento: [this.defaults.NPK_DistanciaAsiento || ''],
      DistanciaAsiento: [this.defaults.DistanciaAsiento || ''],
      Activo: [this.defaults.Activo || 0],
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createDistanciaAsiento();
    } else if (this.mode === 'update') {
      this.updateDistanciaAsiento();
    }
  }

  createDistanciaAsiento() {
    const distanciaasiento = this.form.value;
    distanciaasiento.NPK_DistanciaAsiento = 0;
    this.catalog.letDistanciaAsiento(distanciaasiento).subscribe(distanciaasientos =>{this.dialogRef.close(distanciaasiento);});
  }

  updateDistanciaAsiento() {
    const distanciaasiento = this.form.value;
    this.catalog.letDistanciaAsiento(distanciaasiento).subscribe(distanciaasientos =>{this.dialogRef.close(distanciaasiento);});
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
