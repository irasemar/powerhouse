import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,InstructorMusicaForm } from "../../../services/catalogs.service";
import { UploadService } from '../../../services/upload.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'fury-InstructorMusica-create-update',
  templateUrl: './InstructorMusica-create-update.component.html',
  styleUrls: ['./InstructorMusica-create-update.component.scss']
})
export class InstructorMusicaCreateUpdateComponent implements OnInit {
  @ViewChild('fileImage') fileImage;
  public filesImage: Set<File> = new Set();
  public imagePath;

  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  Usuarios = [];
  nfk_instructor = "";
  NPK_InstructorMusica = 0;

  progress;
  imgURL: any;
  canBeClosed = true;
  primaryButtonText = 'Upload';
  showCancelButton = true;
  uploading = false;
  uploadSuccessful = false;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<InstructorMusicaCreateUpdateComponent>,
              private fb: FormBuilder, private catalog: CatalogsService, private uploadService: UploadService) {
  }

  ngOnInit() {
    this.NPK_InstructorMusica =  this.defaults.NPK_InstructorMusica;
    this.nfk_instructor = this.defaults.NFK_Instructor;
    console.log(this.defaults);

    if (this.defaults && this.defaults.NPK_InstructorMusica > 0) {
      this.mode = 'update';
    } else {
      this.defaults = {} as InstructorMusicaForm;
    }

    this.form = this.fb.group({
      NPK_InstructorMusica: [this.defaults.NPK_InstructorMusica || ''],
      NFK_Instructor: [this.defaults.NFK_Instructor || ''],
      Musica: [this.defaults.Musica || ''],
      imagen: [this.defaults.imagen || ''],
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createInstructorMusica();
    } else if (this.mode === 'update') {
      this.updateInstructorMusica();
    }
  }

  createInstructorMusica() {
    const InstructorMusica = this.form.value;
    InstructorMusica.NFK_Instructor = this.nfk_instructor;
    InstructorMusica.NPK_InstructorMusica = 0;
    this.catalog.letInstructorMusica(InstructorMusica).subscribe(InstructorMusicas =>{
      console.log(InstructorMusicas);
      if (this.filesImage.size > 0){
        this.uploadImage(InstructorMusicas);
      }
      else {
      this.dialogRef.close(InstructorMusicas);
      }
    });
  }

  updateInstructorMusica() {
    const InstructorMusica = this.form.value;
    this.catalog.letInstructorMusica(InstructorMusica).subscribe(InstructorMusicas =>{
      if (this.filesImage.size > 0){
        this.uploadImage(InstructorMusicas);
      }
      else {
      this.dialogRef.close(InstructorMusicas);
      }
    });
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  createPolicyAreaImage(instructor) {    
    if (this.filesImage.size > 0)
        this.uploadImage(instructor);
    else  this.uploadSuccessful = true;
    if (this.uploadSuccessful) {
      this.dialogRef.close(instructor);
    }
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
    this.progress = this.uploadService.uploadFotografiaInstructorMusica(this.filesImage, datos.NPK_InstructorMusica);
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
