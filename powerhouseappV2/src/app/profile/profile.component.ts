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
    Correo: "",
    Mes: "",
    Dia: "",
    Anio: 0
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
  FechaNacimiento = "";
  Dia : string = "01";
  constructor(private fb: FormBuilder,private catalog: CatalogsService,private authservice: AuthService,private router: Router) { }

  ngOnInit() {
    const acc = this.authservice.getAccount();
    this.title = "Mi Perfil";
    this.Usuario = acc.Usuario;
    window.scroll(0,0);
    this.title = "Mi Perfil";
    this.list = [
      {
        "title": "Mi perfil",
        "url": "/perfil"
      },
      {
        "title": "Mis próximas clases",
        "url": "/proximas-clases"
      },
      {
        "title": "Mi historial",
        "url": "/historial"
      },
      {
        "title": "Mis pagos",
        "url": "/historialPagos"
      },
      /* {
        "title": "Power awards",
        "url": "/awards"
      } */
    ]
    this.form.value.Dia = "01";
    this.form.value.Mes = "01";
    this.form.value.Anio = "2019";
    var x: Date = new Date();
    var fecha = x || 'MM/dd/yyyy';
    this.form.value.Dia = String(fecha).split('/')[1];
    this.form.value.Mes = String(fecha).split('/')[0];
    this.form.value.Anio = String(fecha).split('/')[2];
  }
  ngAfterViewInit() {
		setTimeout(() => {
      this.catalog.getGenerosPWH(1).subscribe(generos =>{this.Generos = generos;});
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
          FechaNacimiento : [user.FechaNacimiento || 'MM/dd/yyyy'],
          Genero : [user.Genero || ''],
          ContactoEmergencia : [user.ContactoEmergencia || ''],          
          ContrasenaConfirma : [user.Contrasena || ''],
          Correo : [user.Correo || ''],
          TelefonoContacto : [user.TelefonoContacto || ''],
          Mes: [Number(String(user.FechaNacimiento).split('-')[1])],
          Dia: [Number(String(user.FechaNacimiento).split('-')[2]) || ''],
          Anio: [Number(String(user.FechaNacimiento).split('-')[0])]
        });
      });
    });
  }
  save() {
    var usuario = this.form.value;
    usuario.FechaNacimiento = String(usuario.Anio) + '-' + String(usuario.Mes) + '-' + String(usuario.Dia);
    usuario.QuieroOfertas = 0;
    this.authservice.UpdateProfile(usuario).subscribe(resp => {
      this.router.navigateByUrl('home');
    });
  }
}
