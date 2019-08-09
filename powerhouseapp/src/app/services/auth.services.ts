import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/mergeMap';
import { Observable, BehaviorSubject, pipe } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { from } from 'rxjs/observable/from';
import { APP_CONFIG, AppConfig } from "../app.config";
import { HttpClient } from '@angular/common/http';

const ACCOUNT_LIST = "auth:account:list";
const CURRENT_ACCOUNT = "auth:account:current";

@Injectable({
    providedIn: 'root'
  })
export class AuthService {
    
    constructor(
        
        private httpClient : HttpClient,
        @Inject(APP_CONFIG) private config: AppConfig,) {
        
    }

    login(email : string,password:string){
        let loginForm = {
            username : email,
            password : password,
            
        }
        console.log(loginForm);
        return this.httpClient.post<Account>(`${this.config.apiEndpoint}/v1/auth/login`,loginForm)
        
    }
    
    
    getAccount() : Usuario{
        return JSON.parse(localStorage.getItem(CURRENT_ACCOUNT));
    }

    public setAccount(acc: Usuario){
        return localStorage.setItem(CURRENT_ACCOUNT,JSON.stringify(acc))
    }

    

    logout(){
        localStorage.clear();
    }

    letRegistro(registro) {
        return this.httpClient.post<Usuario>(`${this.config.apiEndpoint}/v1/auth/Register`, registro);
    }
    UpdateProfile(profile) {
        return this.httpClient.post<Usuario>(`${this.config.apiEndpoint}/v1/auth/UpdateProfile`, profile);
    }
    getExistsUser(email : string,password:string) {
        let loginForm = {
            username : email,
            password : password,            
        }
        return this.httpClient.post<Respuesta>(`${this.config.apiEndpoint}/v1/auth/ValidateExistsUser`, loginForm);
    }
    getUser(email : string,password:string) {
        let loginForm = {
            username : email,
            password : password,            
        }
        return this.httpClient.post<UsuarioForm>(`${this.config.apiEndpoint}/v1/auth/GetUser`, loginForm);
    }

}

export interface UsuarioForm {
    NPK_Usuario : number
    Nombre : string
    Apellidos : string
    Usuario : string
    Contrasena : string
    Telefono : string
    FechaNacimiento : string
    Genero : string
    ContactoEmergencia : string
    TelefonoContacto : string
    BikeSetupAlturaAsiento : string
    BikeSetupDistanciaAsiento : string
    BikeSetupDistanciaManubrio : string
    BikeSetupAlturaManubrio : string
    TallaZapato : string
    QuieroOfertas : number
    Activo : number
}

interface LoginForm {
    username: string;
    password: string;   
  }

  
export interface Account {
    NPK_Usuario: number,
    Nombre: string,
    Apellidos: string,
    Usuario: string,
    Token: string,
    AnioInicio: number,
    CantidadClasesTomadas : number
  }
  export interface Usuario {
    NPK_Usuario: number,
    Nombre: string,
    Apellidos: string,
    Usuario: string,
    Token: string,
    AnioInicio: number,
    CantidadClasesTomadas : number
  }
  export interface RegisterForm {
    NPK_Usuario: number,
    Nombre : string,
    Apellidos : string,
    Usuario : string,
    Contrasena : string,
    ContactoEmergencia : string,
    TelefonoContacto : string,
    QuieroOfertas : number
  }
  export interface Respuesta {
    NPK_Respuesta : number,
    Respuesta : string,
    DescError : string,
    Error : number
  }