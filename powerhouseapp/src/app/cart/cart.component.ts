import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPaymentComponent } from '../modal-payment/modal-payment.component';
import { CatalogsService,VentaCarro,PagoForm } from "../services/catalogs.service";
import { AuthService } from "../services/auth.services";
import { Router } from '@angular/router';
import { UpdateService } from '../services/loader.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {

  items: VentaCarro[];
  payment: any;
  total: any;
  tax: any;
  totalcantidad: any;

  constructor(private modalService: NgbModal, private catalog: CatalogsService, private authservice: AuthService, private router: Router,
    private updateService: UpdateService) { }

  ngOnInit() {
    /* this.payment = {
      brand: 'Amex',
      digits: 4444,
      expiration: '10/21',
      name: 'Ana Lucia Valderrama',
      address: 'Rio Mayo, Monterrey 66269 MX',
      email: 'nahluciavn@gmail.com'
    }  */
    
  }
  ngAfterViewInit() {
		setTimeout(() => {
      this.catalog.getVentaCarrro().subscribe(ventas =>{
        this.items = ventas;
        this.total = this.calculateTotal(this.items);
        this.tax = this.calculateTax(this.total);
        this.totalcantidad = this.calculateTotalCantidad(this.items);
      });

    });
  }

  calculateTotal(arr:any[]) {
    let newArr = [];
    arr.map(item => {
      newArr.push((item.Cantidad * item.PrecioVenta))
    })
    return newArr.reduce((a,b)=> a + b, 0)
  }
  calculateTotalCantidad(arr:any[]) {
    let newArr = [];
    arr.map(item => {
      newArr.push((item.Cantidad))
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
    modalRef.componentInstance.payment = this.total + this.tax;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
        if (result.NFK_Usuario === 1) {
          var Venta = {} as PagoForm;
          const acc = this.authservice.getAccount();
          Venta.NFK_Usuario = acc.NPK_Usuario;
          Venta.TipoTarjeta = result.TipoTarjeta;
          Venta.NumeroTarjeta = result.NumeroTarjeta;
          Venta.ExpiraMes = result.ExpiraMes;
          Venta.ExpiraAño = result.ExpiraAño;
          Venta.NombreTitular = result.NombreTitular;
          Venta.DireccionTitular = result.DireccionTitular;
          Venta.CorreoElectronico = result.CorreoElectronico;
          Venta.NumAutorizacion = result.NumAutorizacion;
          this.catalog.letVentaUsuarioPago(Venta).subscribe(respuesta => { 
            this.updateService.UpdateSaldo();            
          });
          this.router.navigate(['/proximas-clases/']);
        }
      }
    });    
    
  }

}
