import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,AlturaAsientoForm } from '../../../services/catalogs.service';
@Component({
  selector: 'fury-AlturaAsiento-create-update',
  templateUrl: './AlturaAsiento-create-update.component.html',
  styleUrls: ['./AlturaAsiento-create-update.component.scss']
})
export class AlturaAsientoCreateUpdateComponent implements OnInit {

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<AlturaAsientoCreateUpdateComponent>,
              private fb: FormBuilder, private catalog: CatalogsService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as AlturaAsientoForm;
    }

    this.form = this.fb.group({
      NPK_AlturaAsiento: [this.defaults.NPK_AlturaAsiento || ''],
      AlturaAsiento: [this.defaults.AlturaAsiento || ''],
      Activo: [this.defaults.Activo || 0],
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createAlturaAsiento();
    } else if (this.mode === 'update') {
      this.updateAlturaAsiento();
    }
  }

  createAlturaAsiento() {
    const alturaasiento = this.form.value;
    alturaasiento.NPK_AlturaAsiento = 0;
    this.catalog.letAlturaAsiento(alturaasiento).subscribe(alturaasientos =>{this.dialogRef.close(alturaasiento);});
  }

  updateAlturaAsiento() {
    const alturaasiento = this.form.value;
    this.catalog.letAlturaAsiento(alturaasiento).subscribe(alturaasientos =>{this.dialogRef.close(alturaasiento);});
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
