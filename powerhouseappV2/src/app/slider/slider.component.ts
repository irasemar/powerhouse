import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthService, Usuario,} from '../services/auth.services';
import { CatalogsService,VentaCarro,Saldo } from "../services/catalogs.service";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
})
export class SliderComponent implements OnInit {
  Saldo : Saldo[];
  TieneSaldo = false;
  EstaLogeado = false;
  saldo = 0;
  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [
    {
      src: '../assets/images/slider_01.jpg',
      title: 'IT’S ABOUT YOU,',
      title2: 'IT’S ABOUT THE POWER!',
      description: 'Sit amet dolo lorem ipsum '
    },
    {
      src: '../assets/images/slider_02.jpg',
      title: 'IT’S ABOUT YOU,',
      title2: 'IT’S ABOUT THE POWER!',
      description: 'Sit amet dolo lorem ipsum '
    },
    {
      src: '../assets/images/slider_03.jpg',
      title: 'IT’S ABOUT YOU,',
      title2: 'IT’S ABOUT THE POWER!',
      description: 'Sit amet dolo lorem ipsum '
    }
  ]
  
  constructor(config: NgbCarouselConfig, private router: Router, public auth: AuthService, private catalog: CatalogsService ) { 
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
    console.log(String(this.auth.getAccount()) != 'null');
    if (String(this.auth.getAccount()) != 'null'){
      this.EstaLogeado = true;
    }
    if (this.EstaLogeado) {
      this.catalog.getMiSaldo(this.auth.getAccount().NPK_Usuario).subscribe(saldo =>{
        this.Saldo = saldo;
        if (this.Saldo[0].Saldo > 0){
          this.saldo = this.Saldo[0].Saldo;
          this.TieneSaldo = true;
        }
      });
    }
  }
  ReservarHiit() {
    this.router.navigate(['/indoor-calendar/']);
  }
  ReservarTrain() {
    this.router.navigate(['/hiit-calendar/']);
  }
  ComprarClases(){    
    this.router.navigate(['/comprar-clase/']);
  }
}
