import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogsService, InstructorMusicaView } from "../services/catalogs.service";

@Component({
  selector: 'app-team-music',
  templateUrl: './team-music.component.html'
})
export class TeamMusicComponent implements OnInit {
  id : string = '0';
  images = [
    { slide: ['../../assets/images/album-1.png', '../../assets/images/album-2.png', '../../assets/images/album-3.png', '../../assets/images/album-4.png', '../../assets/images/album-5.png']},
    { slide: ['../../assets/images/album-1.png', '../../assets/images/album-2.png', '../../assets/images/album-4.png', '../../assets/images/album-5.png', '../../assets/images/album-3.png']},
  ];  
  slide = [];
  images2 = [];
  instructorMusica : InstructorMusicaView [];
  constructor(private catalog: CatalogsService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("id");
  }
  ngAfterViewInit() {
		setTimeout(() => {
      this.catalog.getInstructorMusicas(this.id).subscribe(instmusica =>{
          this.instructorMusica = instmusica;
          console.log(this.instructorMusica);
          /* var i = 0;
          const max = 3;
          var object = {};
          var objectslide = {};
          this.instructorMusica.forEach(musica =>{
              if ( i < max) {
               this.slide.push(musica.imagen);
                i++;
              } else {
                object["slide"] = objectslide;
                this.images2.push(object);
                console.log(this.slide);
                this.slide.length = 0;
                this.slide.push(musica.imagen);
                i = 1;
              }
          });
          console.log(this.slide);
          object["slide"] = objectslide;
          this.images2.push(object);
          console.log(this.images);
          console.log(this.images2); */
          
      });
    })
  }
}
