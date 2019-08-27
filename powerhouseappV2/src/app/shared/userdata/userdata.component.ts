import { Component, OnInit } from '@angular/core';
import { AuthService, Usuario, UsuarioData} from '../../services/auth.services';
import { CatalogsService,Saldo } from "../../services/catalogs.service";

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
})
export class UserdataComponent implements OnInit {

  username: string;
  lessons:number;
  year: number;
  UserData = {} as UsuarioData;
  Saldo : Saldo[];
  

  constructor( public auth: AuthService,private catalog: CatalogsService,) { }

  ngOnInit() {
    this.auth.getUserDatos().subscribe(UserData =>{
      this.UserData = UserData;
      this.username = this.UserData.NombreCompleto.toString().toUpperCase();
      this.year = this.UserData.AnioInicio;
      this.catalog.getMiSaldo(this.auth.getAccount().NPK_Usuario).subscribe(saldo =>{
        this.Saldo = saldo;
        this.lessons = this.Saldo[0].TotalAsistencia;
      });
    });
    
  }

}
