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
  formcontrasena: FormGroup;
  validLogin : boolean = false;
  errorDesc : string;
  recuperarcontrasena: boolean = false;
  validrecuperarpass: boolean = false;
  constructor(public activeModal: NgbActiveModal, private auth: AuthService, private fb: FormBuilder, private router: Router, ) { }

  ngOnInit() {
    this.validLogin = true;
    this.form = this.fb.group({
      username: [''],
      password: ['']
    });
    this.formcontrasena = this.fb.group({
      email: [''],
    });
  }
  login() {
    let loginform = this.form.value;
    this.auth.login(loginform.username, loginform.password).subscribe((account) => {
      this.auth.setAccount(account);
      this.activeModal.close();
    }, error => {
      if (error.status === 409) {
        this.validLogin = false;
        this.errorDesc = 'Usuario y/o password invalidos';
      }
    });
  }
  fncrecuperarcontrasena(){
    this.recuperarcontrasena = true;
  }
  enviarcontrasena(){
    let form = this.formcontrasena.value;
    this.auth.recuperapass(form.email).subscribe((account) => {
      if (account.Error === 0) {
        this.recuperarcontrasena = false;
        this.validrecuperarpass = true;
      }
      else {
        this.recuperarcontrasena = true;
        this.validrecuperarpass = true;
      }
      this.errorDesc = account.DescError;
    }, error => {
      if (error.status === 409) {
        this.validLogin = false;
        this.errorDesc = 'Usuario invalido';
        this.activeModal.close();
      }
    });
    this.recuperarcontrasena = false;
  }
  salir(){
    this.activeModal.close();
  }
}
