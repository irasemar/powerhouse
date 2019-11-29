import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,UsuarioForm } from '../../../services/catalogs.service';
@Component({
  selector: 'fury-Usuario-create-update',
  templateUrl: './Usuario-create-update.component.html',
  styleUrls: ['./Usuario-create-update.component.scss']
})
export class UsuarioCreateUpdateComponent implements OnInit {

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<UsuarioCreateUpdateComponent>,
              private fb: FormBuilder, private catalog: CatalogsService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as UsuarioForm;
    }

    this.form = this.fb.group({
      NPK_Usuario: [this.defaults.NPK_Usuario || ''],
      Nombre: [this.defaults.Nombre || ''],
      Apellidos: [this.defaults.Apellidos || ''],
      Telefono: [this.defaults.Telefono || ''],
      FechaNacimiento: [this.defaults.FechaNacimiento || ''],      
      Correo: [this.defaults.Correo || ''],
    });
  }

ngAfterViewInit() {
	setTimeout(() => {
	});
}

  save() {
    if (this.mode === 'update') {
      this.updateUsuario();
    }
  }

  updateUsuario() {
    const usuario = this.form.value;
    this.catalog.letUsuario(usuario).subscribe(usuarios =>{this.dialogRef.close(usuario);});
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
