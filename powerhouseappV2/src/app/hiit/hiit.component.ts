import { Component, OnInit } from '@angular/core';
import { CatalogsService,VentaForm, PaqueteForm } from "../services/catalogs.service";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { agregarventaComponent } from '../agregarventa/agregarventa.component';
import { AuthService, Usuario } from "../services/auth.services";
import { Router } from '@angular/router';
import { ModalMensageProfileComponent } from '../modal-mensageprofile/modal-mensageprofile.component';
import { ModalMensageLoginComponent } from '../modal-mensagelogin/modal-mensagelogin.component';
import { ModalMensagePagoOfflineComponent } from '../modal-mensagepagoffline/modal-mensagepagoffline.component';

@Component({
  selector: 'app-hiit',
  templateUrl: './hiit.component.html',
})
export class HiitComponent implements OnInit {

  cupons: PaqueteForm[];
  session = {} as Usuario;

  constructor(private catalog: CatalogsService, private modalService: NgbModal, private authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
		setTimeout(() => {
      this.catalog.getPaquetes(1).subscribe(paquetes =>{this.cupons = paquetes;});      
    });
  }
  comprar(paquete){
    if (this.authservice.getAccount().NPK_Usuario === 6 || this.authservice.getAccount().NPK_Usuario === 7 || 
      this.authservice.getAccount().NPK_Usuario === 8 || this.authservice.getAccount().NPK_Usuario === 9) {
    
      this.session = this.authservice.getAccount();
      if (this.session) {
        if(this.session.NPK_Usuario > 0) {
          this.catalog.getValidaUsuario(this.authservice.getAccount().NPK_Usuario).subscribe(valid =>{
            console.log(valid);
            if (String(valid[0].id) === '' || String(valid[0].id) === 'null'){
              const modalLogin = this.modalService.open(ModalMensageProfileComponent);
              modalLogin.componentInstance.Usuario = this.authservice.getAccount().Nombre + ' ' + this.authservice.getAccount().Apellidos;
            }
            else {
              this.modalService.open(agregarventaComponent).result.then((result) => { 
                if (result === 'Aceptar') {
                  var Venta= {} as VentaForm;
                  const acc = this.authservice.getAccount();
                  Venta.NFK_Paquete = paquete.NPK_Paquete;
                  Venta.NFK_Usuario = acc.NPK_Usuario;
                  Venta.Cantidad = 1;
                  this.catalog.letVentaUsuario(Venta).subscribe(respuesta =>{
                    this.router.navigate(['/cart/']);
                  });
                }
              }, (reason) => {
                alert(reason);
              });
            }
          });
        }
      }
      else {
        const modalLogin = this.modalService.open(ModalMensageLoginComponent);
      }
    }
    else {
      const modalLogin = this.modalService.open(ModalMensagePagoOfflineComponent);
      return;
    }
    
  }

}
