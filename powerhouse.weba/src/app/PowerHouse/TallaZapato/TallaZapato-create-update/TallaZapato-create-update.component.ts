import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,TallaZapatoForm } from '../../../services/catalogs.service';
@Component({
  selector: 'fury-TallaZapato-create-update',
  templateUrl: './TallaZapato-create-update.component.html',
  styleUrls: ['./TallaZapato-create-update.component.scss']
})
export class TallaZapatoCreateUpdateComponent implements OnInit {

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<TallaZapatoCreateUpdateComponent>,
              private fb: FormBuilder, private catalog: CatalogsService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as TallaZapatoForm;
    }

    this.form = this.fb.group({
      NPK_TallaZapato: [this.defaults.NPK_TallaZapato || ''],
      TallaZapato: [this.defaults.TallaZapato || ''],
      Activo: [this.defaults.Activo || 0],
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createTallaZapato();
    } else if (this.mode === 'update') {
      this.updateTallaZapato();
    }
  }

  createTallaZapato() {
    const tallazapato = this.form.value;
    tallazapato.NPK_TallaZapato = 0;
    this.catalog.letTallaZapato(tallazapato).subscribe(tallazapatos =>{this.dialogRef.close(tallazapato);});
  }

  updateTallaZapato() {
    const tallazapato = this.form.value;
    this.catalog.letTallaZapato(tallazapato).subscribe(tallazapatos =>{this.dialogRef.close(tallazapato);});
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
