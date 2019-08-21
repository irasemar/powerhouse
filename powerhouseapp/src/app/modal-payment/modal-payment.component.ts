import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, } from '@angular/forms';
import { AuthService, } from "../services/auth.services";
import { CatalogsService,PagoForm, MisTarjetas, RespuestaPago } from "../services/catalogs.service";
import { UpdateService } from '../services/loader.service'

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
    NPK_Tarjeta : 0,
    Numero : "",
    Mes : "",
    Anio : "",
    Nombre : "",
    Direccion : "",
    CorreoElectronico : "",
    CVV : "",
    Ciudad: "",
    Estado: "",
    CP: ""
  });
    
  Anios = [];
  Meses = [];
  Tarjetas: MisTarjetas[];
  TarjetaExistente: boolean = false;
  MostrarErrorPago : boolean = false;
  MensageError : string = '';
   
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder,private authservice: AuthService,private catalog: CatalogsService,
    private updateService: UpdateService) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
		setTimeout(() => {
      this.catalog.getAñoTarjetas(1).subscribe(anios =>{this.Anios = anios;});
      this.catalog.getMess(1).subscribe(meses =>{this.Meses = meses;});
      this.catalog.getMisTarjetas( this.authservice.getAccount().NPK_Usuario ).subscribe(tarjetas =>{this.Tarjetas = tarjetas; console.log(tarjetas);});
    });
  }
  changeTarjeta(e){
    if(e.target.value != '0'){
      this.TarjetaExistente = false;
    } else {
      this.TarjetaExistente = true;
    }
  }
  closePay(){
    var pago= {} as PagoForm;
    pago.NFK_Usuario = 1;
    pago.NPK_Tarjeta = this.form.controls.NPK_Tarjeta.value;
    pago.TipoTarjeta = '';
    pago.Numero = String(this.form.controls.Numero.value);
    pago.Mes = this.form.controls.Mes.value;
    pago.Anio = this.form.controls.Anio.value;
    pago.Nombre = this.form.controls.Nombre.value;
    pago.Direccion = this.form.controls.Direccion.value;
    pago.CorreoElectronico = this.form.controls.CorreoElectronico.value;
    pago.NumAutorizacion = "";
    pago.CVV = this.form.controls.CVV.value;
    pago.Ciudad = this.form.controls.Ciudad.value;
    pago.Pais = 'MX';
    pago.Estado = this.form.controls.Estado.value;
    pago.CP = this.form.controls.CP.value;
    if (pago.NFK_Usuario === 1) {
      var Venta = {} as PagoForm;
      const acc = this.authservice.getAccount();
      Venta.NFK_Usuario = acc.NPK_Usuario;
      Venta.NPK_Tarjeta = pago.NPK_Tarjeta;
      Venta.TipoTarjeta = pago.TipoTarjeta;
      Venta.Numero = pago.Numero;
      Venta.Mes = pago.Mes;
      Venta.Anio = pago.Anio;
      Venta.Nombre = pago.Nombre;
      Venta.Direccion = pago.Direccion;
      Venta.CorreoElectronico = pago.CorreoElectronico;
      Venta.NumAutorizacion = pago.NumAutorizacion;
      Venta.CVV = pago.CVV;
      Venta.Ciudad = pago.Ciudad;
      Venta.Pais = pago.Pais;
      Venta.Estado = pago.Estado;
      Venta.CP = pago.CP;
      Venta.Monto = parseFloat(this.payment);
      this.catalog.letVentaUsuarioPago(Venta).subscribe(respuesta => { 
        var resp = {} as RespuestaPago;
        resp = respuesta;
        if (resp.Error === 0){
          this.MostrarErrorPago = false;
          this.activeModal.close(resp);
        }
        else {
          this.MostrarErrorPago = true;
          this.MensageError = '¡Se Ocasiono un Problema don el Sistema de Pago, Por favor Intentelo de nuevo o Mas Tarde!';
        }            
      });
    }
    
  }
  closePaytarjetaExistente(){
    console.log(this.form.controls.NPK_Tarjeta.value);
    if (this.form.controls.NPK_Tarjeta.value === 0){
      this.MensageError = '¡Por Favor Seleccione una Tarjeta o Ingrese una NUEVA!';
      this.MostrarErrorPago = true;
      return;
    }
    var pago= {} as PagoForm;
    pago.NFK_Usuario = 1;
    pago.NPK_Tarjeta = this.form.controls.NPK_Tarjeta.value;
    pago.CVV = this.form.controls.CVV.value;
    if (pago.NFK_Usuario === 1) {
      var Venta = {} as PagoForm;
      const acc = this.authservice.getAccount();
      Venta.NFK_Usuario = acc.NPK_Usuario;
      Venta.NPK_Tarjeta = pago.NPK_Tarjeta;
      Venta.TipoTarjeta = pago.TipoTarjeta;
      Venta.Numero = pago.Numero;
      Venta.Mes = pago.Mes;
      Venta.Anio = pago.Anio;
      Venta.Nombre = pago.Nombre;
      Venta.Direccion = pago.Direccion;
      Venta.CorreoElectronico = pago.CorreoElectronico;
      Venta.NumAutorizacion = pago.NumAutorizacion;
      Venta.CVV = pago.CVV;
      Venta.Ciudad = pago.Ciudad;
      Venta.Pais = pago.Pais;
      Venta.Estado = pago.Estado;
      Venta.CP = pago.CP;
      Venta.Monto = parseFloat(this.payment);
      this.catalog.letVentaUsuarioPago(Venta).subscribe(respuesta => { 
        var resp = {} as RespuestaPago;
        resp = respuesta;
        if (resp.Error === 0){
          this.MostrarErrorPago = false;
          this.activeModal.close(resp);
        }
        else {
          this.MostrarErrorPago = true;
          this.MensageError = '¡Se Ocasiono un Problema don el Sistema de Pago, Por favor Intentelo de nuevo o Mas Tarde!';
        }            
      });
    }
    //
  }
  cancelPay() {
    var resp = {} as RespuestaPago;
    resp.Error = 1;
    this.activeModal.close(resp);
  }
}
