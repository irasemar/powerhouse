import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { APP_CONFIG, AppConfig } from "../app.config";
import { AuthService, Account } from "./auth.services";

@Injectable({
  providedIn: 'root'
})
export class CatalogsService {
  
  constructor(public http: HttpClient,   
              public auth: AuthService,
    @Inject(APP_CONFIG) private config: AppConfig,
  ) { 
    
  }  
  
  getGeneros(Activo) {
    /* let acc = this.auth.getAccount();*/
    let head: HttpHeaders = new HttpHeaders();
    /*head = head.append('Content-Type', 'application/json');
    head = head.append('Authorization', `Bearer ${acc.Token}`); */
    return this.http.get<GeneroForm[]>(`${this.config.apiEndpoint}/v1/catalogos/Genero/${Activo}`, { headers: head })
  }
  letGenero(genero) {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<GeneroForm>(`${this.config.apiEndpoint}/v1/catalogos/Genero`, genero, { headers: headers })
  }
  letActivarGenero(NPK_Genero, Activo) {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    headers = headers.append("Authorization", `Bearer ${acc.Token}`);
    return this.http.post<GeneroForm>(`${this.config.apiEndpoint}/v1/catalogos/Genero/${NPK_Genero}/${Activo}/Activar`, { headers: headers })
  }
  
  getAlturaAsientos(Activo) {
    let acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    /* head = head.append('Content-Type', 'application/json');
    head = head.append('Authorization', `Bearer ${acc.Token}`); */
    return this.http.get<AlturaAsientoForm[]>(`${this.config.apiEndpoint}/v1/catalogos/AlturaAsiento/${Activo}`, { headers: head } )
  }
  letAlturaAsiento(alturaasiento) {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<AlturaAsientoForm>(`${this.config.apiEndpoint}/v1/catalogos/AlturaAsiento`,alturaasiento, { headers: headers })
  }
  letActivarAlturaAsiento(NPK_AlturaAsiento,Activo) {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    headers = headers.append("Authorization", `Bearer ${acc.Token}`);
    return this.http.post<AlturaAsientoForm>(`${this.config.apiEndpoint}/v1/catalogos/AlturaAsiento/${NPK_AlturaAsiento}/${Activo}/Activar`, { headers: headers })
  }  
  
  getDistanciaAsientos(Activo) {
    let acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<DistanciaAsientoForm[]>(`${this.config.apiEndpoint}/v1/catalogos/DistanciaAsiento/${Activo}`, { headers: head } )
  }
  letDistanciaAsiento(distanciaasiento) {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<DistanciaAsientoForm>(`${this.config.apiEndpoint}/v1/catalogos/DistanciaAsiento`,distanciaasiento, { headers: headers })
  }
  letActivarDistanciaAsiento(NPK_DistanciaAsiento,Activo) {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    headers = headers.append("Authorization", `Bearer ${acc.Token}`);
    return this.http.post<DistanciaAsientoForm>(`${this.config.apiEndpoint}/v1/catalogos/DistanciaAsiento/${NPK_DistanciaAsiento}/${Activo}/Activar`, { headers: headers })
  }
  
  getAlturaManubrios(Activo) {
    let acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<AlturaManubrioForm[]>(`${this.config.apiEndpoint}/v1/catalogos/AlturaManubrio/${Activo}`, { headers: head } )
  }
  letAlturaManubrio(alturamanubrio) {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<AlturaManubrioForm>(`${this.config.apiEndpoint}/v1/catalogos/AlturaManubrio`,alturamanubrio, { headers: headers })
  }
  letActivarAlturaManubrio(NPK_AlturaManubrio,Activo) {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    headers = headers.append("Authorization", `Bearer ${acc.Token}`);
    return this.http.post<AlturaManubrioForm>(`${this.config.apiEndpoint}/v1/catalogos/AlturaManubrio/${NPK_AlturaManubrio}/${Activo}/Activar`, { headers: headers })
  }  
  
  getDistanciaManubrios(Activo) {
    let acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<DistanciaManubrioForm[]>(`${this.config.apiEndpoint}/v1/catalogos/DistanciaManubrio/${Activo}`, { headers: head } )
  }
  letDistanciaManubrio(distanciamanubrio) {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<DistanciaManubrioForm>(`${this.config.apiEndpoint}/v1/catalogos/DistanciaManubrio`,distanciamanubrio, { headers: headers })
  }
  letActivarDistanciaManubrio(NPK_DistanciaManubrio,Activo) {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    headers = headers.append("Authorization", `Bearer ${acc.Token}`);
    return this.http.post<DistanciaManubrioForm>(`${this.config.apiEndpoint}/v1/catalogos/DistanciaManubrio/${NPK_DistanciaManubrio}/${Activo}/Activar`, { headers: headers })
  }  
  getTallaZapatos(Activo) {
    let acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<TallaZapatoForm[]>(`${this.config.apiEndpoint}/v1/catalogos/TallaZapato/${Activo}`, { headers: head } )
  }
  letTallaZapato(tallazapato) {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<TallaZapatoForm>(`${this.config.apiEndpoint}/v1/catalogos/TallaZapato`,tallazapato, { headers: headers })
  }
  letActivarTallaZapato(NPK_TallaZapato,Activo) {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    headers = headers.append("Authorization", `Bearer ${acc.Token}`);
    return this.http.post<TallaZapatoForm>(`${this.config.apiEndpoint}/v1/catalogos/TallaZapato/${NPK_TallaZapato}/${Activo}/Activar`, { headers: headers })
  }
  
  
}
export interface GeneroForm {
  NPK_Genero : number
  Genero : string
  Activo : number
}
export interface AlturaAsientoForm {
  NPK_AlturaAsiento : number
  AlturaAsiento : string
  Activo : number
}
export interface DistanciaAsientoForm {
  NPK_DistanciaAsiento : number
  DistanciaAsiento : string
  Activo : number
}
export interface AlturaManubrioForm {
  NPK_AlturaManubrio : number
  AlturaManubrio : string
  Activo : number
}
export interface DistanciaManubrioForm {
  NPK_DistanciaManubrio : number
  DistanciaManubrio : string
  Activo : number
}
export interface TallaZapatoForm {
  NPK_TallaZapato : number
  TallaZapato : string
  Activo : number
}
