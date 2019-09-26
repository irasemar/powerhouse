import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken("app.config");

export interface AppConfig {
    apiEndpoint: string;
}

export const AppConfigImpl: AppConfig = {    
    //apiEndpoint : "http://localhost:59228/api",
    
    apiEndpoint : "https://mypowerhouse.mx/service/api",
};