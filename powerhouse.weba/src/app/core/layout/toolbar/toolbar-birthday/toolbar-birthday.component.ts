import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModule,NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'fury-toolbar-birthday',
  templateUrl: './toolbar-birthday.component.html',
  styleUrls: ['./toolbar-birthday.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class ToolbarbirthdayComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  @ViewChild('input', { read: ElementRef }) input: ElementRef;

  constructor(config: NgbCarouselConfig, private _http: HttpClient) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }

  ngOnInit() {
  }

  open() {
    /* this.isOpen = true;

    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 100); */

  }

  close() {
    //this.isOpen = false;
  }

}
