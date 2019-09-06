import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,InstructorRedSocialView } from "../../../services/catalogs.service";
import { UploadService } from '../../../services/upload.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'fury-InstructorRedSocial-create-update',
  templateUrl: './InstructorRedSocial-create-update.component.html',
  styleUrls: ['./InstructorRedSocial-create-update.component.scss']
})
export class InstructorRedSocialCreateUpdateComponent implements OnInit {
  
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  Usuarios = [];
  nfk_instructor = "";
  NPK_InstructorRedSocial = 0;
  
  RedSocials = [];
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<InstructorRedSocialCreateUpdateComponent>,
              private fb: FormBuilder, private catalog: CatalogsService, private uploadService: UploadService) {
  }

  ngOnInit() {
    this.NPK_InstructorRedSocial =  this.defaults.NPK_InstructorRedSocial;
    this.nfk_instructor = this.defaults.NFK_Instructor;
    console.log(this.defaults);

    if (this.defaults && this.defaults.NPK_InstructorRedSocial > 0) {
      this.mode = 'update';
    } else {
      this.defaults = {} as InstructorRedSocialView;
    }

    this.form = this.fb.group({
      NPK_InstructorRedSocial: [this.defaults.NPK_InstructorRedSocial || ''],
      NFK_Instructor: [this.defaults.NFK_Instructor || ''],
      NFK_RedSocial: [this.defaults.NFK_RedSocial || ''],
      RedSocial: [this.defaults.RedSocial || ''],
      Activo: [this.defaults.Activo || 0],
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
          this.catalog.getRedSocials(1).subscribe(redsocials =>{this.RedSocials = redsocials;})
    });
  }
  save() {
    if (this.mode === 'create') {
      this.createInstructorRedSocial();
    } else if (this.mode === 'update') {
      this.updateInstructorRedSocial();
    }
  }

  createInstructorRedSocial() {
    const InstructorRedSocial = this.form.value;
    InstructorRedSocial.NFK_Instructor = this.nfk_instructor;
    InstructorRedSocial.NPK_InstructorRedSocial = 0;
    this.catalog.letInstructorRedSocial(InstructorRedSocial).subscribe(InstructorRedSocials =>{
      this.dialogRef.close(InstructorRedSocials);
    });
  }

  updateInstructorRedSocial() {
    const InstructorRedSocial = this.form.value;
    this.catalog.letInstructorRedSocial(InstructorRedSocial).subscribe(InstructorRedSocials =>{
      this.dialogRef.close(InstructorRedSocials);
    });
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
  
}
