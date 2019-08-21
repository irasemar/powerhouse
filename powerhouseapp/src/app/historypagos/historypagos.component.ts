import { Component, OnInit } from '@angular/core';
import { CatalogsService,HistoriaReserva, MisPagos } from "../services/catalogs.service";
import { AuthService } from "../services/auth.services";
import { Router } from '@angular/router';

@Component({
  selector: 'app-historypagos',
  templateUrl: './historypagos.component.html',
})
export class HistoryPagosComponent implements OnInit {
  MisPagos : MisPagos[];
  title: string;
  list: any[];
  active : string;
  public welcome = false;
  constructor( private catalog: CatalogsService, private authservice: AuthService, private router: Router) { }

  ngOnInit() {
    this.welcome = false;
    this.title = 'Mi historial de Pagos';
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
      this.catalog.getMiHistoriaPagos(this.authservice.getAccount().NPK_Usuario).subscribe(pagos =>{
        this.MisPagos = pagos;
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
