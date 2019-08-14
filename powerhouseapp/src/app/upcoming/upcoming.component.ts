import { Component, OnInit } from '@angular/core';
import { CatalogsService,HistoriaReserva } from "../services/catalogs.service";
import { AuthService } from "../services/auth.services";
import { Router } from '@angular/router';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
})
export class UpcomingComponent implements OnInit {
  Reservas : HistoriaReserva[];
  title: string;
  active : number;
  list: { "title": string; "url": string; }[];
  public welcome = false;
  constructor( private catalog: CatalogsService, private authservice: AuthService, private router: Router) { }

  ngOnInit() {
    this.welcome = false;
    this.title = "Mis próximas clases";
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
      /* {
        "title": "Power awards",
        "url": "/awards"
      } */
    ]
    setTimeout(() => { 
      this.catalog.getMisReservas(this.authservice.getAccount().NPK_Usuario).subscribe(reservas =>{
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
