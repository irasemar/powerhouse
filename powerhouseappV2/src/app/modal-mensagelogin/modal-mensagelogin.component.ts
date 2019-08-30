import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService, } from "../services/auth.services";
import { CatalogsService } from "../services/catalogs.service";


@Component({
  selector: 'app-modal-mensagelogin',
  templateUrl: './modal-mensagelogin.component.html',
})
export class ModalMensageLoginComponent implements OnInit {

  @Input() Usuario;
   
  constructor(public activeModal: NgbActiveModal, private authservice: AuthService,private catalog: CatalogsService) { }

  ngOnInit() {
  } 
  cancelar(){
    this.activeModal.close("Cancelar");
  }
}
