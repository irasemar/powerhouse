import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService, } from "../services/auth.services";
import { CatalogsService, HistoriaReserva } from "../services/catalogs.service";
import { UpdateService } from '../services/loader.service';
import { ModalCancelarReservaComponent }  from '../modal-cancelarreserva/modal-cancelarreserva.component'

@Component({
  selector: 'app-modal-reserva',
  templateUrl: './modal-reserva.component.html',
})
export class ModalReservaComponent implements OnInit {

  @Input() NPK_Salon;
  @Input() NPK_SalonLugar;
  @Input() LugarSalon;
  @Input() NPK_ReservaClase;
  @Input() NPK_CalendarioClase;
  @Input() NFK_Usuario;
  @Input() Usuario;
  @Input() TengoClase;
  Reservas : HistoriaReserva[];
  disabled: boolean = false;

  constructor(public activeModal: NgbActiveModal, private authservice: AuthService,private catalog: CatalogsService,
    private updateService: UpdateService, private modalService: NgbModal,) { }

  ngOnInit() {
    this.disabled = false;
    console.log(this.NPK_CalendarioClase);
  }
  ngAfterViewInit() {
		setTimeout(() => {
      this.catalog.getMisReservas_Clase(this.authservice.getAccount().NPK_Usuario, this.NPK_CalendarioClase).subscribe(reservas =>{
        this.Reservas = reservas;
      });
    });
  }
  reservar(){
    this.disabled = true;
    this.catalog.letReservaLugar(this.NPK_CalendarioClase, this.authservice.getAccount().NPK_Usuario, this.NPK_Salon, this.NPK_SalonLugar).subscribe(respuesta => { 
      this.updateService.UpdateSaldo();
      this.activeModal.close("Separado");
    });    
  }
  cancelar(){
    this.activeModal.close("Cancelar");
  }
  CancelarReserva(clase : HistoriaReserva){
    const modalRef = this.modalService.open(ModalCancelarReservaComponent);
    modalRef.componentInstance.Usuario = this.authservice.getAccount().Nombre + ' ' + this.authservice.getAccount().Apellidos;
    modalRef.result.then((result) => {      
      if (result === 'CancelarReserva') {
        this.catalog.letCancelarReservaLugar(clase.NPK_ReservaClase, this.authservice.getAccount().NPK_Usuario).subscribe(reservas =>{
          this.catalog.getMisReservas_Clase(this.authservice.getAccount().NPK_Usuario, this.NPK_CalendarioClase).subscribe(reservas =>{
            this.Reservas = reservas;
            this.updateService.UpdateSaldo();
          }); 
        });
      }    
    });
  }
}
