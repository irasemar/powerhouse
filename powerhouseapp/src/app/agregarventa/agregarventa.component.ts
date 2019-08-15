import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService,UsuarioForm } from "../services/auth.services";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregarventa',
  templateUrl: './agregarventa.component.html',
})
export class agregarventaComponent implements OnInit {  
  errorDesc : string;
  Usuario : string;
  constructor(public activeModal: NgbActiveModal, private auth: AuthService, private fb: FormBuilder, private router: Router, ) { }

  ngOnInit() {    
    this.Usuario = this.auth.getAccount().Nombre + ' ' + this.auth.getAccount().Apellidos;
  }
  aceptar() {
    this.activeModal.close("Aceptar");
  }
  rechazar() {
    console.log("rechazar");
    this.activeModal.close("rechazar");
  }
}
