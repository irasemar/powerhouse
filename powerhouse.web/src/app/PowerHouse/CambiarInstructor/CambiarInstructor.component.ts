import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,AsistenciaView } from '../../services/catalogs.service';
import { Alert } from 'selenium-webdriver';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'fury-CambiarInstructor-create-update',
  templateUrl: './CambiarInstructor.component.html',
  styleUrls: ['./CambiarInstructor.component.scss']
})
export class CambiarInstructorComponent implements OnInit {
  NPK_CalendarioClase: number = 0;
  Instructors = [];
  form: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<CambiarInstructorComponent>,
              private catalog: CatalogsService, private fb: FormBuilder) {
  }

  ngOnInit() {
    console.log(this.defaults);
    this.form = this.fb.group({
      NFK_Instructor: [this.defaults.NFK_Instructor || '']
    });
    
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.NPK_CalendarioClase = this.defaults.NPK_CalendarioClase;
      this.catalog.getInstructors(1).subscribe(instructors =>{this.Instructors = instructors;})
    });
  }

  CambiarInstructor() {
    const cambio = this.form.value;
    console.log(this.NPK_CalendarioClase);
    console.log(cambio.NFK_Instructor);
    if (cambio.NFK_Instructor === 0) {
      alert("El Instructor es Requerido");
    }
    else {
      this.catalog.letCambiarInstructor(this.NPK_CalendarioClase, cambio.NFK_Instructor).subscribe(reservas => {
        this.dialogRef.close();
      });
    }
  }
}
