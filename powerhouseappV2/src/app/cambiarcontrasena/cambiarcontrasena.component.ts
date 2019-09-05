import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService,UsuarioForm } from "../services/auth.services";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiarcontrasena',
  templateUrl: './cambiarcontrasena.component.html',
})
export class CambiarcontrasenaComponent implements OnInit {
  form: FormGroup;
  formcontrasena: FormGroup;
  validLogin : boolean = false;
  errorDesc : string;
  recuperarcontrasena: boolean = false;
  validchangepass : boolean = false;
  constructor(public activeModal: NgbActiveModal, private auth: AuthService, private fb: FormBuilder, private router: Router, ) { }

  ngOnInit() {
    this.validLogin = false;
    this.form = this.fb.group({
      passwordantes: [''],
      password: [''],
      confirmarpassword: [''],
    });
  }
  enviarcontrasena() {
    let loginform = this.form.value;

    if (loginform.password != loginform.confirmarpassword) {
      this.validLogin = true;
      this.errorDesc = 'La Contraseña nueva y la confirmacion no son iguales';
      return;
    }
    else {
      this.auth.changepass(this.auth.getAccount().Usuario, loginform.passwordantes, loginform.password).subscribe((account) => {
        console.log(account);
        if (account.Error === 0) {
          this.validchangepass = true;
        }
        else {
          this.validLogin = true;
        }
        this.errorDesc = account.DescError;
      }, error => {
        if (error.status === 409) {
          this.validLogin = false;
          this.errorDesc = 'Se presento un error, consulte al administrador';
          this.activeModal.close();
        }
      });
    }
  }
  salir(){
    this.activeModal.close();
  }
}
