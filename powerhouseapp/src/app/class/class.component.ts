import { Component, OnInit } from '@angular/core';
import { CatalogsService,ClaseHeader, ClaseReserva } from "../services/catalogs.service";
import { AuthService } from "../services/auth.services";
import { ActivatedRoute } from '@angular/router';
import { ModalReservaComponent}  from '../modal-reserva/modal-reserva.component'
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
})
export class ClassComponent implements OnInit {

  public bikes : ClaseReserva[];
  public class = {} as ClaseHeader;
  public welcome = false;
  NFK_Clase = 0;
  NFK_Semana = 0;
  Dia = 0;
  NPK_CalendarioClase = 0;
  NPK_Usuario = 0;
  TengoClase = 0;

  constructor(private catalog: CatalogsService, private authservice: AuthService, private route: ActivatedRoute, private modalService: NgbModal,) { }

  ngAfterViewInit() {
		
  }
  ngOnInit() {
    this.NPK_Usuario = this.authservice.getAccount().NPK_Usuario;
    this.welcome = false;
    this.NFK_Clase = parseInt(this.route.snapshot.paramMap.get("NFK_Clase"));
    this.NFK_Semana = parseInt(this.route.snapshot.paramMap.get("NFK_Semana"));
    this.Dia = parseInt(this.route.snapshot.paramMap.get("Dia"));
    this.NPK_CalendarioClase = parseInt(this.route.snapshot.paramMap.get("NPK_CalendarioClase"));
    setTimeout(() => { this.llenaDatos(); });
  }
  llenaDatos() {
    this.catalog.getEstatus_Salon_PorDia(this.NFK_Clase, this.NFK_Semana, this.Dia, this.NPK_CalendarioClase).subscribe(lugares =>{
      this.bikes = lugares;
      console.log(lugares);
      this.catalog.getEstatus_Salon_PorDia_Header(this.NFK_Clase, this.NFK_Semana, this.Dia, this.NPK_CalendarioClase,this.NPK_Usuario).subscribe(clases =>{
        console.log(clases);
        this.class.Fecha = clases[0].Fecha;
        this.class.Clase = clases[0].Clase;
        this.class.Instructor = clases[0].Instructor;
        this.class.NPK_CalendarioClase = clases[0].NPK_CalendarioClase;
        this.class.NFK_Instructor = clases[0].NFK_Instructor;
        this.class.Fotografia = clases[0].Fotografia;
        this.TengoClase = clases[0].TengoClase;
        this.welcome = true;
      });
    });
  }
  public select(bike:ClaseReserva){
    console.log(bike);
    const modalRef = this.modalService.open(ModalReservaComponent);
    modalRef.componentInstance.NPK_Salon = bike.NPK_Salon;
    modalRef.componentInstance.NPK_SalonLugar = bike.NPK_SalonLugar;
    modalRef.componentInstance.LugarSalon = bike.LugarSalon;
    modalRef.componentInstance.NPK_ReservaClase = bike.NPK_ReservaClase;
    modalRef.componentInstance.NPK_CalendarioClase = this.class.NPK_CalendarioClase;
    modalRef.componentInstance.NFK_Usuario = bike.NFK_Usuario;
    modalRef.componentInstance.Usuario = this.authservice.getAccount().Nombre + ' ' + this.authservice.getAccount().Apellidos;
    modalRef.componentInstance.TengoClase = this.TengoClase;
    modalRef.result.then((result) => {      
      if (result === 'Separado') {
        this.llenaDatos();
      }     
    });
  }

}
