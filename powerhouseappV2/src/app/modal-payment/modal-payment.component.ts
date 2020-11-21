import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, } from '@angular/forms';
import { AuthService, } from "../services/auth.services";
import { CatalogsService, PagoForm, MisTarjetas, RespuestaPago } from "../services/catalogs.service";
import { UpdateService } from '../services/loader.service'
import { HttpClient } from '@angular/common/http';

declare const OpenPay: any;
@Component({
  selector: 'app-modal-payment',
  templateUrl: './modal-payment.component.html',
})
export class ModalPaymentComponent implements OnInit {

  @Input() items;
  @Input() payment;
  @Input() tax;
  total: number;
  brand: string;
  form = this.fb.group({
    NFK_Usuario: 0,
    NPK_Tarjeta: 0,
    Numero: "",
    Mes: "",
    Anio: "",
    Nombre: "",
    Direccion: "",
    CorreoElectronico: "",
    CVV: "",
    Ciudad: "",
    Estado: "",
    CP: ""
  });

  Anios = [];
  Meses = [];
  Tarjetas: MisTarjetas[];
  TarjetaExistente: boolean = false;
  MostrarErrorPago: boolean = false;
  MensageError: string = '';
  MensageErrorOpenPay: string = '';
  NPK_Usuario = 0;
  deviceSessionId = "";

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private authservice: AuthService, private catalog: CatalogsService,
    private updateService: UpdateService, private modalService: NgbModal,private httpClient: HttpClient) { }

  ngOnInit() {
    this.NPK_Usuario = this.authservice.getAccount().NPK_Usuario;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.catalog.getAñoTarjetas(1).subscribe(anios => { this.Anios = anios; });
      this.catalog.getMess(1).subscribe(meses => { this.Meses = meses; });
      this.catalog.getMisTarjetas(this.authservice.getAccount().NPK_Usuario).subscribe(tarjetas => { this.Tarjetas = tarjetas; console.log(tarjetas); });
    });
  }
  changeTarjeta(e) {
    if (e.target.value != '0') {
      this.TarjetaExistente = false;
    } else {
      this.TarjetaExistente = true;
    }
  }
  closePay() {
    this.MostrarErrorPago = false;
    OpenPay.setId('mxg96q7sc5fe0azbhpmg');
    OpenPay.setApiKey('pk_74d895dc390d49abae71b5252632e613');
    OpenPay.setSandboxMode(false);
    this.deviceSessionId = OpenPay.deviceData.setup();
    
    OpenPay.token.create(
      {
        "card_number": String(this.form.controls.Numero.value),
        "holder_name": this.form.controls.Nombre.value,
        "expiration_year": this.form.controls.Anio.value,
        "expiration_month": this.form.controls.Mes.value,
        "cvv2": String(this.form.controls.CVV.value),
        "cvv": String(this.form.controls.CVV.value),
        "address": {
          "city": this.form.controls.Ciudad.value,
          "line3": this.form.controls.Ciudad.value,
          "postal_code": this.form.controls.CP.value,
          "line1": this.form.controls.Direccion.value,
          "line2": "",
          "state": this.form.controls.Estado.value,
          "country_code": "MX"
        }
      },(success)=> { this.SuccessCallback(success); }, (error) => { this.ErrorCallback(error); }
    );
    
  }
  ErrorCallback(response) {
    this.MostrarErrorPago = true;
    this.MensageError = '¡Se ocasiono un problema con el sistema de pago, por favor intentelo de nuevo o mas tarde!';
    this.MensageErrorOpenPay = response.data.error_code + " - " + response.data.description;
  }
  SuccessCallback(response) {
    var vTokenId = "";
    var vHolder_name = "";
    var vbrand = "";
    var vcardnumber = "";
    vTokenId = response.data.id;
    vHolder_name = response.data.card.holder_name;
    vbrand = response.data.card.brand;
    vcardnumber = response.data.card.card_number;
    //---->
    /* if (this.authservice.getAccount().NPK_Usuario === 6 || this.authservice.getAccount().NPK_Usuario === 7 || 
      this.authservice.getAccount().NPK_Usuario === 8 || this.authservice.getAccount().NPK_Usuario === 9) { */
    //<-----
      var Venta = {} as PagoForm;
      Venta.NFK_Usuario = this.authservice.getAccount().NPK_Usuario;
      Venta.NPK_Tarjeta = 0;
      Venta.TipoTarjeta = vbrand;
      Venta.Numero = vcardnumber;
      Venta.Nombre = vHolder_name;
      Venta.Monto = parseFloat(this.payment);
      Venta.TOKENid = vTokenId;
      Venta.REQUESTid = this.deviceSessionId;
      this.MensageError = 'Espere por favor, estamos realizando su pago.......';
      var resp = {} as RespuestaPago;
      this.catalog.letVentaUsuarioPago(Venta).subscribe(respuesta => {        
        resp = respuesta;        
        if (resp.Error === 0) {
          this.MostrarErrorPago = false;          
          this.activeModal.close(resp);
        }
        else {
          this.MostrarErrorPago = true;
          this.MensageError = '¡Se ocasiono un problema con el sistema de pago, por favor intentelo de nuevo o mas tarde!';
          this.MensageErrorOpenPay = resp.Desc_Error;
        }
      });
    //---->
   /*  } */
    //<-----
  }
 /*  public updatecvv2(MERCHANT_ID, CUSTOMER_ID, CARD_ID, data: any){
    return this.httpClient.put(`https://api.openpay.mx/v1/${MERCHANT_ID}/customers/${CUSTOMER_ID}/cards/${CARD_ID}`,data);
    //https://api.openpay.mx/v1/{MERCHANT_ID}/customers/{CUSTOMER_ID}/cards/{CARD_ID}
  } */
  closePaytarjetaExistente() {
    OpenPay.setId('mxg96q7sc5fe0azbhpmg');
    OpenPay.setApiKey('pk_74d895dc390d49abae71b5252632e613');
    OpenPay.setSandboxMode(false);
    this.deviceSessionId = OpenPay.deviceData.setup();
    if (this.form.controls.NPK_Tarjeta.value === 0) {
      this.MensageError = '¡Por favor seleccione una tarjeta o ingrese una nueva!';
      this.MostrarErrorPago = true;
      return;
    }

    //OpenPay.cards.get("khtdvhlcfzsxscr0m3u6", this.SuccessCallbackTarjeta);
    /* var tarjeta = {"cvv2":"2010"};
    this.updatecvv2('mxg96q7sc5fe0azbhpmg','aulc5bj4y4xhvfwb4yph','khtdvhlcfzsxscr0m3u6',tarjeta).subscribe(respuesta => { console.log(respuesta) }); */   
    console.log(this.form.controls.NPK_Tarjeta.value);
    var pago = {} as PagoForm;
    pago.NFK_Usuario = this.authservice.getAccount().NPK_Usuario;
    pago.NPK_Tarjeta = this.form.controls.NPK_Tarjeta.value;
    pago.CVV = this.form.controls.CVV.value;
    //---->
    /* if (pago.NFK_Usuario === 6 || pago.NFK_Usuario === 7 || pago.NFK_Usuario === 8 || pago.NFK_Usuario === 9) { */
    //<-----
      var Venta = {} as PagoForm;
      const acc = this.authservice.getAccount();
      Venta.NFK_Usuario = acc.NPK_Usuario;
      Venta.NPK_Tarjeta = pago.NPK_Tarjeta;
      Venta.CVV = pago.CVV;
      Venta.Monto = parseFloat(this.payment);
      Venta.REQUESTid = this.deviceSessionId;
      this.MensageError = 'Espere por favor, estamos realizando su pago.......';
      var resp = {} as RespuestaPago;
      this.catalog.letVentaUsuarioPago(Venta).subscribe(respuesta => {        
        resp = respuesta;        
        if (resp.Error === 0) {
          this.MostrarErrorPago = false;          
          this.activeModal.close(resp);
        }
        else {
          this.MostrarErrorPago = true;
          this.MensageError = '¡Se ocasiono un problema con el sistema de pago, por favor intentelo de nuevo o mas tarde!';
          this.MensageErrorOpenPay = resp.Desc_Error;
        }
      });
    //---->
    /* } */
    //<----- 
    
  }
  PagoContarjetaExistente() {
    console.log(this.form.controls.NPK_Tarjeta.value);
    var pago = {} as PagoForm;
    pago.NFK_Usuario = this.authservice.getAccount().NPK_Usuario;
    pago.NPK_Tarjeta = this.form.controls.NPK_Tarjeta.value;
    pago.CVV = this.form.controls.CVV.value;
    //---->
    /* if (pago.NFK_Usuario === 6 || pago.NFK_Usuario === 7 || pago.NFK_Usuario === 8 || pago.NFK_Usuario === 9) { */
    //<-----
      var Venta = {} as PagoForm;
      const acc = this.authservice.getAccount();
      Venta.NFK_Usuario = acc.NPK_Usuario;
      Venta.NPK_Tarjeta = pago.NPK_Tarjeta;
      Venta.CVV = pago.CVV;
      Venta.Monto = parseFloat(this.payment);
      Venta.REQUESTid = this.deviceSessionId;
      this.MensageError = 'Espere por favor, estamos realizando su pago.......';
      var resp = {} as RespuestaPago;
      this.catalog.letVentaUsuarioPago(Venta).subscribe(respuesta => {        
        resp = respuesta;        
        if (resp.Error === 0) {
          this.MostrarErrorPago = false;          
          this.activeModal.close(resp);
        }
        else {
          this.MostrarErrorPago = true;
          this.MensageError = '¡Se ocasiono un problema con el sistema de pago, por favor intentelo de nuevo o mas tarde!';
          this.MensageErrorOpenPay = resp.Desc_Error;
        }
      });
    //---->
    /* } */
    //<-----

  }
  SuccessCallbackTarjeta(response) {
    console.log(response);
  }
  cancelPay() {
    var resp = {} as RespuestaPago;
    resp.Error = 1;
    this.activeModal.close(resp);
  }
}
