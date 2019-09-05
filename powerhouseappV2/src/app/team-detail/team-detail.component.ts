import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogsService } from "../services/catalogs.service";


@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html'
})
export class TeamDetailComponent implements OnInit {
  id : string = '0';
  instructors= [];
  instructor_image : string = '';
  instructor_name : string = '';
  instructor_NPK_Instructor : number = 0;
  instructor_Nombre : string = '';
  instructor_Apellidos : string = '';
  instructor_PasoFavoritoBici : string = '';
  instructor_PasoFavoritoHiit : string = '';
  instructor_ArtistaFavorito : string = '';
  instructor_AnimalFavorito : string = '';
  instructor_PeliculaFavorito : string = '';
  instructor_Frase : string = '';
  instructor_DescripcionSuClase : string = '';
  instructor_facebook : string = '';
  instructor_instagram : string = '';
  instructor_youtube : string = '';
  TipoInstructor: string = '';

  constructor( private catalog: CatalogsService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("id");
  }
  ngAfterViewInit() {
		setTimeout(() => {
      this.catalog.getDetalleInstructorPublico(this.id).subscribe(instructores =>{
          this.instructors = instructores;
          this.catalog.getDetalleInstructorRedesSocialesPublico(this.id).subscribe(instructoresredsocial =>{
            console.log(this.instructors);
            this.instructor_image = instructores[0].image2;
            this.instructor_name = instructores[0].name;
            this.TipoInstructor = instructores[0].TipoInstructor
            this.instructor_NPK_Instructor = instructores[0].NPK_Instructor;
            this.instructor_Nombre = instructores[0].Nombre;
            this.instructor_Apellidos = instructores[0].Apellidos;
            this.instructor_PasoFavoritoBici = instructores[0].PasoFavoritoBici;
            this.instructor_PasoFavoritoHiit = instructores[0].PasoFavoritoHiit;
            this.instructor_ArtistaFavorito = instructores[0].ArtistaFavorito;
            this.instructor_AnimalFavorito = instructores[0].AnimalFavorito;
            this.instructor_PeliculaFavorito = instructores[0].PeliculaFavorito;
            this.instructor_Frase = instructores[0].Frase;
            this.instructor_DescripcionSuClase = instructores[0].DescripcionSuClase;
            this.instructor_facebook = "";
            this.instructor_instagram = "";
            this.instructor_youtube = "";
            instructoresredsocial.forEach(redsocial => {
              if (redsocial.RedSocialDesc === "facebook") {
                  this.instructor_facebook = redsocial.RedSocial;
              }
              if (redsocial.RedSocialDesc === "youtube") {
                this.instructor_youtube = redsocial.RedSocial;
              }
              if (redsocial.RedSocialDesc === "instagram") {
                this.instructor_instagram = redsocial.RedSocial;
              }
            });
            
        });
      });
    });
  }
}
