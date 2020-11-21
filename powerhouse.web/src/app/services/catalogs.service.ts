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
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<GeneroForm[]>(`${this.config.apiEndpoint}/v1/catalogos/Genero/${Activo}`, { headers: head } );
  }
  letGenero(genero) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<GeneroForm>(`${this.config.apiEndpoint}/v1/catalogos/Genero`,genero, { headers: headers });
  }
  letActivarGenero(NPK_Genero, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<GeneroForm>(`${this.config.apiEndpoint}/v1/catalogos/Genero/${NPK_Genero}/${Activo}/Activar`, { headers: headers });
  }
  
  getAlturaAsientos(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<AlturaAsientoForm[]>(`${this.config.apiEndpoint}/v1/catalogos/AlturaAsiento/${Activo}`, { headers: head } );
  }
  letAlturaAsiento(alturaasiento) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<AlturaAsientoForm>(`${this.config.apiEndpoint}/v1/catalogos/AlturaAsiento`,alturaasiento, { headers: headers });
  }
  letActivarAlturaAsiento(NPK_AlturaAsiento, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<AlturaAsientoForm>(`${this.config.apiEndpoint}/v1/catalogos/AlturaAsiento/${NPK_AlturaAsiento}/${Activo}/Activar`, { headers: headers });
  }  
  getDistanciaAsientos(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<DistanciaAsientoForm[]>(`${this.config.apiEndpoint}/v1/catalogos/DistanciaAsiento/${Activo}`, { headers: head } );
  }
  letDistanciaAsiento(distanciaasiento) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<DistanciaAsientoForm>(`${this.config.apiEndpoint}/v1/catalogos/DistanciaAsiento`,distanciaasiento, { headers: headers });
  }
  letActivarDistanciaAsiento(NPK_DistanciaAsiento, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<DistanciaAsientoForm>(`${this.config.apiEndpoint}/v1/catalogos/DistanciaAsiento/${NPK_DistanciaAsiento}/${Activo}/Activar`, { headers: headers });
  }  
  getAlturaManubrios(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<AlturaManubrioForm[]>(`${this.config.apiEndpoint}/v1/catalogos/AlturaManubrio/${Activo}`, { headers: head } );
  }
  letAlturaManubrio(alturamanubrio) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<AlturaManubrioForm>(`${this.config.apiEndpoint}/v1/catalogos/AlturaManubrio`,alturamanubrio, { headers: headers });
  }
  letActivarAlturaManubrio(NPK_AlturaManubrio, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<AlturaManubrioForm>(`${this.config.apiEndpoint}/v1/catalogos/AlturaManubrio/${NPK_AlturaManubrio}/${Activo}/Activar`, { headers: headers });
  }
  
  getTallaZapatos(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<TallaZapatoForm[]>(`${this.config.apiEndpoint}/v1/catalogos/TallaZapato/${Activo}`, { headers: head } );
  }
  letTallaZapato(tallazapato) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<TallaZapatoForm>(`${this.config.apiEndpoint}/v1/catalogos/TallaZapato`,tallazapato, { headers: headers });
  }
  letActivarTallaZapato(NPK_TallaZapato, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<TallaZapatoForm>(`${this.config.apiEndpoint}/v1/catalogos/TallaZapato/${NPK_TallaZapato}/${Activo}/Activar`, { headers: headers });
  }  
  getClases(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<ClaseForm[]>(`${this.config.apiEndpoint}/v1/catalogos/Clase/${Activo}`, { headers: head } );
  }
  letClase(clase) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<ClaseForm>(`${this.config.apiEndpoint}/v1/catalogos/Clase`,clase, { headers: headers });
  }
  letActivarClase(NPK_Clase, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<ClaseForm>(`${this.config.apiEndpoint}/v1/catalogos/Clase/${NPK_Clase}/${Activo}/Activar`, { headers: headers });
  }  
  
  getInstructors(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<InstructorForm[]>(`${this.config.apiEndpoint}/v1/catalogos/Instructor/${Activo}`, { headers: head } );
  }
  letInstructor(instructor) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<InstructorForm>(`${this.config.apiEndpoint}/v1/catalogos/Instructor`,instructor, { headers: headers });
  }
  letActivarInstructor(NPK_Instructor, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<InstructorForm>(`${this.config.apiEndpoint}/v1/catalogos/Instructor/${NPK_Instructor}/${Activo}/Activar`, { headers: headers });
  }  
  
  getPaquetes(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<PaqueteForm[]>(`${this.config.apiEndpoint}/v1/catalogos/Paquete/${Activo}/${1}`, { headers: head } );
  }
  letPaquete(paquete) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<PaqueteForm>(`${this.config.apiEndpoint}/v1/catalogos/Paquete`,paquete, { headers: headers });
  }
  letActivarPaquete(NPK_Paquete, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<PaqueteForm>(`${this.config.apiEndpoint}/v1/catalogos/Paquete/${NPK_Paquete}/${Activo}/Activar`, { headers: headers });
  }  
  
  getPowerHouses(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<PowerHouseForm[]>(`${this.config.apiEndpoint}/v1/catalogos/PowerHouse/${Activo}`, { headers: head } );
  }
  letPowerHouse(powerhouse) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<PowerHouseForm>(`${this.config.apiEndpoint}/v1/catalogos/PowerHouse`,powerhouse, { headers: headers });
  }
  letActivarPowerHouse(NPK_PowerHouse, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<PowerHouseForm>(`${this.config.apiEndpoint}/v1/catalogos/PowerHouse/${NPK_PowerHouse}/${Activo}/Activar`, { headers: headers });
  }
  
  getRedSocials(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<RedSocialForm[]>(`${this.config.apiEndpoint}/v1/catalogos/RedSocial/${Activo}`, { headers: head } );
  }
  letRedSocial(redsocial) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<RedSocialForm>(`${this.config.apiEndpoint}/v1/catalogos/RedSocial`,redsocial, { headers: headers });
  }
  letActivarRedSocial(NPK_RedSocial, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<RedSocialForm>(`${this.config.apiEndpoint}/v1/catalogos/RedSocial/${NPK_RedSocial}/${Activo}/Activar`, { headers: headers });
  }  
  
  getPowerHouseRedSocials(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<PowerHouseRedSocialForm[]>(`${this.config.apiEndpoint}/v1/catalogos/PowerHouseRedSocial/${Activo}`, { headers: head } );
  }
  letPowerHouseRedSocial(powerhouseredsocial) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<PowerHouseRedSocialForm>(`${this.config.apiEndpoint}/v1/catalogos/PowerHouseRedSocial`,powerhouseredsocial, { headers: headers });
  }
  letActivarPowerHouseRedSocial(NPK_PowerHouseRedSocial, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<PowerHouseRedSocialForm>(`${this.config.apiEndpoint}/v1/catalogos/PowerHouseRedSocial/${NPK_PowerHouseRedSocial}/${Activo}/Activar`, { headers: headers });
  }
  
  getSalons(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<SalonForm[]>(`${this.config.apiEndpoint}/v1/catalogos/Salon/${Activo}`, { headers: head } );
  }
  letSalon(salon) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<SalonForm>(`${this.config.apiEndpoint}/v1/catalogos/Salon`,salon, { headers: headers });
  }
  letActivarSalon(NPK_Salon, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<SalonForm>(`${this.config.apiEndpoint}/v1/catalogos/Salon/${NPK_Salon}/${Activo}/Activar`, { headers: headers });
  }
  
  getSalonLugars(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<SalonLugarView[]>(`${this.config.apiEndpoint}/v1/catalogos/SalonLugar/${Activo}`, { headers: head } );
  }
  letSalonLugar(salonlugar) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<SalonLugarForm>(`${this.config.apiEndpoint}/v1/catalogos/SalonLugar`,salonlugar, { headers: headers });
  }
  letActivarSalonLugar(NPK_SalonLugar, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<SalonLugarForm>(`${this.config.apiEndpoint}/v1/catalogos/SalonLugar/${NPK_SalonLugar}/${Activo}/Activar`, { headers: headers });
  }
  
  
  getInstructorMusicas(NFK_Instructor) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<InstructorMusicaView[]>(`${this.config.apiEndpoint}/v1/catalogos/InstructorMusica/${NFK_Instructor}`, { headers: head } );
  }
  letInstructorMusica(instructormusica) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<InstructorMusicaForm>(`${this.config.apiEndpoint}/v1/catalogos/InstructorMusica`,instructormusica, { headers: headers });
  }
  letActivarInstructorMusica(NPK_InstructorMusica, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<InstructorMusicaForm>(`${this.config.apiEndpoint}/v1/catalogos/InstructorMusica/${NPK_InstructorMusica}/${Activo}/Activar`, { headers: headers });
  }
  letEliminarInstructorMusica(NPK_InstructorMusica) {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    headers = headers.append("Authorization", `Bearer ${acc.Token}`);
    return this.http.post<InstructorMusicaForm>(`${this.config.apiEndpoint}/v1/catalogos/InstructorMusica/${NPK_InstructorMusica}/Eliminar`, { headers: headers })
  }
  
  getInstructorRedSocials(NFK_Instructor) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<InstructorRedSocialView[]>(`${this.config.apiEndpoint}/v1/catalogos/InstructorRedSocial/${NFK_Instructor}`, { headers: head } );
  }
  letInstructorRedSocial(instructorredsocial) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<InstructorRedSocialForm>(`${this.config.apiEndpoint}/v1/catalogos/InstructorRedSocial`,instructorredsocial, { headers: headers });
  }
  letEliminarInstructorRedSocial(NPK_InstructorRedSocial) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<InstructorRedSocialForm>(`${this.config.apiEndpoint}/v1/catalogos/InstructorRedSocial/${NPK_InstructorRedSocial}/Eliminar`, { headers: headers });
  }
  
  getCalendarios(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<CalendarioView[]>(`${this.config.apiEndpoint}/v1/catalogos/Calendario/${Activo}`, { headers: head } );
  }
  letCalendario(calendario) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<CalendarioForm>(`${this.config.apiEndpoint}/v1/catalogos/Calendario`,calendario, { headers: headers });
  }
  letActivarCalendario(NPK_Calendario, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<CalendarioForm>(`${this.config.apiEndpoint}/v1/catalogos/Calendario/${NPK_Calendario}/${Activo}/Activar`, { headers: headers });
  }
  getAnios(Activo) {
    const acc = this.auth.getAccount();
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'application/json');
    //head = head.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.get<AñoForm[]>(`${this.config.apiEndpoint}/v1/catalogos/Anio/${Activo}`, { headers: head } );
  }
  letAño(año) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<AñoForm>(`${this.config.apiEndpoint}/v1/catalogos/Anio`,año, { headers: headers });
  }
  letActivarAño(NPK_Año, Activo) {
    const acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    return this.http.post<AñoForm>(`${this.config.apiEndpoint}/v1/catalogos/Anio/${NPK_Año}/${Activo}/Activar`, { headers: headers });
  }
  
getSemanas(Activo) {
	const acc = this.auth.getAccount();
	let head: HttpHeaders = new HttpHeaders();
	head = head.append('Content-Type', 'application/json');
	//head = head.append('Authorization', `Bearer ${acc.Token}`);
	return this.http.get<SemanaView[]>(`${this.config.apiEndpoint}/v1/catalogos/Semana/${Activo}`, { headers: head } );
}
letSemana(semana) {
	const acc = this.auth.getAccount();
	let headers: HttpHeaders = new HttpHeaders();
	headers = headers.append('Content-Type', 'application/json');
	//headers = headers.append('Authorization', `Bearer ${acc.Token}`);
	return this.http.post<SemanaForm>(`${this.config.apiEndpoint}/v1/catalogos/Semana`,semana, { headers: headers });
}
letActivarSemana(NPK_Semana, Activo) {
	const acc = this.auth.getAccount();
	let headers: HttpHeaders = new HttpHeaders();
	headers = headers.append('Content-Type', 'application/json');
	//headers = headers.append('Authorization', `Bearer ${acc.Token}`);
	return this.http.post<SemanaForm>(`${this.config.apiEndpoint}/v1/catalogos/Semana/${NPK_Semana}/${Activo}/Activar`, { headers: headers });
}

getCalendarioClases(NPK_Calendario) {
	const acc = this.auth.getAccount();
	let head: HttpHeaders = new HttpHeaders();
	head = head.append('Content-Type', 'application/json');
	//head = head.append('Authorization', `Bearer ${acc.Token}`);
	return this.http.get<CalendarioClaseView[]>(`${this.config.apiEndpoint}/v1/catalogos/CalendarioClase/${NPK_Calendario}`, { headers: head } );
}
letCalendarioClase(calendarioclase) {
	const acc = this.auth.getAccount();
	let headers: HttpHeaders = new HttpHeaders();
	headers = headers.append('Content-Type', 'application/json');
	//headers = headers.append('Authorization', `Bearer ${acc.Token}`);
	return this.http.post<CalendarioClaseForm>(`${this.config.apiEndpoint}/v1/catalogos/CalendarioClase`,calendarioclase, { headers: headers });
}
letEliminarCalendarioClase(NPK_CalendarioClase) {
	const acc = this.auth.getAccount();
	let headers: HttpHeaders = new HttpHeaders();
	headers = headers.append('Content-Type', 'application/json');
	//headers = headers.append('Authorization', `Bearer ${acc.Token}`);
	return this.http.post<CalendarioClaseForm>(`${this.config.apiEndpoint}/v1/catalogos/CalendarioClase/${NPK_CalendarioClase}/Eliminar`, { headers: headers });
}

getUsuarios(Activo) {
	const acc = this.auth.getAccount();
	let head: HttpHeaders = new HttpHeaders();
	head = head.append('Content-Type', 'application/json');
	//head = head.append('Authorization', `Bearer ${acc.Token}`);
	return this.http.get<UsuarioView[]>(`${this.config.apiEndpoint}/v1/catalogos/Usuario/${Activo}`, { headers: head } );
}
getUsuariosSelect() {
	const acc = this.auth.getAccount();
	let head: HttpHeaders = new HttpHeaders();
	head = head.append('Content-Type', 'application/json');
	//head = head.append('Authorization', `Bearer ${acc.Token}`);
	return this.http.get<UsuarioView[]>(`${this.config.apiEndpoint}/v1/catalogos/UsuariosSelect`, { headers: head } );
}

getUsuariosAdmin(Activo) {
	const acc = this.auth.getAccount();
	let head: HttpHeaders = new HttpHeaders();
	head = head.append('Content-Type', 'application/json');
	//head = head.append('Authorization', `Bearer ${acc.Token}`);
	return this.http.get<UsuarioView[]>(`${this.config.apiEndpoint}/v1/catalogos/UsuarioAdmin/${Activo}`, { headers: head } );
}
getUsuariosEliminar() {
	const acc = this.auth.getAccount();
	let head: HttpHeaders = new HttpHeaders();
	head = head.append('Content-Type', 'application/json');
	//head = head.append('Authorization', `Bearer ${acc.Token}`);
	return this.http.get<UsuarioView[]>(`${this.config.apiEndpoint}/v1/catalogos/UsuarioEliminar`, { headers: head } );
}
getUsuariosReportePremio(ConPremio) {
	const acc = this.auth.getAccount();
	let head: HttpHeaders = new HttpHeaders();
	head = head.append('Content-Type', 'application/json');
	//head = head.append('Authorization', `Bearer ${acc.Token}`);
	return this.http.get<UsuarioPremiosView[]>(`${this.config.apiEndpoint}/v1/catalogos/ConsultaUsuarioClases/${ConPremio}`, { headers: head } );
}
getUsuariosReportePorInstructor() {
	const acc = this.auth.getAccount();
	let head: HttpHeaders = new HttpHeaders();
	head = head.append('Content-Type', 'application/json');
	//head = head.append('Authorization', `Bearer ${acc.Token}`);
	return this.http.get<UsuarioPorInstructorView[]>(`${this.config.apiEndpoint}/v1/catalogos/ConsultaUsuarioClasesPorInstructor`, { headers: head } );
}

deleteUsuariosEliminar(NPK_Usuario) {
	const acc = this.auth.getAccount();
	let head: HttpHeaders = new HttpHeaders();
	head = head.append('Content-Type', 'application/json');
	//head = head.append('Authorization', `Bearer ${acc.Token}`);
	return this.http.get<RespuestaView>(`${this.config.apiEndpoint}/v1/catalogos/EliminarUsuario/${NPK_Usuario}`, { headers: head } );
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
getMisTarjetas(NPK_Usuario) {
  //const acc = this.auth.getAccount();
  let head: HttpHeaders = new HttpHeaders();
  head = head.append('Content-Type', 'application/json');
  //head = head.append('Authorization', `Bearer ${acc.Token}`);
  return this.http.get<MisTarjetas[]>(`${this.config.apiEndpoint}/v1/powerhouse/Obtener_Tarjetas/${NPK_Usuario}`, { headers: head } );
}
getMiHistoriaPagos(NPK_Usuario) {
  //const acc = this.auth.getAccount();
  let head: HttpHeaders = new HttpHeaders();
  head = head.append('Content-Type', 'application/json');
  //head = head.append('Authorization', `Bearer ${acc.Token}`);
  return this.http.get<MisPagos[]>(`${this.config.apiEndpoint}/v1/powerhouse/Mi_HistoriaPagos/${NPK_Usuario}`, { headers: head });
}
getMiHistoriaPagos_PWH() {
  //const acc = this.auth.getAccount();
  let head: HttpHeaders = new HttpHeaders();
  head = head.append('Content-Type', 'application/json');
  //head = head.append('Authorization', `Bearer ${acc.Token}`);
  return this.http.get<MisPagos[]>(`${this.config.apiEndpoint}/v1/powerhouse/Mi_HistoriaPagosPWH`, { headers: head });
}
getMiHistoriaPagos_PWHHOY() {
  //const acc = this.auth.getAccount();
  let head: HttpHeaders = new HttpHeaders();
  head = head.append('Content-Type', 'application/json');
  //head = head.append('Authorization', `Bearer ${acc.Token}`);
  return this.http.get<MisPagos[]>(`${this.config.apiEndpoint}/v1/powerhouse/Mi_HistoriaPagosPWHHOY`, { headers: head });
}
getVentaDetalle(NPK_Venta) {
  //const acc = this.auth.getAccount();
  let head: HttpHeaders = new HttpHeaders();
  head = head.append('Content-Type', 'application/json');
  //head = head.append('Authorization', `Bearer ${acc.Token}`);
  return this.http.get<DetalleVentaView>(`${this.config.apiEndpoint}/v1/powerhouse/DetallePago/${NPK_Venta}`, { headers: head });
}
getVentaDetalleReservas(NPK_Venta) {
  //const acc = this.auth.getAccount();
  let head: HttpHeaders = new HttpHeaders();
  head = head.append('Content-Type', 'application/json');
  //head = head.append('Authorization', `Bearer ${acc.Token}`);
  return this.http.get<DetalleVentaReservasView[]>(`${this.config.apiEndpoint}/v1/powerhouse/DetallePagoReservas/${NPK_Venta}`, { headers: head });
}
getReservasPWHHoy() {
  //const acc = this.auth.getAccount();
  let head: HttpHeaders = new HttpHeaders();
  head = head.append('Content-Type', 'application/json');
  //head = head.append('Authorization', `Bearer ${acc.Token}`);
  return this.http.get<ReservasPWHHoyView[]>(`${this.config.apiEndpoint}/v1/powerhouse/Reservas_PWH_Hoy`, { headers: head });
}
getReservasPWHHoyAtras() {
  //const acc = this.auth.getAccount();
  let head: HttpHeaders = new HttpHeaders();
  head = head.append('Content-Type', 'application/json');
  //head = head.append('Authorization', `Bearer ${acc.Token}`);
  return this.http.get<ReservasPWHHoyView[]>(`${this.config.apiEndpoint}/v1/powerhouse/Reservas_PWH_Hoy_Atras`, { headers: head });
}

getReservasPWHApartirHoy() {
  //const acc = this.auth.getAccount();
  let head: HttpHeaders = new HttpHeaders();
  head = head.append('Content-Type', 'application/json');
  //head = head.append('Authorization', `Bearer ${acc.Token}`);
  return this.http.get<ReservasPWHHoyView[]>(`${this.config.apiEndpoint}/v1/powerhouse/Reservas_PWH_ApartirHoy`, { headers: head });
}
getAsistencias(NFK_CalendarioClase) {
  //const acc = this.auth.getAccount();
  let head: HttpHeaders = new HttpHeaders();
  head = head.append('Content-Type', 'application/json');
  //head = head.append('Authorization', `Bearer ${acc.Token}`);
  return this.http.get<AsistenciaView[]>(`${this.config.apiEndpoint}/v1/powerhouse/Reservas_Asistencia/${NFK_CalendarioClase}`, { headers: head });
}
getRegistrarAsistencias(NFK_CalendarioClase, NPK_ReservaClase) {
  //const acc = this.auth.getAccount();
  let head: HttpHeaders = new HttpHeaders();
  head = head.append('Content-Type', 'application/json');
  //head = head.append('Authorization', `Bearer ${acc.Token}`);
  return this.http.get<AsistenciaView[]>(`${this.config.apiEndpoint}/v1/powerhouse/Reservas_Asistencia_Registrar/${NFK_CalendarioClase}/${NPK_ReservaClase}`, { headers: head });
}
letCancelarAsistencias(NFK_CalendarioClase, NPK_ReservaClase) {
  //const acc = this.auth.getAccount();
  let head: HttpHeaders = new HttpHeaders();
  head = head.append('Content-Type', 'application/json');
  //head = head.append('Authorization', `Bearer ${acc.Token}`);
  return this.http.get<AsistenciaView[]>(`${this.config.apiEndpoint}/v1/powerhouse/Reservas_Cancelar_Admin/${NFK_CalendarioClase}/${NPK_ReservaClase}`, { headers: head });
}
getRegistrarRegalar_Clases(NFK_Usuario, Cantidad, CreadoPor) {
  //const acc = this.auth.getAccount();
  let head: HttpHeaders = new HttpHeaders();
  head = head.append('Content-Type', 'application/json');
  //head = head.append('Authorization', `Bearer ${acc.Token}`);
  return this.http.get<RespuestaView>(`${this.config.apiEndpoint}/v1/powerhouse/Regalar_Clases/${NFK_Usuario}/${Cantidad}/${CreadoPor}`, { headers: head });
}
letRegistrar_VentaPaquete_Clases(Paquete) {
  //const acc = this.auth.getAccount();
  let head: HttpHeaders = new HttpHeaders();
  head = head.append('Content-Type', 'application/json');
  //head = head.append('Authorization', `Bearer ${acc.Token}`);
  return this.http.post<RespuestaView>(`${this.config.apiEndpoint}/v1/powerhouse/Registrar_VentaPaquete_Clases`, Paquete, { headers: head });
}
getReservasDashBoard() {
  //const acc = this.auth.getAccount();
  let head: HttpHeaders = new HttpHeaders();
  head = head.append('Content-Type', 'application/json');
  //head = head.append('Authorization', `Bearer ${acc.Token}`);
  return this.http.get<ReservaDashboardView[]>(`${this.config.apiEndpoint}/v1/powerhouse/Reservas_Dashboard`, { headers: head });
}
letCambiarInstructor(forma) {
  //const acc = this.auth.getAccount();
  let head: HttpHeaders = new HttpHeaders();
  head = head.append('Content-Type', 'application/json');
  //head = head.append('Authorization', `Bearer ${acc.Token}`);
  return this.http.post<RespuestaView[]>(`${this.config.apiEndpoint}/v1/powerhouse/Cambiar_Instructor_Clase`, forma, { headers: head });
}
letUsuario(usuario) {
	//const acc = this.auth.getAccount();
	let headers: HttpHeaders = new HttpHeaders();
	headers = headers.append('Content-Type', 'application/json');
	//headers = headers.append('Authorization', `Bearer ${acc.Token}`);
	return this.http.post<UsuarioForm>(`${this.config.apiEndpoint}/v1/auth/UpdateProfileAdmin`,usuario, { headers: headers });
}
getEstatus_Salon_PorDia(NFK_Clase, NFK_Semana, Dia, NPK_CalendarioClase) {
  //const acc = this.auth.getAccount();
  let head: HttpHeaders = new HttpHeaders();
  head = head.append('Content-Type', 'application/json');
  //head = head.append('Authorization', `Bearer ${acc.Token}`);
  return this.http.get<ClaseReserva[]>(`${this.config.apiEndpoint}/v1/powerhouse/Estatus_Salon_PorDia/${NFK_Clase}/${NFK_Semana}/${Dia}/${NPK_CalendarioClase}`, { headers: head });
}
getEstatus_Salon_PorDia_Header(NFK_Clase, NFK_Semana, Dia, NPK_CalendarioClase,NPK_Usuario) {
  //const acc = this.auth.getAccount();
  let head: HttpHeaders = new HttpHeaders();
  head = head.append('Content-Type', 'application/json');
  //head = head.append('Authorization', `Bearer ${acc.Token}`);
  return this.http.get<ClaseHeader[]>(`${this.config.apiEndpoint}/v1/powerhouse/Estatus_Salon_PorDia_Header/${NFK_Clase}/${NFK_Semana}/${Dia}/${NPK_CalendarioClase}/${NPK_Usuario}`, { headers: head });
}
letReservaLugarAdmin(NFK_CalendarioClase, NFK_Usuario, NFK_Salon, NFK_SalonLugar) {
  //const acc = this.auth.getAccount();
  let head: HttpHeaders = new HttpHeaders();
  head = head.append('Content-Type', 'application/json');
  //head = head.append('Authorization', `Bearer ${acc.Token}`);
  return this.http.post<RespuestaView>(`${this.config.apiEndpoint}/v1/powerhouse/ReservaLugar/${NFK_CalendarioClase}/${NFK_Usuario}/${NFK_Salon}/${NFK_SalonLugar}`, { headers: head });
}
letEliminarVenta(NPK_Venta) {
  //const acc = this.auth.getAccount();
  let head: HttpHeaders = new HttpHeaders();
  head = head.append('Content-Type', 'application/json');
  //head = head.append('Authorization', `Bearer ${acc.Token}`);
  return this.http.get<RespuestaView>(`${this.config.apiEndpoint}/v1/powerhouse/EliminarVenta/${NPK_Venta}`, { headers: head });
}
letEliminarTarjeta(tarjeta) {
  //const acc = this.auth.getAccount();
  let head: HttpHeaders = new HttpHeaders();
  head = head.append('Content-Type', 'application/json');
  //head = head.append('Authorization', `Bearer ${acc.Token}`);
  return this.http.post<RespuestaView>(`${this.config.apiEndpoint}/v1/powerhouse/EliminarTarjeta`, tarjeta, { headers: head });
}
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
  Usuario: string;
  Asistencia: number;
  class: string;
}
export interface Saldo {  
  SaldoTotal : number;
  Saldo: number;
  ReservadoHoy: number;
  TotalAsistencia: number;
  TotalReservasPerdidos: number;
}
export interface UsuarioPremiosView {
  NPK_Usuario: number;
  Nombre: string;
  Usuario: string;
  Correo: string;
  CantidadCompras: number;
  CantClasesCompradas: number;
  CantidadClasesAsistio: number;
  CantidadClasesSinAsistir: number;
  TotalClases: number;
  Premio1: string;
  Premio2: string;
  Premio3: string;
  Premio4: string;
  Premio5: string;
  Premio6: string;
  Premio7: string;
  Premio8: string;
  Premio9: string;
  Premio10: string;
  CantClasesAsistioRIDE: number;
  CantClasesAsistioTRAIN: number;
}
export interface UsuarioPorInstructorView {
  NPK_Usuario: number;
  Nombre: string;
  Usuario: string;
  Clase: string;
  Instructor: string;
  CantClases: number;
}
export interface UsuarioView {
	NPK_Usuario: number;
	Nombre: string;
	Apellidos: string;
	Usuario: string;
	Contrasena: string;
	Telefono: string;
	FechaNacimiento: string;
	Genero: string;
	ContactoEmergencia: string;
	TelefonoContacto: string;
	BikeSetupAlturaAsiento: string;
	BikeSetupDistanciaAsiento: string;
	BikeSetupDistanciaManubrio: string;
	BikeSetupAlturaManubrio: string;
	TallaZapato: string;
	QuieroOfertas: number;
	Activo: number;
	Administrador: number;
	id: string;
  Correo: string;
  FechaCreacion: string;
  SaldoTotal: number;
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
  TipoInstructor: string;
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
export interface CalendarioForm {
  NPK_Calendario: number;
  NFK_Anio: number;
  NFK_Semana: number;
  Date: string;
  NFK_Clase: number;
  Activo: number;
} 
export interface CalendarioView extends CalendarioForm {
  Anio : string;
  NumeroSemana: string;
  Clase: string;
}
export interface AñoForm {
	NPK_Anio: number;
	Anio: number;
	Activo: number;
}
export interface SemanaForm {
	NPK_Semana: number;
	NFK_Anio: number;
	NumeroSemana: number;
	FechaInicio: string;
	FechaFin: string;
	Activo: number;
}
export interface SemanaView extends SemanaForm {
  Anio : string;
}
export interface CalendarioClaseForm {
	NPK_CalendarioClase: number;
	NFK_Calendario: number;
	NFK_Instructor: number;
	HoraInicio: string;
	Duracion: number;
	Actividad: string;
  Activo: number;
  NFK_InstructorAdjunto: number;
}
export interface CalendarioClaseView extends CalendarioClaseForm {
  Instructor : string;
  InstructorAdjunto : string;
  PuedeEliminar : number;
  CantReservas: number;
  DescPuedeEliminar: string;
}
export interface MisPagos {
  Cliente: string;
  FechaPago: string;
  Paquete: string;
  MontoPago: number;
  TipoTarjeta: string;
  NumeroTarjeta: string;
  NumAutorizacion: string;
  CantidadClases: number;
  CantidadClasesUtilizadas: number;
  NPK_Venta: number;
  FechaVencimiento: string;
}
export interface MisTarjetas {  
  NPK_Tarjeta: number;
  NFK_Usuario: number;
  Nombre: string;
  Numero: string;
  CVV: string;
  Mes: string;
  Anio: string;
  Ciudad : string;
  Pais: string;
  Estado: string;
  CP: string;
  Direccion: string;
  IdOpen: string,
  id: string
}
export interface Saldo {  
  SaldoTotal : number;
  Saldo: number;
  ReservadoHoy: number;
  TotalAsistencia: number;
  TotalReservasPerdidos: number;
  ReservasHoyRide: number;
  ReservasHoyTrain: number;
  TotalAsistenciaRide: number;
  TotalAsistenciaTrain: number;
}
export interface HistoriaReserva {  
  NPK_ReservaClase : number;
  NPK_CalendarioClase: number;
  NFK_Instructor: number;
  Instructor: string;
  Fecha: string;
  Clase: string;
  NFK_Semana: number;
  NFK_Clase: number;
  Dia: string;
  PuedeCancelar: number;
  HoraParaCancelar: string;
  Asistencia: number;
  SalonLugar: string;
}
export interface ReservasPWHHoyView {  
  NPK_Calendario : number;
  NPK_CalendarioClase: number;
  NFK_Instructor: number;
  Instructor: string;
  Fecha: string;
  Clase: string;
  FechaClase: string;
  Color: string;
  Dia: string;
  CantLugares: number;
  CantLugaresSeparados: number;
  CantLugaresAsistencia: number;
  Fotografia: string;
  NFK_Clase: number;
  NFK_Semana: number;
  NFK_InstructorAdjunto: number;
  Actividad: string;
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
export interface AsistenciaView {  
  NPK_ReservaClase : number;
  NFK_Usuario: number;
  NFK_Salon: number;
  NFK_SalonLugar: number;
  Asistencia: number;
  Cliente: string;
  Salon: string;
  SalonLugar: string;
}
export interface DetalleVentaView {  
  NPK_Venta : number;
  NFK_Paquete: number;
  Paquete: string;
  CantidadClases: number;
  CantClasesAsistidas: number;
  CantClasesReserva: number;
  CantClasesDisponibles: number;
  CantClasesVencidas: number;
}
export interface DetalleVentaReservasView {  
  Asistencia : string;
  Fecha: string;
  Hora: string;
  Instructor: string;
  Salon: string;
  SalonLugar: string;
  Fotografia: string;
}
export interface RespuestaView {  
  NPK_Respuesta : number;
  Error: number;
  Respuesta: string;
  DescError: string;
}
export interface ReservaDashboardView {  
  NPK_ReservaClase : number;
  Cliente: string;
  NFK_Salon: number;
  Salon: string;
  NFK_SalonLugar: number;
  SalonLugar: string;
  Asistencia: number;
  Instructor: string;
  Fecha: string;
  Clase: string;
  FechaClase: string;
  Color: string;
  Dia: string;
  Fotografia: string;
  
}
export interface vwVentaPaqueteAdmin {
  NFK_Usuario: number;
  NFK_Paquete: number;
  Tarjeta: string;
  NumeroAutorizacion: string;
  CreadoPor: number;


}
export interface UsuarioForm {
	NPK_Usuario: number;
	Nombre: string;
	Apellidos: string;
	Telefono: string;
	FechaNacimiento: string;
	Correo: string;
}
export interface CambioCalendarioClaseForm {
  NPK_CalendarioClase: number;
  NFK_Instructor: number;
  Actividad: string;
  NFK_InstructorAdjunto: number;
}