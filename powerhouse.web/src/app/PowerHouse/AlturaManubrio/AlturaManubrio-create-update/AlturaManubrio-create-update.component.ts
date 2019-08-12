import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,AlturaManubrioForm } from '../../../services/catalogs.service';
@Component({
  selector: 'fury-AlturaManubrio-create-update',
  templateUrl: './AlturaManubrio-create-update.component.html',
  styleUrls: ['./AlturaManubrio-create-update.component.scss']
})
export class AlturaManubrioCreateUpdateComponent implements OnInit {

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<AlturaManubrioCreateUpdateComponent>,
              private fb: FormBuilder, private catalog: CatalogsService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as AlturaManubrioForm;
    }

    this.form = this.fb.group({
      NPK_AlturaManubrio: [this.defaults.NPK_AlturaManubrio || ''],
      AlturaManubrio: [this.defaults.AlturaManubrio || ''],
      Activo: [this.defaults.Activo || 0],
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createAlturaManubrio();
    } else if (this.mode === 'update') {
      this.updateAlturaManubrio();
    }
  }

  createAlturaManubrio() {
    const alturamanubrio = this.form.value;
    alturamanubrio.NPK_AlturaManubrio = 0;
    this.catalog.letAlturaManubrio(alturamanubrio).subscribe(alturamanubrios =>{this.dialogRef.close(alturamanubrio);});
  }

  updateAlturaManubrio() {
    const alturamanubrio = this.form.value;
    this.catalog.letAlturaManubrio(alturamanubrio).subscribe(alturamanubrios =>{this.dialogRef.close(alturamanubrio);});
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
