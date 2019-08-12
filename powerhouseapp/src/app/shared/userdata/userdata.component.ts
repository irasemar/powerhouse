import { Component, OnInit } from '@angular/core';
import { AuthService, Usuario,} from '../../services/auth.services';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
})
export class UserdataComponent implements OnInit {

  username: string;
  lessons:number;
  year: number;
  session = {} as Usuario;
  

  constructor( public auth: AuthService,) { }

  ngOnInit() {
    this.session = this.auth.getAccount();
    this.username = this.session.Nombre.toString().toUpperCase() + ' ' + this.session.Apellidos.toString().toUpperCase();
    this.lessons = this.session.CantidadClasesTomadas;
    this.year = this.session.AnioInicio;
  }

}
