import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,InstructorForm } from '../../../services/catalogs.service';
@Component({
  selector: 'fury-Instructor-create-update',
  templateUrl: './Instructor-create-update.component.html',
  styleUrls: ['./Instructor-create-update.component.scss']
})
export class InstructorCreateUpdateComponent implements OnInit {

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<InstructorCreateUpdateComponent>,
              private fb: FormBuilder, private catalog: CatalogsService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as InstructorForm;
    }

    this.form = this.fb.group({
      NPK_Instructor: [this.defaults.NPK_Instructor || ''],
      Nombre: [this.defaults.Nombre || ''],
      Apellidos: [this.defaults.Apellidos || ''],
      PasoFavoritoBici: [this.defaults.PasoFavoritoBici || ''],
      PasoFavoritoHiit: [this.defaults.PasoFavoritoHiit || ''],
      ArtistaFavorito: [this.defaults.ArtistaFavorito || ''],
      AnimalFavorito: [this.defaults.AnimalFavorito || ''],
      PeliculaFavorito: [this.defaults.PeliculaFavorito || ''],
      Frase: [this.defaults.Frase || ''],
      DescripcionSuClase: [this.defaults.DescripcionSuClase || ''],
      Activo: [this.defaults.Activo || 0],
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createInstructor();
    } else if (this.mode === 'update') {
      this.updateInstructor();
    }
  }

  createInstructor() {
    const instructor = this.form.value;
    instructor.NPK_Instructor = 0;
    this.catalog.letInstructor(instructor).subscribe(instructors =>{this.dialogRef.close(instructor);});
  }

  updateInstructor() {
    const instructor = this.form.value;
    this.catalog.letInstructor(instructor).subscribe(instructors =>{this.dialogRef.close(instructor);});
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
