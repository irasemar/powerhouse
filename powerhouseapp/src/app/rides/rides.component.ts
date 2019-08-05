import { Component, OnInit, Input } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
})
export class RidesComponent implements OnInit {

  @Input() items;

  showNavigationArrows = true;
  showNavigationIndicators = true;
  
  
  constructor(config: NgbCarouselConfig) { 
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
    
  }

}
