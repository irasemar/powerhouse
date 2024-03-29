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
      title: 'It\'s about you, it\'s about the power. ',
      description: 'Sit amet dolo lorem ipsum '
    },
    {
      src: '../assets/images/slider_02.jpg',
      title: 'Lorem ipsum dolo sit two',
      description: 'Sit amet dolo lorem ipsum '
    },
    {
      src: '../assets/images/slider_03.jpg',
      title: 'Lorem ipsum dolo sit three',
      description: 'Sit amet dolo lorem ipsum '
    }
  ]
  
  constructor(config: NgbCarouselConfig, private router: Router, public auth: AuthService, private catalog: CatalogsService ) { 
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
    if (this.auth.getAccount().NPK_Usuario > 0){
      this.EstaLogeado = true;
    }
    this.catalog.getMiSaldo(this.auth.getAccount().NPK_Usuario).subscribe(saldo =>{
      this.Saldo = saldo;
      if (this.Saldo[0].Saldo > 0){
        this.saldo = this.Saldo[0].Saldo;
        this.TieneSaldo = true;
      }
    });
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
