import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-payment',
  templateUrl: './modal-payment.component.html',
})
export class ModalPaymentComponent implements OnInit {

  @Input() items;
  @Input() payment;
  @Input() tax;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
