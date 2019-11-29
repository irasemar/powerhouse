import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,AsistenciaView } from '../../services/catalogs.service';

@Component({
  selector: 'fury-Asistencia-create-update',
  templateUrl: './Asistencia.component.html',
  styleUrls: ['./Asistencia.component.scss']
})
export class AsistenciaComponent implements OnInit {
	tableHover = true;
	tableStriped = true;
	tableCondensed = true;
	tableBordered = true;
	Reservas: AsistenciaView[];
	NPK_CalendarioClase: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<AsistenciaComponent>,
              private catalog: CatalogsService) {
  }

  ngOnInit() {
    console.log(this.defaults);

    
  }
  ngAfterViewInit() {
    setTimeout(() => {
		this.NPK_CalendarioClase = this.defaults.NPK_CalendarioClase;
      this.catalog.getAsistencias(this.NPK_CalendarioClase).subscribe(reservas => {
        this.Reservas = reservas;
      });
    });
  }

  RegistrarAsistencia(Reserva) {  
	  console.log(Reserva);
	  this.catalog.getRegistrarAsistencias(this.NPK_CalendarioClase, Reserva.NPK_ReservaClase).subscribe(reservas => {
        this.Reservas = reservas;
      });
  }
  CancelarReserva(Reserva) {  
	  console.log(Reserva);
	  this.catalog.letCancelarAsistencias(this.NPK_CalendarioClase, Reserva.NPK_ReservaClase).subscribe(reservas => {
        this.Reservas = reservas;
      });
  }
}
