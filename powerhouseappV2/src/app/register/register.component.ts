import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AuthService,RegisterForm } from "../services/auth.services";
import { Router } from '@angular/router'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  form = this.fb.group({
    Nombre : "",
    Apellidos : "",
    Usuario : "",
    Contrasena : "",
    ConfirmaContrasena : "",
    ContactoEmergencia : "",
    TelefonoContacto : "",
    QuieroOfertas : 0
  });
  nuevoregistro = {} as RegisterForm;
  constructor(private fb: FormBuilder,private authservice: AuthService,private router: Router,) { }

  ngOnInit() {
  }
  save() {    
    /* this.router.navigateByUrl('perfil');
    return; */
    console.log(this.form.value);
    if (this.form.value.Contrasena != this.form.value.ConfirmaContrasena){
        alert("La Contraseña debe de ser Igual");
        return;
    }
    this.nuevoregistro.NPK_Usuario = 0;
    this.nuevoregistro.Nombre = this.form.value.Nombre;
    this.nuevoregistro.Apellidos = this.form.value.Apellidos;
    this.nuevoregistro.Usuario = this.form.value.Usuario;
    this.nuevoregistro.Contrasena = this.form.value.Contrasena;
    this.nuevoregistro.ContactoEmergencia = this.form.value.ContactoEmergencia;
    this.nuevoregistro.TelefonoContacto = this.form.value.TelefonoContacto;
    if (this.form.value.QuieroOfertas){
      this.nuevoregistro.QuieroOfertas = 1;
    } else {
      this.nuevoregistro.QuieroOfertas = 0;
    }

    this.authservice.getExistsUser(this.form.value.Usuario, this.form.value.Usuario).subscribe(valido => {
      if (valido.NPK_Respuesta > 0){
        alert("La cuenta ya existe");
        return;
      }
      else {
        this.authservice.letRegistro(this.nuevoregistro).subscribe(resp => {
          this.router.navigate(['/home/']);
        });
      }
    });
  }
}
