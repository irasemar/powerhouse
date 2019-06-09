import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPaymentComponent } from '../modal-payment/modal-payment.component';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {

  items: any[];
  payment: object;
  total: any;
  tax: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.items = [
      {
        qty: 50,
        price: 100,
        desc: 'Clases',
        exp: 30
      },
      {
        qty: 10,
        price: 100,
        desc: 'Clases 2',
        exp: 30
      },
      {
        qty: 50,
        price: 100,
        desc: 'Clases',
        exp: 30
      }
    ]
    this.total = this.calculateTotal(this.items)
    this.tax = this.calculateTax(this.total);
    this.payment = {
      brand: 'Amex',
      digits: 4444,
      expiration: '10/21',
      name: 'Ana Lucia Valderrama',
      address: 'Rio Mayo, Monterrey 66269 MX',
      email: 'nahluciavn@gmail.com'
    }
    
  }

  calculateTotal(arr:any[]) {
    let newArr = [];
    arr.map(item => {
      newArr.push((item.qty * item.price))
    })
    return newArr.reduce((a,b)=> a + b, 0)
  }

  calculateTax(total:number){
    return total *.16
  }

  pay() {
    const modalRef = this.modalService.open(ModalPaymentComponent);
    modalRef.componentInstance.items = this.items;
    modalRef.componentInstance.total = this.total;
    modalRef.componentInstance.tax = this.tax;
    modalRef.componentInstance.payment = this.payment;
  }

}
