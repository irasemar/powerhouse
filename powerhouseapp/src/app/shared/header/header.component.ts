import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/app/login/login.component';
import { AuthService, Usuario,} from '../../services/auth.services';
import { Router } from '@angular/router';
import { CatalogsService,VentaCarro,Saldo } from "../../services/catalogs.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  logged:boolean = false;
  username:string = '';
  isNavbarCollapsed = true;
  welcome = false;
  LoginResult: string;
  session = {} as Usuario;
  itemscarro: VentaCarro[];
  CantidadCarro : number = 0;
  Saldo : Saldo[];

  constructor(private modalService: NgbModal, public auth: AuthService, private catalog: CatalogsService, private router: Router,) { }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
		setTimeout(() => {
      this.LoginResult = 'Valid User';
      this.session = this.auth.getAccount();
      if (this.session) {
        if (this.session.NPK_Usuario > 0) {
          this.logged = true;
          this.username = this.session.Nombre;
          /* this.catalog.getVentaCarrro().subscribe(ventas => {
            this.itemscarro = ventas;
            this.CantidadCarro = ventas.length;
          }); */
          this.catalog.getMiSaldo(this.auth.getAccount().NPK_Usuario).subscribe(saldo =>{
            this.Saldo = saldo;
            this.CantidadCarro = this.Saldo[0].Saldo;
          });
        }
      }

    });
  }

  login(){    
    this.welcome = true;
    this.modalService.open(LoginComponent).result.then((result) => {
      this.session = this.auth.getAccount();
      if (this.session) {
        if(this.session.NPK_Usuario > 0) {
          this.logged = true;
          this.username = this.session.Nombre;
          this.router.navigate(['/proximas-clases/']);
        }
      }
      
    }, (reason) => {
      this.LoginResult = 'Invalid';
      this.logged = false;
    });
    setTimeout(() => this.welcome = false, 5000);
  }
  logOut() {
    this.auth.logout();
    this.logged = false;
    this.router.navigate(['/home/']);
  }
  ProximasClases(){
    this.router.navigate(['/proximas-clases/']);
  }
  MiHistoria(){
    this.router.navigate(['/historial/']);
  }

}
