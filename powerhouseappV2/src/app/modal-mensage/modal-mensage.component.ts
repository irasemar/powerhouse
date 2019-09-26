import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService, } from "../services/auth.services";
import { CatalogsService } from "../services/catalogs.service";
import { Router } from '@angular/router'


@Component({
  selector: 'app-modal-mensage',
  templateUrl: './modal-mensage.component.html',
})
export class ModalMensageComponent implements OnInit {

  @Input() Titulo;
  @Input() Mensage;
  @Input() Mensage2;
   
  constructor(public activeModal: NgbActiveModal, private authservice: AuthService,private catalog: CatalogsService,private router: Router,) { }

  ngOnInit() {
  } 
  cancelar(){
    this.activeModal.close("Cancelar");
  }
}
