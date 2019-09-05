import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,PaqueteForm } from '../../../services/catalogs.service';
@Component({
  selector: 'fury-Paquete-create-update',
  templateUrl: './Paquete-create-update.component.html',
  styleUrls: ['./Paquete-create-update.component.scss']
})
export class PaqueteCreateUpdateComponent implements OnInit {

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<PaqueteCreateUpdateComponent>,
              private fb: FormBuilder, private catalog: CatalogsService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as PaqueteForm;
    }

    this.form = this.fb.group({
      NPK_Paquete: [this.defaults.NPK_Paquete || ''],
      Paquete: [this.defaults.Paquete || ''],
      CantidadClases: [this.defaults.CantidadClases || ''],
      Precio: [this.defaults.Precio || ''],
      DescripcionExpiracion: [this.defaults.DescripcionExpiracion || ''],
      ExpiracionDias: [this.defaults.ExpiracionDias || ''],
      Activo: [this.defaults.Activo || 0],
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createPaquete();
    } else if (this.mode === 'update') {
      this.updatePaquete();
    }
  }

  createPaquete() {
    const paquete = this.form.value;
    paquete.NPK_Paquete = 0;
    this.catalog.letPaquete(paquete).subscribe(paquetes =>{this.dialogRef.close(paquete);});
  }

  updatePaquete() {
    const paquete = this.form.value;
    this.catalog.letPaquete(paquete).subscribe(paquetes =>{this.dialogRef.close(paquete);});
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
