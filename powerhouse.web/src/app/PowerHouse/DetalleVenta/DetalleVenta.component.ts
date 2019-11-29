import { Component, Inject, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,DetalleVentaView, DetalleVentaReservasView } from '../../services/catalogs.service';
import { Alert } from 'selenium-webdriver';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatSelect } from '@angular/material';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

@Component({
  selector: 'fury-DetalleVenta-create-update',
  templateUrl: './DetalleVenta.component.html',
  styleUrls: ['./DetalleVenta.component.scss']
})
export class DetalleVentaComponent implements OnInit {
  NPK_Venta: number = 0;  
  protected _onDestroy = new Subject<void>();
  
  tableHover = true;
	tableStriped = true;
	tableCondensed = true;
	tableBordered = true;
	DetalleVenta= {} as DetalleVentaView;
  DetalleVentaReservas: DetalleVentaReservasView[];
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<DetalleVentaComponent>,
              private catalog: CatalogsService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.NPK_Venta = this.defaults.NPK_Venta;
    console.log(this.defaults);
    
  }  
  ngAfterViewInit() {
    setTimeout(() => {
      this.catalog.getVentaDetalle(this.NPK_Venta).subscribe(ventas => {
        this.DetalleVenta = ventas;
        console.log(this.DetalleVenta);
      });
      this.catalog.getVentaDetalleReservas(this.NPK_Venta).subscribe(reservas => {
        console.log(reservas);
        this.DetalleVentaReservas = reservas;
      });
    });
  }
  
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  
}
