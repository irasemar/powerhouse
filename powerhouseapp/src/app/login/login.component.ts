import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService,UsuarioForm } from "../services/auth.services";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  validLogin : number;
  errorDesc : string;
  constructor(public activeModal: NgbActiveModal, private auth: AuthService, private fb: FormBuilder, private router: Router, ) { }

  ngOnInit() {
    this.validLogin = 0;
    this.form = this.fb.group({
      username: [''],
      password: ['']
    });
  }
  login() {
    let loginform = this.form.value;
    this.auth.login(loginform.username, loginform.password).subscribe((account) => {
      this.auth.setAccount(account);
      this.activeModal.close();
    }, error => {
      if (error.status === 409) {
        this.validLogin = 1;
        this.errorDesc = 'Usuario y/o password invalidos';
        this.activeModal.close();
      }
    });
  }
}
