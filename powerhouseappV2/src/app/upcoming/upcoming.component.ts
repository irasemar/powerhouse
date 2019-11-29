import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CatalogsService,HistoriaReserva,Saldo, VentaPagoOpenView } from "../services/catalogs.service";
import { AuthService } from "../services/auth.services";
import { Router } from '@angular/router';
import { ModalCancelarReservaComponent }  from '../modal-cancelarreserva/modal-cancelarreserva.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateService } from '../services/loader.service';
import { ActivatedRoute } from "@angular/router";
import { ModalMensageComponent } from '../modal-mensage/modal-mensage.component';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
})
export class UpcomingComponent implements OnInit {
  Reservas : HistoriaReserva[];
  title: string;
  active : number;
  Saldo : Saldo[];
  list: { "title": string; "url": string; }[];
  public welcome = false;
  @Output() valueChange = new EventEmitter();
  constructor( private catalog: CatalogsService, private authservice: AuthService, private router: Router, private modalService: NgbModal,
    private updateService: UpdateService, private route: ActivatedRoute) { 
      this.route.queryParams.subscribe(params => {
          if (String(params.id) != "undefined") {
            if (String(params.id).length > 0) {
              var pago = {} as VentaPagoOpenView;
              pago.IDPagoOpenPay = String(params.id);
              this.catalog.letVentaUsuarioPago_Aplicar(pago).subscribe(respuesta => {        
                var resp = respuesta;        
                if (resp.Error === 0) {
                  this.updateService.UpdateSaldo();
                  const modalMensage = this.modalService.open(ModalMensageComponent);
                  modalMensage.componentInstance.Mensage = "Reserva tus clases.";
                  modalMensage.componentInstance.Titulo = "Tu pago se ha realizado con éxito";
                }
              });
            }
          }
      });
    }

  ngOnInit() {
    this.welcome = false;
    this.title = "Mis próximas clases";
    this.list = [
      {
        "title": "Mi perfil",
        "url": "/perfil"
      },
      {
        "title": "Mis próximas clases",
        "url": "/proximas-clases"
      },
      {
        "title": "Mi historial",
        "url": "/historial"
      },
      {
        "title": "Mis pagos",
        "url": "/historialPagos"
      },
      /* {
        "title": "Power awards",
        "url": "/awards"
      } */
    ]
    setTimeout(() => { 
      this.updateService.UpdateSaldo();
      this.catalog.getMisReservas(this.authservice.getAccount().NPK_Usuario).subscribe(reservas =>{
        this.Reservas = reservas;
        this.welcome = true;     
      });
    }); 
    
  
  }
  ReservarHiit() {
    this.router.navigate(['/indoor-calendar/']);
  }
  ReservarTrain() {
    this.router.navigate(['/hiit-calendar/']);
  }
  CambiarLugarReserva(clase : HistoriaReserva){
    this.router.navigate(['/clase/' + clase.NFK_Semana + '/' + clase.NFK_Clase + '/' + clase.Dia + '/' + clase.NPK_CalendarioClase]);
  }
  CancelarReserva(clase : HistoriaReserva){
    const modalRef = this.modalService.open(ModalCancelarReservaComponent);
    modalRef.componentInstance.Usuario = this.authservice.getAccount().Nombre + ' ' + this.authservice.getAccount().Apellidos;
    modalRef.result.then((result) => {      
      if (result === 'CancelarReserva') {
        this.catalog.letCancelarReservaLugar(clase.NPK_ReservaClase, this.authservice.getAccount().NPK_Usuario).subscribe(reservas =>{
          this.catalog.getMisReservas(this.authservice.getAccount().NPK_Usuario).subscribe(reservas =>{
            this.Reservas = reservas;
            this.updateService.UpdateSaldo();
            this.welcome = true;     
          }); 
        });
      }    
    });
  }

}
