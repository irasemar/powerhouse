import { Component, OnInit } from '@angular/core';
import { CatalogsService,GeneroForm } from "../services/catalogs.service";
import {MatSelectModule} from '@angular/material/select';
import { AuthService,UsuarioForm } from "../services/auth.services";
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  form = this.fb.group({
    NPK_Usuario : 0,
    Nombre : "",
    Apellidos : "",
    Usuario : "",
    Contrasena : "",
    Telefono : "",
    FechaNacimiento : "",
    Genero : "",
    ContactoEmergencia : "",
    TelefonoContacto : "",
    BikeSetupAlturaAsiento : "",
    BikeSetupDistanciaAsiento : "",
    BikeSetupDistanciaManubrio : "",
    BikeSetupAlturaManubrio : "",
    TallaZapato : "",
    QuieroOfertas : 0,
    ContrasenaConfirma : "",
  });
  list: Array<Object>;
  title: string;
  active : number;
  Generos = [];
  AlturaAsientos = [];
  DistanciaAsientos = [];
  AlturaManubrios = [];
  DistanciaManubrios = [];
  TallaZapatos = [];
  Usuario = "";
  constructor(private fb: FormBuilder,private catalog: CatalogsService,private authservice: AuthService,private router: Router,) { }

  ngOnInit() {
    this.title = "Mi Perfil";
    this.Usuario = "email";
    window.scroll(0,0);
    this.title = "Mi Perfil";
    this.list = [
      {
        "title": "Mi Perfil",
        "url": "/perfil"
      },
      {
        "title": "Mis próximas clases",
        "url": "/proximas-clases"
      },
      {
        "title": "Mis historial",
        "url": "/historial"
      },
      {
        "title": "Power awards",
        "url": "/awards"
      }
    ]
  }
  ngAfterViewInit() {
		setTimeout(() => {
      this.catalog.getGeneros(1).subscribe(generos =>{this.Generos = generos;});
      this.catalog.getAlturaAsientos(1).subscribe(altasiento =>{this.AlturaAsientos = altasiento;});
      this.catalog.getDistanciaAsientos(1).subscribe(distasiento =>{this.DistanciaAsientos = distasiento;});
      this.catalog.getAlturaManubrios(1).subscribe(altmanubrio =>{this.AlturaManubrios = altmanubrio;});
      this.catalog.getDistanciaManubrios(1).subscribe(distmanubrio =>{this.DistanciaManubrios = distmanubrio;});
      this.catalog.getTallaZapatos(1).subscribe(tallazapato =>{this.TallaZapatos = tallazapato;});
      this.authservice.getUser(this.Usuario, this.Usuario).subscribe(user => {
        this.form = this.fb.group({
          NPK_Usuario : [user.NPK_Usuario || ''],
          Nombre : [user.Nombre || ''],
          Apellidos : [user.Apellidos || ''],
          Usuario : [user.Usuario || ''],
          Contrasena : [user.Contrasena || ''],
          Telefono : [user.Telefono || ''],
          FechaNacimiento : [user.FechaNacimiento || ''],
          Genero : [user.Genero || ''],
          ContactoEmergencia : [user.ContactoEmergencia || ''],
          TelefonoContacto : [user.TelefonoContacto || ''],
          BikeSetupAlturaAsiento : [user.BikeSetupAlturaAsiento || ''],
          BikeSetupDistanciaAsiento : [user.BikeSetupDistanciaAsiento || ''],
          BikeSetupDistanciaManubrio : [user.BikeSetupDistanciaManubrio || ''],
          BikeSetupAlturaManubrio : [user.BikeSetupAlturaManubrio || ''],
          TallaZapato : [user.TallaZapato || ''],
          QuieroOfertas : [user.QuieroOfertas || false],
          ContrasenaConfirma : [user.Contrasena || ''],
        });
      });
    });
  }
  save() {
    var usuario = this.form.value;
    if (this.form.value.QuieroOfertas){
      usuario.QuieroOfertas = 1;
    } else {
      usuario.QuieroOfertas = 0;
    }
    this.authservice.UpdateProfile(usuario).subscribe(resp => {
      this.router.navigateByUrl('perfil');
    });
  }
}
