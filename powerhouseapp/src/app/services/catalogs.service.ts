import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { APP_CONFIG, AppConfig } from "../app.config";
import { AuthService, Account } from "./auth.services";

@Injectable({
  providedIn: 'root'
})
export class CatalogsService {
  constructor(public http: HttpClient, public auth: AuthService,
    @Inject(APP_CONFIG) private config: AppConfig,
  ) {
  }
  
  getGeneros(Activo) {
    //const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<GeneroForm[]>(`${this.config.apiEndpoint}/v1/catalogos/Genero/${Activo}`, { headers: head } );
  }
  getGenerosPWH(Activo) {
    //const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    /* head = head.append('Authorization', `Bearer ${acc.Token}`); */
    return this.http.get<GeneroForm[]>(`${this.config.apiEndpoint}/v1/catalogos/GeneroPWH/${Activo}`, { headers: head } );
  }  
  
  getAlturaAsientos(Activo) {
    //const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<AlturaAsientoForm[]>(`${this.config.apiEndpoint}/v1/catalogos/AlturaAsiento/${Activo}`, { headers: head } );
  }
  
  getDistanciaAsientos(Activo) {
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    return this.http.get<DistanciaAsientoForm[]>(`${this.config.apiEndpoint}/v1/catalogos/DistanciaAsiento/${Activo}`, { headers: head } );
  }
   
  getAlturaManubrios(Activo) {
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    return this.http.get<AlturaManubrioForm[]>(`${this.config.apiEndpoint}/v1/catalogos/AlturaManubrio/${Activo}`, { headers: head } );
  }
  
  getDistanciaManubrios(Activo) {
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    return this.http.get<DistanciaManubrioForm[]>(`${this.config.apiEndpoint}/v1/catalogos/DistanciaManubrio/${Activo}`, { headers: head } )
  }
    
  getTallaZapatos(Activo) {
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    return this.http.get<TallaZapatoForm[]>(`${this.config.apiEndpoint}/v1/catalogos/TallaZapato/${Activo}`, { headers: head } );
  }
   
  getClases(Activo) {
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    return this.http.get<ClaseForm[]>(`${this.config.apiEndpoint}/v1/catalogos/Clase/${Activo}`, { headers: head } );
  }  
  
  getInstructors(Activo) {
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    return this.http.get<InstructorView[]>(`${this.config.apiEndpoint}/v1/catalogos/Instructor/${Activo}`, { headers: head } );
  }
  getInstructorsWH(Activo) {
    /* const acc = this.auth.getAccount(); */
    /* let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json'); */
    /* head = head.append('Authorization', `Bearer ${acc.Token}`); */
    return this.http.get<InstructorView[]>(`${this.config.apiEndpoint}/v1/catalogos/InstructorPublico/${Activo}`);
  }
  getDetalleInstructorPublico(NPK_Instructor) {
    /* const acc = this.auth.getAccount(); */
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    /* head = head.append('Authorization', `Bearer ${acc.Token}`); */
    return this.http.get<InstructorView[]>(`${this.config.apiEndpoint}/v1/catalogos/DetalleInstructorPublico/${NPK_Instructor}`, { headers: head } );
  }
  getDetalleInstructorRedesSocialesPublico(NPK_Instructor) {
    /* const acc = this.auth.getAccount(); */
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    /* head = head.append('Authorization', `Bearer ${acc.Token}`); */
    return this.http.get<InstructorRedSocialView[]>(`${this.config.apiEndpoint}/v1/catalogos/InstructorRedSocialWH/${NPK_Instructor}`, { headers: head } );
  } 
  
  getPaquetes(Activo) {
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    return this.http.get<PaqueteForm[]>(`${this.config.apiEndpoint}/v1/catalogos/Paquete/${Activo}`, { headers: head } );
  }
  
  getPowerHouses(Activo) {
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    return this.http.get<PowerHouseForm[]>(`${this.config.apiEndpoint}/v1/catalogos/PowerHouse/${Activo}`, { headers: head } );
  }
  getRedSocials(Activo) {
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    return this.http.get<RedSocialForm[]>(`${this.config.apiEndpoint}/v1/catalogos/RedSocial/${Activo}`, { headers: head } );
  }
  
  getPowerHouseRedSocials(Activo) {
   let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    return this.http.get<PowerHouseRedSocialForm[]>(`${this.config.apiEndpoint}/v1/catalogos/PowerHouseRedSocial/${Activo}`, { headers: head } );
  }  
  
  getSalons(Activo) {
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    return this.http.get<SalonForm[]>(`${this.config.apiEndpoint}/v1/catalogos/Salon/${Activo}`, { headers: head } );
  }
  
  getSalonLugars(Activo) {
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    return this.http.get<SalonLugarView[]>(`${this.config.apiEndpoint}/v1/catalogos/SalonLugar/${Activo}`, { headers: head } );
  }
  
  getInstructorMusicas(NFK_Instructor) {    
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    return this.http.get<InstructorMusicaView[]>(`${this.config.apiEndpoint}/v1/catalogos/InstructorMusicaWH/${NFK_Instructor}`, { headers: head } );
  }
  
  letVentaUsuario(Venta) {
    //const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<VentaForm>(`${this.config.apiEndpoint}/v1/powerhouse/VentaUsuario`, Venta, { headers: head });
  }
  letVentaUsuarioPago(Venta) {
    //const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<PagoForm>(`${this.config.apiEndpoint}/v1/powerhouse/VentaUsuarioPago`, Venta, { headers: head });
  }
  getVentaCarrro() {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<VentaCarro[]>(`${this.config.apiEndpoint}/v1/powerhouse/VentaUsuarioCarro/${acc.NPK_Usuario}`, { headers: head });
  }  
  
  getAñoTarjetas(Activo) {
    //const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<AñoTarjetaForm[]>(`${this.config.apiEndpoint}/v1/catalogos/AñoTarjeta/${Activo}`, { headers: head } );
  }
  
  getTipoTarjetas(Activo) {
    //const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<TipoTarjetaForm[]>(`${this.config.apiEndpoint}/v1/catalogos/TipoTarjeta/${Activo}`, { headers: head } );
  }
  
  getMess(Activo) {
    //const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<MesForm[]>(`${this.config.apiEndpoint}/v1/catalogos/Mes/${Activo}`, { headers: head } );
  }
  getClasesDisponibles(NFK_Clase) {
    //const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<ClasesDisponiblesWeeks[]>(`${this.config.apiEndpoint}/v1/powerhouse/ClasesDisponibles/${NFK_Clase}`, { headers: head });
  }
  getEstatus_Salon_PorDia_Header(NFK_Clase, NFK_Semana, Dia, NPK_CalendarioClase,NPK_Usuario) {
    //const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<ClaseHeader[]>(`${this.config.apiEndpoint}/v1/powerhouse/Estatus_Salon_PorDia_Header/${NFK_Clase}/${NFK_Semana}/${Dia}/${NPK_CalendarioClase}/${NPK_Usuario}`, { headers: head });
  }
  getEstatus_Salon_PorDia(NFK_Clase, NFK_Semana, Dia, NPK_CalendarioClase) {
    //const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<ClaseReserva[]>(`${this.config.apiEndpoint}/v1/powerhouse/Estatus_Salon_PorDia/${NFK_Clase}/${NFK_Semana}/${Dia}/${NPK_CalendarioClase}`, { headers: head });
  }
  letReservaLugar(NFK_CalendarioClase, NFK_Usuario, NFK_Salon, NFK_SalonLugar) {
    //const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<PagoForm>(`${this.config.apiEndpoint}/v1/powerhouse/ReservaLugar/${NFK_CalendarioClase}/${NFK_Usuario}/${NFK_Salon}/${NFK_SalonLugar}`, { headers: head });
  }
  getMiSaldo(NPK_Usuario) {
    //const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<Saldo[]>(`${this.config.apiEndpoint}/v1/powerhouse/Obtener_Saldo/${NPK_Usuario}`, { headers: head });
  }
  getMisReservas(NPK_Usuario) {
    //const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<HistoriaReserva[]>(`${this.config.apiEndpoint}/v1/powerhouse/Mis_Reservas/${NPK_Usuario}`, { headers: head });
  }
  getMiHistoria(NPK_Usuario) {
    //const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<HistoriaReserva[]>(`${this.config.apiEndpoint}/v1/powerhouse/Mi_Historia/${NPK_Usuario}`, { headers: head });
  }
  
}
export interface GeneroForm {
  NPK_Genero: number;
  Genero: string;
  Activo: number;
}
export interface AlturaAsientoForm {
  NPK_AlturaAsiento: number;
  AlturaAsiento: string;
  Activo: number;
}
export interface DistanciaAsientoForm {
  NPK_DistanciaAsiento: number;
  DistanciaAsiento: string;
  Activo: number;
}
export interface AlturaManubrioForm {
  NPK_AlturaManubrio: number;
  AlturaManubrio: string;
  Activo: number;
}
export interface DistanciaManubrioForm {
  NPK_DistanciaManubrio : number
  DistanciaManubrio : string
  Activo : number
}
export interface TallaZapatoForm {
  NPK_TallaZapato: number;
  TallaZapato: string;
  Activo: number;
}
export interface ClaseForm {
  NPK_Clase: number;
  Clase: string;
  DescripcionClase: string;
  Tiempo: number;
  Activo: number;
}
export interface InstructorForm {
  NPK_Instructor: number;
  Nombre: string;
  Apellidos: string;
  PasoFavoritoBici: string;
  PasoFavoritoHiit: string;
  ArtistaFavorito: string;
  AnimalFavorito: string;
  PeliculaFavorito: string;
  Frase: string;
  DescripcionSuClase: string;
  Activo: number;
}
export interface InstructorView extends InstructorForm {
  Fotografia: string;
  name: string;
  image: string;
}
export interface PaqueteForm {
  NPK_Paquete: number;
  Paquete: string;
  CantidadClases: number;
  Precio: number;
  ExpiracionDias: number;
  Activo: number;
}
export interface PowerHouseForm {
  NPK_PowerHouse: number;
  Direccion: string;
  Telefonos: string;
  Latitud: string;
  Longitud: string;
  Activo: number;
}
export interface RedSocialForm {
  NPK_RedSocial: number;
  RedSocial: string;
  RedSocialImagen: string;
  Activo: number;
}
export interface PowerHouseRedSocialForm {
  NPK_PowerHouseRedSocial: number;
  NFK_RedSocial: number;
  RedSocial: string;
  Activo: number;
}
export interface PowerHouseRedSocialView extends PowerHouseRedSocialForm {
  RedSocialDesc : string
  RedSocialImagen : string
}
export interface SalonForm {
  NPK_Salon: number;
  Salon: string;
  Activo: number;
}
export interface SalonLugarForm {
  NPK_SalonLugar: number;
  NFK_Salon: number;
  SalonLugar: string;
  Activo: number;
}
export interface SalonLugarView extends SalonLugarForm {
  Salon : string
}

export interface InstructorRedSocialForm {
  NPK_InstructorRedSocial: number;
  NFK_Instructor: number;
  NFK_RedSocial: number;
  RedSocial: string;
  Activo: number;
}
export interface InstructorRedSocialView extends InstructorRedSocialForm {
  Instructor : string;
  RedSocialDesc: string;
}
export interface InstructorMusicaForm {
  NPK_InstructorMusica: number;
  NFK_Instructor: number;
  Musica: string;
  imagen: string;
  Activo: number;
}
export interface InstructorMusicaView extends InstructorMusicaForm {
  Instructor : string
}
export interface VentaForm {
  NFK_Usuario: number;
  NFK_Paquete: number;
  Cantidad: number;
}
export interface VentaCarro {
  NFK_Usuario: number;
  NFK_Paquete: number;
  Cantidad: number;
  PrecioVenta: number;
  FechaVenta: string;
  FechaPago: string;
  Paquete: string;
  CantidadClases: number;
  ExpiracionDias: number;
}
export interface AñoTarjetaForm {
  NPK_AñoTarjeta: number;
  Anio: number;
  Activo: number;
}
export interface TipoTarjetaForm {
  NPK_TipoTarjeta: number;
  TipoTarjeta: string;
  Activo: number;
}
export interface MesForm {
  NPK_Mes: number;
  NumeroMes: number;
  MesDescripcion: string;
  Activo: number;
}
export interface PagoForm {
  NFK_Usuario : number;
  TipoTarjeta : string;
  NumeroTarjeta : string;
  ExpiraMes : string;
  ExpiraAño : string;
  NombreTitular : string;
  DireccionTitular : string;
  CorreoElectronico : string;
  NumAutorizacion : string;
}

export interface ClasesDisponiblesWeeks {
  NPK_Calendario : number;
  NumeroSemana : number;
  NFK_Semana : number;
  Anio : number;
  DiaSemana  : string;
  Dia  : string;
  NFK_Clase: number;
  days: Array<ClasesDisponiblesDia>
}
export interface ClasesDisponiblesDia {  
  DiaSemana : string;
  Dia: number;
  classes: Array<ClasesDisponibles>
}
export interface ClasesDisponibles {  
  Fecha : string;
  HoraInicio: string;
  Instructor: string;
  Duracion: string;
  selection: boolean;
  NPK_CalendarioClase : number;
  NFK_Calendario : number;
  NFK_Instructor :number;
  Anio : number;
  FechaInicio: string;
  FechaFin: string;
  Reservado : number;
}
export interface ClaseHeader {  
  NPK_CalendarioClase : number;
  NFK_Instructor: number;
  Instructor: string;
  Fecha: string;
  Clase: string;
  Fotografia: string;
  TengoClase: number;
}
export interface ClaseReserva {  
  NPK_Salon : number;
  Salon: string;
  NPK_SalonLugar: number;
  LugarSalon: string;
  NPK_ReservaClase: number;
  NPK_CalendarioClase: number;
  Estatus: boolean;
  NFK_Usuario : number;
}
export interface Saldo {  
  SaldoTotal : number;
  Saldo: number;
  ReservadoHoy: number;
  TotalAsistencia: number;
  TotalReservasPerdidos: number;
}
export interface HistoriaReserva {  
  NPK_ReservaClase : number;
  NPK_CalendarioClase: number;
  NFK_Instructor: number;
  Instructor: string;
  Fecha: string;
  Clase: string;
}
