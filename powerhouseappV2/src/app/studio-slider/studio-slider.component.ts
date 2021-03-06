import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-studio-slider',
  templateUrl: './studio-slider.component.html',
})
export class StudioSliderComponent implements OnInit {

  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [
    {src:'../assets/images/studio_01.jpg'
  },
  {src:'../assets/images/studio_02.jpg'
},
{src:'../assets/images/studio_03.jpg',
}
]
  
  constructor(config: NgbCarouselConfig) { 
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
  }

}
