import { Component, OnInit } from '@angular/core';
import { AuthService, Usuario, UsuarioData} from '../../services/auth.services';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
})
export class UserdataComponent implements OnInit {

  username: string;
  lessons:number;
  year: number;
  UserData = {} as UsuarioData;
  

  constructor( public auth: AuthService,) { }

  ngOnInit() {
    this.auth.getUserDatos().subscribe(UserData =>{
      this.UserData = UserData;
      this.username = this.UserData.NombreCompleto.toString().toUpperCase();
      this.lessons = this.UserData.CantidadClasesTomadas;
      this.year = this.UserData.AnioInicio;
    });
    
  }

}
