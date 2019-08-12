import { Injectable, Inject  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from "../app.config";
import { AuthService, Account } from "./auth.services";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  
  constructor(public http: HttpClient,   
    public auth: AuthService,   
     
    @Inject(APP_CONFIG) private config: AppConfig,
  ) { 
    
  }
  getCustomers() {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);

    return this.http.get<CustomerView[]>(`${this.config.apiEndpoint}/v1/customer/list/1`, { headers: headers })
  }
  letCustomers(customer) {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    console.log("letCustomers");
    console.log(customer);
    return this.http.post<CustomerView>(`${this.config.apiEndpoint}/v1/customer`,customer, { headers: headers })
  }

  getCustomersContacts(pNFK_Customer) {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);

    return this.http.get<CustomerContactView[]>(`${this.config.apiEndpoint}/v1/customer/${pNFK_Customer}/contact`, { headers: headers })
  }
  letCustomersContacts(customer,pNFK_Customer) {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    console.log("letCustomers");
    console.log(customer);
    return this.http.post<CustomerView>(`${this.config.apiEndpoint}/v1/customer/${pNFK_Customer}/contact`,customer, { headers: headers })
  }
  getSalesOrders(pNFK_Customer) {

    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);

    return this.http.get<SalesOrderView[]>(`${this.config.apiEndpoint}/v1/customer/${pNFK_Customer}/saleorder`, { headers: headers })
  }
  letSalesOrders(customer,pNFK_Customer) {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    console.log("letSalesOrders");
    console.log(customer);
    return this.http.post<CustomerView>(`${this.config.apiEndpoint}/v1/customer/${pNFK_Customer}/saleorder`,customer, { headers: headers })
  }
  getSalesOrdersEquipmet(pNFK_Customer,pNPK_SaleOrder) {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);

    return this.http.get<SalesOrderEquipmentView[]>(`${this.config.apiEndpoint}/v1/customer/${pNFK_Customer}/saleorder/${pNPK_SaleOrder}/equip`, { headers: headers })
  }
  letSalesOrdersEquipmet(customer,pNFK_Customer,pNPK_SaleOrder) {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    console.log("letSalesOrders");
    console.log(customer);
    return this.http.post<CustomerView>(`${this.config.apiEndpoint}/v1/customer/${pNFK_Customer}/saleorder/${pNPK_SaleOrder}/equip`,customer, { headers: headers })
  }
  getSalesOrdersAccesory(pNFK_Customer,pNPK_SaleOrder) {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);

    return this.http.get<SalesOrderAccesoryView[]>(`${this.config.apiEndpoint}/v1/customer/${pNFK_Customer}/saleorder/${pNPK_SaleOrder}/accesory`, { headers: headers })
  }
  letSalesOrdersAccesory(customer,pNFK_Customer,pNPK_SaleOrder) {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    console.log("letSalesOrders");
    console.log(customer);
    return this.http.post<CustomerView>(`${this.config.apiEndpoint}/v1/customer/${pNFK_Customer}/saleorder/${pNPK_SaleOrder}/accesory`,customer, { headers: headers })
  }
  getSalesOrdersAddOns(pNFK_Customer,pNPK_SaleOrder) {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);

    return this.http.get<SalesOrderAddOnView[]>(`${this.config.apiEndpoint}/v1/customer/${pNFK_Customer}/saleorder/${pNPK_SaleOrder}/addon`, { headers: headers })
  }
  letSalesOrdersAddOns(customer,pNFK_Customer,pNPK_SaleOrder) {
    let acc = this.auth.getAccount();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${acc.Token}`);
    console.log("letSalesOrders");
    console.log(customer);
    return this.http.post<CustomerView>(`${this.config.apiEndpoint}/v1/customer/${pNFK_Customer}/saleorder/${pNPK_SaleOrder}/addon`,customer, { headers: headers })
  }
  
}
export interface CustomerForm {
  NPK_Customer : number,
  NFK_CustomerType : number,
  Account : string,
  CompanyName : string,
  FirstName : string,
  LastFatherName : string,
  LastMotherName : number,
  Birthdate : true,
  NFK_IdentificationType : number,
  NumberIdentification : string,
  RFC : string,
  NFK_IncomeRange : number,
  Other_IncomeRange : string,
  Email : number,
  
} 
export interface CustomerView extends CustomerForm {  
  Name : string,
  CustomerType: string,
  IdentificationType: string,
  IncomeRange: string,
  Active: number,
} 

export interface CustomerContactForm {
  NPK_Contact : number,
  NFK_Customer : number,
  DateContact: string,
  Comments : string,
  ContactAccount : string,
  Active : number
  
} 
export interface CustomerContactView extends CustomerContactForm {  
  Account : string,
  CompanyName: string,
  FirstName: string,
  LastMotherName: string,
  LastFatherName: string,
} 
export interface SalesOrderForm {
  NPK_SaleOrder : number;
  NFK_Contact : number;
  NFK_Store: string;
  NFK_Seller : string;
  Active : number;
  NFK_Customer : number;  
  SaleDate : string;
  NFK_SaleType : number;
  
} 
export interface SalesOrderView extends SalesOrderForm {  
  DateContact : string;
  AccountContact: string;
  NumberStore: string;
  NameStore: string;
  NumberSeller: string;
  SellerName : string;
  TypeSale:string;
  
} 
export interface SalesOrderEquipmentForm {
  NPK_SaleOrderEquipment : number;
  NFK_SaleOrder: number;
  SaleDate : string;
  Account : string;
  Folio : string;
  ID_ORDER : string;
  NFK_PropertyType: number;  
  NFK_CompanyAccount: number;  
  ContractDate : string;
  NFK_ContractType: number;  
  Activationdate : string;
  NFK_ContractPlan : number;  
  NFK_Equipment : number;  
  MDM : string;
  IMEINumber : string;
  SIMNumber : string;
  Active: number;
  Price : number;
  NFK_Term : number;
  Renta : number;
  
} 
export interface SalesOrderEquipmentView extends SalesOrderEquipmentForm {  
  PropertyType : string;
  CompanyAccount : string;
  ContractType : string;
  ContractPlan : string;
  Equipment : string;
  Term : string;
} 
export interface SalesOrderAccesoryForm {
  NPK_SaleOrderAccessory : number;
  NFK_SaleOrder : number;
  NFK_Accessory : number;  
  SaleDate : string;
  Quantity : number;
  Price : number;
  Folio : string;
  ID_ORDER : string;
  ContractDate : string;
  Active : number;
  
} 
export interface SalesOrderAccesoryView extends SalesOrderAccesoryForm {  
  Accessory : string;
}
export interface SalesOrderAddOnForm {
  NPK_SaleOrderAddOn : number;
  NFK_SaleOrder : number;
  NFK_AddOn : number;  
  SaleDate : string;
  Quantity : number;
  Price : number;
  Folio : string;
  ID_ORDER : string;
  ContractDate : string;
  Active : number;
  
} 
export interface SalesOrderAddOnView extends SalesOrderAddOnForm {  
  AddON : string;
}  
export interface TiendaView {  
  TiendaID : string;
  NombreTienda : string;
  DireccionTienda : string;
}  
