import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService, } from "../services/auth.services";
import { CatalogsService } from "../services/catalogs.service";
import { UpdateService } from '../services/loader.service'

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
   
  constructor(public activeModal: NgbActiveModal, private authservice: AuthService,private catalog: CatalogsService,
    private updateService: UpdateService) { }

  ngOnInit() {
    console.log(this.NPK_CalendarioClase);
  }  
  reservar(){
    this.catalog.letReservaLugar(this.NPK_CalendarioClase, this.authservice.getAccount().NPK_Usuario, this.NPK_Salon, this.NPK_SalonLugar).subscribe(respuesta => { 
      this.updateService.UpdateSaldo();
      this.activeModal.close("Separado");
    });    
  }
  cancelar(){
    this.activeModal.close("Cancelar");
  }
}
