import { CommonModule,registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LoaderService } from './services/loader.service';

import 'hammerjs'; // Needed for Touch functionality of Material Components
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { APP_CONFIG, AppConfigImpl } from './app.config';
import { TokenInterceptor } from '../app/auth/token.interceptor';
import { LoaderInterceptor } from './auth/loading-http.interceptor';
import { LoaderComponent } from './loader.component';

import { NgbModule,NgbCarouselConfig, NgbCarousel, NgbCalendar, NgbDatepicker, NgbDatepickerConfig,NgbDate,NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {MatExpansionModule} from '@angular/material/expansion';
import { MainPipe } from './pipes/main-pipe.module';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { NgxUpperCaseDirectiveModule } from 'ngx-upper-case-directive';
import { ExcelService } from './services/excel.services';

import localemx from '@angular/common/locales/es-MX';
registerLocaleData(localemx);

@NgModule({
  imports: [
    // Angular Core Module // Don't remove!
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MainPipe,
    // Fury Core Modules
    CoreModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserModule,
    NgxMaterialTimepickerModule,
    NgxMatSelectSearchModule,
    NgxMaterialTimepickerModule,
    NgxUpperCaseDirectiveModule,
    // Register a Service Worker (optional)
    /*
    ServiceWorkerModule.register('app/ngsw-worker.js', { enabled: environment.production }),

    ServiceWorkerModule.register('app/ngsw-worker.js', { enabled: environment.production })
    */
  ],
  declarations: [AppComponent,LoaderComponent,],
  
  exports: [],
  bootstrap: [AppComponent],
  providers: [LoaderService,ExcelService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    { provide: APP_CONFIG, useValue: AppConfigImpl },
    { provide: LOCALE_ID, useValue: 'es-MX'},
  ]
})
export class AppModule {
}
