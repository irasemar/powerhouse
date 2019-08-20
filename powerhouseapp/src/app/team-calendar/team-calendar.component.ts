import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CatalogsService,ClasesDisponibles,ClasesDisponiblesWeeks,Saldo } from "../services/catalogs.service";
import { AuthService } from "../services/auth.services";
import { ActivatedRoute } from '@angular/router';

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
    private route:ActivatedRoute ) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("id");
    this.catalog.getClasesDisponiblesPorInstructor(this.id).subscribe(clases =>{
      this.ClasesWeeks = clases;
    });
  }

}
