import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken("app.config");

export interface AppConfig {
    apiEndpoint: string;
    apiEndpointImages: string;
    apiEndpointImagesStores: string;
    apiEndpointImagesUsers: string;
}

export const AppConfigImpl: AppConfig = {    
    //apiEndpoint : "http://localhost:59228/api",
    apiEndpoint : "http://74.208.86.247/pwhapi/api",
    apiEndpointImages: "http://74.208.86.247/AttWS/images/slide",
    apiEndpointImagesStores: "http://74.208.86.247/AttWS/images/stores",
    apiEndpointImagesUsers : "http://74.208.86.247/AttWS/images/users",
};