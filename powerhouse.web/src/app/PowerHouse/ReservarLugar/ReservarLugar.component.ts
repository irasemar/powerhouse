import { Component, Inject, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CatalogsService,AsistenciaView, ClaseReserva, ClaseHeader, UsuarioView } from '../../services/catalogs.service';
import { Alert } from 'selenium-webdriver';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatSelect } from '@angular/material';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

@Component({
  selector: 'fury-ReservarLugar-create-update',
  templateUrl: './ReservarLugar.component.html',
  styleUrls: ['./ReservarLugar.component.scss']
})
export class ReservarLugarComponent implements OnInit {
  NPK_CalendarioClase: number = 0;
  NPK_Usuario: number = 0;
  NFK_Clase: number = 0;
  usuarios = [];
  form: FormGroup;
  LugarAReservar = {} as ClaseReserva;
  public welcome = false;
  public bikes : ClaseReserva[];
  public class = {} as ClaseHeader;

  public NFK_Usuario: FormControl = new FormControl();
	public NFK_UsuarioFilterCtrl: FormControl = new FormControl();
  public filteredNFK_Usuario: ReplaySubject<UsuarioView[]> = new ReplaySubject<UsuarioView[]>(1);
  @ViewChild('singleSelect') singleSelect: MatSelect;
  protected _onDestroy = new Subject<void>();
  
  tableHover = true;
	tableStriped = true;
	tableCondensed = true;
	tableBordered = true;
	Reservas: AsistenciaView[];

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<ReservarLugarComponent>,
              private catalog: CatalogsService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.welcome = false;
    console.log(this.defaults);
    this.form = this.fb.group({
      NFK_Usuario: 0
    });
    
  }
  protected filterUsers() {
		if (!this.usuarios) {
			return;
		}
		// get the search keyword
		let search = this.NFK_UsuarioFilterCtrl.value;
		if (!search) {
			this.filteredNFK_Usuario.next(this.usuarios.slice());
			return;
		} else {
			search = search.toLowerCase();
		}
		// filter the usuarios
		this.filteredNFK_Usuario.next(
      this.usuarios.filter(usuario => (usuario.Nombre + ' ' + usuario.Apellidos).toString().toLowerCase().indexOf(search) > -1)
		);
  }
  protected setInitialValue() {
    this.filteredNFK_Usuario
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        this.singleSelect.compareWith = (a: UsuarioView, b: UsuarioView) => a && b && a.NPK_Usuario === b.NPK_Usuario;
      });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.NPK_CalendarioClase = this.defaults.NPK_CalendarioClase;
      this.catalog.getAsistencias(this.NPK_CalendarioClase).subscribe(reservas => {
        this.Reservas = reservas;
      });
      this.catalog.getUsuariosSelect().subscribe(usuariolist => {
        this.usuarios = usuariolist;
        // set initial selection
				this.NFK_Usuario.setValue(this.usuarios[0]);
				// load the initial bank list
				this.filteredNFK_Usuario.next(this.usuarios.slice());		
				// listen for search field value changes
				this.NFK_UsuarioFilterCtrl.valueChanges
				.pipe(takeUntil(this._onDestroy))
				.subscribe(() => {
					this.filterUsers();
        });
        this.setInitialValue();
      });
      this.fillclass();
    });
  }
  fillclass(){
    this.catalog.getEstatus_Salon_PorDia(this.defaults.NFK_Clase, this.defaults.NFK_Semana, this.defaults.Dia, this.defaults.NPK_CalendarioClase).subscribe(lugares => {
      console.log(lugares);
      this.NFK_Clase = this.defaults.NFK_Clase;
      this.bikes = lugares;
      this.catalog.getEstatus_Salon_PorDia_Header(this.defaults.NFK_Clase, this.defaults.NFK_Semana, this.defaults.Dia, this.defaults.NPK_CalendarioClase, this.NPK_Usuario).subscribe(clases => {
        console.log(clases[0]);
        this.class.Fecha = clases[0].Fecha;
        this.class.Clase = clases[0].Clase;          
        this.class.Instructor = clases[0].Instructor;
        this.class.NPK_CalendarioClase = clases[0].NPK_CalendarioClase;
        this.class.NFK_Instructor = clases[0].NFK_Instructor;
        this.class.Fotografia = clases[0].Fotografia;
        this.welcome = true;        
      });
    });
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  ReservarLugar() {
    const cambio = this.form.value;
    
    if (String(this.LugarAReservar.NPK_Salon) == "undefined") {
      alert("Debe de Seleccionar un Lugar de la Clase");
      return;
    }
    if (Number(this.NFK_Usuario.value.NPK_Usuario) <= 0) {
      alert("El Usuario es Requerido");
      return;
    }
    this.catalog.letReservaLugarAdmin(
      this.defaults.NPK_CalendarioClase, this.NFK_Usuario.value.NPK_Usuario, 
      this.LugarAReservar.NPK_Salon, this.LugarAReservar.NPK_SalonLugar).subscribe(respuesta => {
        alert("Reserva Realizada");
        this.fillclass();
      });
      
  }
  public select(bike:ClaseReserva){
    this.bikes.forEach(obj => {
      if (obj.NPK_ReservaClase === 0 && obj.NPK_SalonLugar != bike.NPK_SalonLugar)
        obj.Estatus = false;
    });
    this.LugarAReservar = bike;
    if (bike.Estatus) {
      bike.Estatus = false;
      bike.class = "";
      this.LugarAReservar = {} as ClaseReserva;
    }
    else{
      bike.Estatus = true;
      bike.class = "active";
    }
    console.log(bike);
    console.log(this.LugarAReservar);
    
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
