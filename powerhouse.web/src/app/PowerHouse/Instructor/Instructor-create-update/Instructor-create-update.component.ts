import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,InstructorForm } from '../../../services/catalogs.service';
import { UploadService } from '../../../services/upload.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'fury-Instructor-create-update',
  templateUrl: './Instructor-create-update.component.html',
  styleUrls: ['./Instructor-create-update.component.scss']
})
export class InstructorCreateUpdateComponent implements OnInit {
  @ViewChild('fileImage') fileImage;
  public filesImage: Set<File> = new Set();
  public imagePath;

  @ViewChild('fileImage2') fileImage2;
  public filesImage2: Set<File> = new Set();
  public imagePath2;

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  progress;
  imgURL: any;
  canBeClosed = true;
  primaryButtonText = 'Upload';
  showCancelButton = true;
  uploading = false;
  uploadSuccessful = false;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<InstructorCreateUpdateComponent>,
              private fb: FormBuilder, private catalog: CatalogsService, private uploadService: UploadService,) {
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
      TipoInstructor: [this.defaults.TipoInstructor || ''],
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
    this.catalog.letInstructor(instructor).subscribe(instructors =>{
      if (this.filesImage.size > 0){
        this.uploadImage(instructors);
      }
      else {
      this.dialogRef.close(instructors);
      }
    });
  }

  updateInstructor() {
    const instructor = this.form.value;
    this.catalog.letInstructor(instructor).subscribe(instructors =>{
      if (this.filesImage.size > 0){
        this.uploadImage(instructors);
      }
      else {
      this.dialogRef.close(instructors);
      }
    });
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  onFilesAddedImage() {
    const files: { [key: string]: File } = this.fileImage.nativeElement.files;
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        this.filesImage.add(files[key]);
      }
    }
  }
  addFilesImage() {
    this.fileImage.nativeElement.click();
    return false;
  }
  uploadImage(datos: any) {
    this.uploading = true;
    this.progress = this.uploadService.uploadFotografiaInstructor(this.filesImage, datos.NPK_Instructor);
    console.log(this.progress);
    for (const key in this.progress) {
      this.progress[key].progress.subscribe(val => console.log(val));
    }

    // convert the progress map into an array
    let allProgressObservables = [];
    for (let key in this.progress) {
      allProgressObservables.push(this.progress[key].progress);
    }

    // Adjust the state variables

    // The OK-button should have the text "Finish" now
    this.primaryButtonText = 'Finish';

    // The dialog should not be closed while uploading
    this.canBeClosed = false;
    this.dialogRef.disableClose = true;

    // Hide the cancel-button
    this.showCancelButton = false;

    // When all progress-observables are completed...
    forkJoin(allProgressObservables).subscribe(end => {
      // ... the dialog can be closed again...
      this.canBeClosed = true;
      this.dialogRef.disableClose = false;

      // ... the upload was successful...

      this.uploadSuccessful = true;
      // ... and the component is no longer uploading
      this.uploading = false;
      if (this.uploadSuccessful) {
        if (this.filesImage2.size > 0){
          this.uploadImage2(datos);
        }
      }
    });
  }

  onFilesAddedImage2() {
    const files: { [key: string]: File } = this.fileImage2.nativeElement.files;
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        this.filesImage2.add(files[key]);
      }
    }
  }
  addFilesImage2() {
    this.fileImage2.nativeElement.click();
    return false;
  }
  uploadImage2(datos: any) {
    this.uploading = true;
    alert("uploadImage2");
    this.progress = this.uploadService.uploadFotografiaInstructor2(this.filesImage2, datos.NPK_Instructor);
    console.log(this.progress);
    for (const key in this.progress) {
      this.progress[key].progress.subscribe(val => console.log(val));
    }

    // convert the progress map into an array
    let allProgressObservables = [];
    for (let key in this.progress) {
      allProgressObservables.push(this.progress[key].progress);
    }

    // Adjust the state variables

    // The OK-button should have the text "Finish" now
    this.primaryButtonText = 'Finish';

    // The dialog should not be closed while uploading
    this.canBeClosed = false;
    this.dialogRef.disableClose = true;

    // Hide the cancel-button
    this.showCancelButton = false;

    // When all progress-observables are completed...
    forkJoin(allProgressObservables).subscribe(end => {
      // ... the dialog can be closed again...
      this.canBeClosed = true;
      this.dialogRef.disableClose = false;

      // ... the upload was successful...

      this.uploadSuccessful = true;
      // ... and the component is no longer uploading
      this.uploading = false;
      if (this.uploadSuccessful) {
        this.dialogRef.close(datos);
      }
    });
  }
}
