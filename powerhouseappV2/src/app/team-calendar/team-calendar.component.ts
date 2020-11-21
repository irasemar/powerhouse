import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CatalogsService,ClasesDisponibles,ClasesDisponiblesWeeks,Saldo } from "../services/catalogs.service";
import { AuthService } from "../services/auth.services";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-calendar',
  templateUrl: './team-calendar.component.html',
})
export class TeamCalendarComponent implements OnInit {
  ClasesWeeks : ClasesDisponiblesWeeks[];
  weeks: any[];
  showNavigationArrows: boolean = true;
  showNavigationIndicators: boolean = true;
  id : string = '0';

  constructor(config: NgbCarouselConfig, private catalog: CatalogsService, private authservice: AuthService,
    private route:ActivatedRoute, private router: Router ) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("id");
    this.catalog.getClasesDisponiblesPorInstructor(this.id).subscribe(clases =>{
      this.ClasesWeeks = clases;
      console.log(clases);
    });
  }
  Reservar(NFK_Semana, NFK_Clase, Dia, NPK_CalendarioClase, Clase) {
    /* this.catalog.getMiSaldo(this.authservice.getAccount().NPK_Usuario).subscribe(saldo =>{
      this.Saldo = saldo;
      if (this.Saldo[0].Saldo > 0 || this.Saldo[0].ReservadoHoy > 0) {
        this.router.navigate(['/clase/' + NFK_Semana + '/' + NFK_Clase + '/' + Dia + '/' + NPK_CalendarioClase]);
      }
    }); */
    /* alert(NPK_CalendarioClase);
    return; */
    if (Clase === "Train") {
      this.router.navigate(['/train/' + NFK_Semana + '/' + NFK_Clase + '/' + Dia + '/' + NPK_CalendarioClase]);
    }
    else {
      this.router.navigate(['/clase/' + NFK_Semana + '/' + NFK_Clase + '/' + Dia + '/' + NPK_CalendarioClase]);
    }
    //this.router.navigate(['/clase/' + NFK_Semana + '/' + NFK_Clase + '/' + Dia + '/' + NPK_CalendarioClase]);
    
  }

}
