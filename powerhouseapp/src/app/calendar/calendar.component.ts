import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CatalogsService,ClasesDisponibles,ClasesDisponiblesWeeks } from "../services/catalogs.service";
import { AuthService } from "../services/auth.services";
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit {
  ClasesWeeks : ClasesDisponiblesWeeks[];
  showNavigationArrows: boolean = true;
  showNavigationIndicators: boolean = true;

  constructor(config: NgbCarouselConfig, private catalog: CatalogsService, private authservice: AuthService, private router: Router ) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
    //Arreglo semanas
    this.catalog.getClasesDisponibles(1).subscribe(clases =>{
      this.ClasesWeeks = clases;
    });
  } 
  Reservar(NFK_Semana, NFK_Clase, Dia, NPK_CalendarioClase) {
    this.router.navigate(['/clase/' + NFK_Semana + '/' + NFK_Clase + '/' + Dia + '/' + NPK_CalendarioClase]);
  }
}
