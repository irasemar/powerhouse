import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,RedSocialForm } from '../../../services/catalogs.service';
import { UploadService } from '../../../services/upload.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'fury-RedSocial-create-update',
  templateUrl: './RedSocial-create-update.component.html',
  styleUrls: ['./RedSocial-create-update.component.scss']
})
export class RedSocialCreateUpdateComponent implements OnInit {

  @ViewChild('fileImage') fileImage;
  public filesImage: Set<File> = new Set();
  public imagePath;

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
              private dialogRef: MatDialogRef<RedSocialCreateUpdateComponent>,
              private fb: FormBuilder, private catalog: CatalogsService, private uploadService: UploadService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as RedSocialForm;
    }

    this.form = this.fb.group({
      NPK_RedSocial: [this.defaults.NPK_RedSocial || ''],
      RedSocial: [this.defaults.RedSocial || ''],
      RedSocialImagen: [this.defaults.RedSocialImagen || ''],
      Activo: [this.defaults.Activo || 0],
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createRedSocial();
    } else if (this.mode === 'update') {
      this.updateRedSocial();
    }
  }

  createRedSocial() {
    const redsocial = this.form.value;
    redsocial.NPK_RedSocial = 0;
    this.catalog.letRedSocial(redsocial).subscribe(redsocials =>{
      if (this.filesImage.size > 0){
        this.uploadImage(redsocial);
      }
      else {
        this.dialogRef.close(redsocial);
      }
    });
  }

  updateRedSocial() {
    const redsocial = this.form.value;
    this.catalog.letRedSocial(redsocial).subscribe(redsocials =>{
      if (this.filesImage.size > 0){
        this.uploadImage(redsocial);
      }
      else {
      this.dialogRef.close(redsocial);
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
    this.progress = this.uploadService.uploadFotografiaRedSocial(this.filesImage, datos.NPK_RedSocial);
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
