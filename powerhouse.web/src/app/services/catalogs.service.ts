import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from "@angular/http";

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
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<GeneroForm[]>(`${this.config.apiEndpoint}/v1/catalogos/Genero/${Activo}`, { headers: head } );
  }
  letGenero(genero) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<GeneroForm>(`${this.config.apiEndpoint}/v1/catalogos/Genero`,genero, { headers: headers });
  }
  letActivarGenero(NPK_Genero, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<GeneroForm>(`${this.config.apiEndpoint}/v1/catalogos/Genero/${NPK_Genero}/${Activo}/Activar`, { headers: headers });
  }
  
  getAlturaAsientos(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<AlturaAsientoForm[]>(`${this.config.apiEndpoint}/v1/catalogos/AlturaAsiento/${Activo}`, { headers: head } );
  }
  letAlturaAsiento(alturaasiento) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<AlturaAsientoForm>(`${this.config.apiEndpoint}/v1/catalogos/AlturaAsiento`,alturaasiento, { headers: headers });
  }
  letActivarAlturaAsiento(NPK_AlturaAsiento, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<AlturaAsientoForm>(`${this.config.apiEndpoint}/v1/catalogos/AlturaAsiento/${NPK_AlturaAsiento}/${Activo}/Activar`, { headers: headers });
  }  
  getDistanciaAsientos(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<DistanciaAsientoForm[]>(`${this.config.apiEndpoint}/v1/catalogos/DistanciaAsiento/${Activo}`, { headers: head } );
  }
  letDistanciaAsiento(distanciaasiento) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<DistanciaAsientoForm>(`${this.config.apiEndpoint}/v1/catalogos/DistanciaAsiento`,distanciaasiento, { headers: headers });
  }
  letActivarDistanciaAsiento(NPK_DistanciaAsiento, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<DistanciaAsientoForm>(`${this.config.apiEndpoint}/v1/catalogos/DistanciaAsiento/${NPK_DistanciaAsiento}/${Activo}/Activar`, { headers: headers });
  }  
  getAlturaManubrios(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<AlturaManubrioForm[]>(`${this.config.apiEndpoint}/v1/catalogos/AlturaManubrio/${Activo}`, { headers: head } );
  }
  letAlturaManubrio(alturamanubrio) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<AlturaManubrioForm>(`${this.config.apiEndpoint}/v1/catalogos/AlturaManubrio`,alturamanubrio, { headers: headers });
  }
  letActivarAlturaManubrio(NPK_AlturaManubrio, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<AlturaManubrioForm>(`${this.config.apiEndpoint}/v1/catalogos/AlturaManubrio/${NPK_AlturaManubrio}/${Activo}/Activar`, { headers: headers });
  }
  
  getTallaZapatos(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<TallaZapatoForm[]>(`${this.config.apiEndpoint}/v1/catalogos/TallaZapato/${Activo}`, { headers: head } );
  }
  letTallaZapato(tallazapato) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<TallaZapatoForm>(`${this.config.apiEndpoint}/v1/catalogos/TallaZapato`,tallazapato, { headers: headers });
  }
  letActivarTallaZapato(NPK_TallaZapato, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<TallaZapatoForm>(`${this.config.apiEndpoint}/v1/catalogos/TallaZapato/${NPK_TallaZapato}/${Activo}/Activar`, { headers: headers });
  }  
  getClases(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<ClaseForm[]>(`${this.config.apiEndpoint}/v1/catalogos/Clase/${Activo}`, { headers: head } );
  }
  letClase(clase) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<ClaseForm>(`${this.config.apiEndpoint}/v1/catalogos/Clase`,clase, { headers: headers });
  }
  letActivarClase(NPK_Clase, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<ClaseForm>(`${this.config.apiEndpoint}/v1/catalogos/Clase/${NPK_Clase}/${Activo}/Activar`, { headers: headers });
  }  
  
  getInstructors(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<InstructorForm[]>(`${this.config.apiEndpoint}/v1/catalogos/Instructor/${Activo}`, { headers: head } );
  }
  letInstructor(instructor) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<InstructorForm>(`${this.config.apiEndpoint}/v1/catalogos/Instructor`,instructor, { headers: headers });
  }
  letActivarInstructor(NPK_Instructor, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<InstructorForm>(`${this.config.apiEndpoint}/v1/catalogos/Instructor/${NPK_Instructor}/${Activo}/Activar`, { headers: headers });
  }  
  
  getPaquetes(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<PaqueteForm[]>(`${this.config.apiEndpoint}/v1/catalogos/Paquete/${Activo}`, { headers: head } );
  }
  letPaquete(paquete) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<PaqueteForm>(`${this.config.apiEndpoint}/v1/catalogos/Paquete`,paquete, { headers: headers });
  }
  letActivarPaquete(NPK_Paquete, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<PaqueteForm>(`${this.config.apiEndpoint}/v1/catalogos/Paquete/${NPK_Paquete}/${Activo}/Activar`, { headers: headers });
  }  
  
  getPowerHouses(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<PowerHouseForm[]>(`${this.config.apiEndpoint}/v1/catalogos/PowerHouse/${Activo}`, { headers: head } );
  }
  letPowerHouse(powerhouse) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<PowerHouseForm>(`${this.config.apiEndpoint}/v1/catalogos/PowerHouse`,powerhouse, { headers: headers });
  }
  letActivarPowerHouse(NPK_PowerHouse, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<PowerHouseForm>(`${this.config.apiEndpoint}/v1/catalogos/PowerHouse/${NPK_PowerHouse}/${Activo}/Activar`, { headers: headers });
  }
  
  getRedSocials(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<RedSocialForm[]>(`${this.config.apiEndpoint}/v1/catalogos/RedSocial/${Activo}`, { headers: head } );
  }
  letRedSocial(redsocial) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<RedSocialForm>(`${this.config.apiEndpoint}/v1/catalogos/RedSocial`,redsocial, { headers: headers });
  }
  letActivarRedSocial(NPK_RedSocial, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<RedSocialForm>(`${this.config.apiEndpoint}/v1/catalogos/RedSocial/${NPK_RedSocial}/${Activo}/Activar`, { headers: headers });
  }  
  
  getPowerHouseRedSocials(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<PowerHouseRedSocialForm[]>(`${this.config.apiEndpoint}/v1/catalogos/PowerHouseRedSocial/${Activo}`, { headers: head } );
  }
  letPowerHouseRedSocial(powerhouseredsocial) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<PowerHouseRedSocialForm>(`${this.config.apiEndpoint}/v1/catalogos/PowerHouseRedSocial`,powerhouseredsocial, { headers: headers });
  }
  letActivarPowerHouseRedSocial(NPK_PowerHouseRedSocial, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<PowerHouseRedSocialForm>(`${this.config.apiEndpoint}/v1/catalogos/PowerHouseRedSocial/${NPK_PowerHouseRedSocial}/${Activo}/Activar`, { headers: headers });
  }
  
  getSalons(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<SalonForm[]>(`${this.config.apiEndpoint}/v1/catalogos/Salon/${Activo}`, { headers: head } );
  }
  letSalon(salon) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<SalonForm>(`${this.config.apiEndpoint}/v1/catalogos/Salon`,salon, { headers: headers });
  }
  letActivarSalon(NPK_Salon, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<SalonForm>(`${this.config.apiEndpoint}/v1/catalogos/Salon/${NPK_Salon}/${Activo}/Activar`, { headers: headers });
  }
  
  getSalonLugars(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<SalonLugarView[]>(`${this.config.apiEndpoint}/v1/catalogos/SalonLugar/${Activo}`, { headers: head } );
  }
  letSalonLugar(salonlugar) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<SalonLugarForm>(`${this.config.apiEndpoint}/v1/catalogos/SalonLugar`,salonlugar, { headers: headers });
  }
  letActivarSalonLugar(NPK_SalonLugar, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<SalonLugarForm>(`${this.config.apiEndpoint}/v1/catalogos/SalonLugar/${NPK_SalonLugar}/${Activo}/Activar`, { headers: headers });
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
export interface PaqueteForm {
  NPK_Paquete: number;
  Paquete: string;
  CantidadClases: number;
  Precio: number;
  DescripcionExpiracion: string;
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
 /* export interface WorkCenterResponsableView extends WorkCenterResponsableForm {
  WorkCenter : string
  Responsable : string
}
 */



