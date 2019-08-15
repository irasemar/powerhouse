import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService, } from "../services/auth.services";
import { CatalogsService } from "../services/catalogs.service";

@Component({
  selector: 'app-modal-cancelarreserva',
  templateUrl: './modal-cancelarreserva.component.html',
})
export class ModalCancelarReservaComponent implements OnInit {

  @Input() Usuario;
   
  constructor(public activeModal: NgbActiveModal, private authservice: AuthService,private catalog: CatalogsService) { }

  ngOnInit() {
    console.log(this.Usuario);
  }  
  cancelarreservar(){
    this.activeModal.close("CancelarReserva");
  }
  cancelar(){
    this.activeModal.close("Cancelar");
  }
}
