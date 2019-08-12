import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from "@angular/http";

import { APP_CONFIG, AppConfig } from "../app.config";
import { AuthService, Account } from "./auth.services";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  constructor(public http: HttpClient,   
              public auth: AuthService,
    @Inject(APP_CONFIG) private config: AppConfig,
  ) { 
    
  }
 
}