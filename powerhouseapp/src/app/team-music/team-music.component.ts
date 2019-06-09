import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-music',
  templateUrl: './team-music.component.html'
})
export class TeamMusicComponent implements OnInit {

  images = [
    { slide: ['../../assets/images/album-1.png', '../../assets/images/album-2.png', '../../assets/images/album-3.png', '../../assets/images/album-4.png', '../../assets/images/album-5.png']},
    { slide: ['../../assets/images/album-1.png', '../../assets/images/album-2.png', '../../assets/images/album-4.png', '../../assets/images/album-5.png', '../../assets/images/album-3.png']},
  ];

  constructor() { }

  ngOnInit() {
  }

}
