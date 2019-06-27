import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
})
export class SliderComponent implements OnInit {

  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [
    {src:'./assets/images/slider_01.jpg',
    title: 'It\'s about you, it\'s about the power. ',
    description: 'Sit amet dolo lorem ipsum '
  },
  {src:'./assets/images/slider_02.jpg',
  title: 'Lorem ipsum dolo sit two',
  description: 'Sit amet dolo lorem ipsum '
},
{src:'./assets/images/slider_03.jpg',
title: 'Lorem ipsum dolo sit three',
description: 'Sit amet dolo lorem ipsum '
}
]
  
  constructor(config: NgbCarouselConfig) { 
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
  }

}
