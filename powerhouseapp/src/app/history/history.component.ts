import { Component, OnInit } from '@angular/core';
import { CatalogsService,HistoriaReserva } from "../services/catalogs.service";
import { AuthService } from "../services/auth.services";
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
})
export class HistoryComponent implements OnInit {
  Reservas : HistoriaReserva[];
  title: string;
  list: any[];
  active : string;
  public welcome = false;
  constructor( private catalog: CatalogsService, private authservice: AuthService, private router: Router) { }

  ngOnInit() {
    this.welcome = false;
    this.title = 'Mi historial';
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
        "title": "Mi historial",
        "url": "/historial"
      },
      /* {
        "title": "Power awards",
        "url": "/awards"
      } */
    ]
    setTimeout(() => { 
      this.catalog.getMiHistoria(this.authservice.getAccount().NPK_Usuario).subscribe(reservas =>{
        this.Reservas = reservas;
        this.welcome = true;     
      });
    }); 
  
  }
  ReservarHiit() {
    this.router.navigate(['/indoor-calendar/']);
  }
  ReservarTrain() {
    this.router.navigate(['/hiit-calendar/']);
  }
}
