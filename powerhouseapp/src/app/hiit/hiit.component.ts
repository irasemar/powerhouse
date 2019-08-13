import { Component, OnInit } from '@angular/core';
import { CatalogsService,VentaForm, PaqueteForm } from "../services/catalogs.service";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { agregarventaComponent } from '../agregarventa/agregarventa.component';
import { AuthService } from "../services/auth.services";

@Component({
  selector: 'app-hiit',
  templateUrl: './hiit.component.html',
})
export class HiitComponent implements OnInit {

  cupons: PaqueteForm[];

  constructor(private catalog: CatalogsService, private modalService: NgbModal, private authservice: AuthService,) { }

  ngOnInit() {
    this.cupons = [
      /* {
        title: 'Powerhouse',
        text: 'Tu 1er clase',
        price: '$150',
        expiration: '*Expira en 30 dias'
      },
      {
        title: 'Powerhouse',
        text: 'Tu 1er clase',
        price: '$150',
        expiration: '*Expira en 30 dias'
      },
      {
        title: 'Powerhouse',
        text: 'Tu 1er clase',
        price: '$150',
        expiration: '*Expira en 30 dias'
      },
      {
        title: 'Powerhouse',
        text: 'Tu 1er clase',
        price: '$150',
        expiration: '*Expira en 30 dias'
      },
      {
        title: 'Powerhouse',
        text: 'Tu 1er clase',
        price: '$150',
        expiration: '*Expira en 30 dias'
      },
      {
        title: 'Powerhouse',
        text: 'Tu 1er clase',
        price: '$150',
        expiration: '*Expira en 30 dias'
      },
      {
        title: 'Powerhouse',
        text: 'Tu 1er clase',
        price: '$150',
        expiration: '*Expira en 30 dias'
      },
      {
        title: 'Powerhouse',
        text: 'Tu 1er clase',
        price: '$150',
        expiration: '*Expira en 30 dias'
      },
      {
        title: 'Powerhouse',
        text: 'Tu 1er clase',
        price: '$150',
        expiration: '*Expira en 30 dias'
      },
      {
        title: 'Powerhouse',
        text: 'Tu 1er clase',
        price: '$150',
        expiration: '*Expira en 30 dias'
      }, */
    ]
  }
  ngAfterViewInit() {
		setTimeout(() => {
      this.catalog.getPaquetes(1).subscribe(paquetes =>{this.cupons = paquetes;});      
    });
  }
  comprar(paquete){
    this.modalService.open(agregarventaComponent).result.then((result) => {    
      console.log(result);  
      if (result === 'Aceptar') {
        var Venta= {} as VentaForm;
        const acc = this.authservice.getAccount();
        Venta.NFK_Paquete = paquete.NPK_Paquete;
        Venta.NFK_Usuario = acc.NPK_Usuario;
        Venta.Cantidad = 1;
        this.catalog.letVentaUsuario(Venta).subscribe(respuesta =>{console.log(respuesta);});
      }
    }, (reason) => {
      alert(reason);
    });
  }

}
