import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CatalogsService,ClasesDisponibles,ClasesDisponiblesWeeks,Saldo } from "../services/catalogs.service";
import { AuthService } from "../services/auth.services";
import { Router, NavigationEnd } from '@angular/router';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit {
  ClasesWeeks : ClasesDisponiblesWeeks[];
  Saldo : Saldo[];
  showNavigationArrows: boolean = true;
  showNavigationIndicators: boolean = true;
  navigationSubscription;
  constructor(config: NgbCarouselConfig, private catalog: CatalogsService, private authservice: AuthService, private router: Router,
     ) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialize();
      }
    });
  }

  ngOnInit() {
    this.initialize();
  }
  initialize() {
    //Arreglo semanas
    this.catalog.getClasesDisponibles(1).subscribe(clases =>{
      this.ClasesWeeks = clases;
      console.log(this.ClasesWeeks);
    });
  }
  Reservar(NFK_Semana, NFK_Clase, Dia, NPK_CalendarioClase) {
    /* this.catalog.getMiSaldo(this.authservice.getAccount().NPK_Usuario).subscribe(saldo =>{
      this.Saldo = saldo;
      if (this.Saldo[0].Saldo > 0 || this.Saldo[0].ReservadoHoy > 0) {
        this.router.navigate(['/clase/' + NFK_Semana + '/' + NFK_Clase + '/' + Dia + '/' + NPK_CalendarioClase]);
      }
    }); */
    /* alert(NPK_CalendarioClase);
    return; */
    this.router.navigate(['/clase/' + NFK_Semana + '/' + NFK_Clase + '/' + Dia + '/' + NPK_CalendarioClase]);
    
  }
  alert(param){
    alert(param);
  }
}
