import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, } from '@angular/forms';
import { AuthService, } from "../services/auth.services";
import { CatalogsService,PagoForm } from "../services/catalogs.service";

@Component({
  selector: 'app-modal-payment',
  templateUrl: './modal-payment.component.html',
})
export class ModalPaymentComponent implements OnInit {

  @Input() items;
  @Input() payment;
  @Input() tax;
  total : number;
  brand: string;
  form = this.fb.group({
    NFK_Usuario : 0,
    TipoTarjeta : "",
    NumeroTarjeta : "",
    ExpiraMes : "",
    ExpiraAño : "",
    NombreTitular : "",
    DireccionTitular : "",
    CorreoElectronico : ""
  });
  
  Anios = [];
  Meses = [];
  Tarjetas = [];
   
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder,private authservice: AuthService,private catalog: CatalogsService) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
		setTimeout(() => {
      this.catalog.getAñoTarjetas(1).subscribe(anios =>{this.Anios = anios;});
      this.catalog.getMess(1).subscribe(meses =>{this.Meses = meses;});
      this.catalog.getTipoTarjetas(1).subscribe(tarjetas =>{this.Tarjetas = tarjetas;});
    });
  }
  closePay(){
    var pago= {} as PagoForm;
    pago.NFK_Usuario = 1;
    pago.TipoTarjeta = this.form.controls.TipoTarjeta.value;
    pago.NumeroTarjeta = String(this.form.controls.NumeroTarjeta.value).substring(String(this.form.controls.NumeroTarjeta.value).length-4,String(this.form.controls.NumeroTarjeta.value).length);
    pago.ExpiraMes = this.form.controls.ExpiraMes.value;
    pago.ExpiraAño = this.form.controls.ExpiraAño.value;
    pago.NombreTitular = this.form.controls.NombreTitular.value;
    pago.DireccionTitular = this.form.controls.DireccionTitular.value;
    pago.CorreoElectronico = this.form.controls.CorreoElectronico.value;
    pago.NumAutorizacion = "Pagado";
    this.activeModal.close(pago);
  }
}
