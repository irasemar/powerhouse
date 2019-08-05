import { CommonModule,registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { UserdataComponent } from './shared/userdata/userdata.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { HistoryComponent } from './history/history.component';
import { AwardsComponent } from './awards/awards.component';
import { HiitComponent } from './hiit/hiit.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ClassComponent } from './class/class.component';
import { CartComponent } from './cart/cart.component';
import { ModalPaymentComponent } from './modal-payment/modal-payment.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamMusicComponent } from './team-music/team-music.component';
import { TeamCalendarComponent } from './team-calendar/team-calendar.component';
import { StudioComponent } from './studio/studio.component';
import { HomeComponent } from './home/home.component';
import { RidesComponent } from './rides/rides.component';
import { StudioSliderComponent } from './studio-slider/studio-slider.component';
import { APP_CONFIG, AppConfigImpl } from './app.config';
import { TokenInterceptor } from '../app/auth/token.interceptor';
import { LoaderInterceptor } from './auth/loading-http.interceptor';
import localemx from '@angular/common/locales/es-MX';

import {BrowserAnimationsModule,NoopAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HiitCalendarComponent } from './hiit-calendar/hiit-calendar.component';
import { NewComponent } from './new/new.component';
import { ClassTrainComponent } from './class-train/class-train.component';


registerLocaleData(localemx);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    RegisterComponent,
    ProfileComponent,
    SidenavComponent,
    UserdataComponent,
    UpcomingComponent,
    HistoryComponent,
    AwardsComponent,
    HiitComponent,
    CalendarComponent,
    ClassComponent,
    CartComponent,
    ModalPaymentComponent,
    InstructorsComponent,
    TeamDetailComponent,
    TeamMusicComponent,
    TeamCalendarComponent,
    StudioComponent,
    HomeComponent,
    RidesComponent,
    StudioSliderComponent,
    LoginComponent,
    HiitCalendarComponent,
    NewComponent,
    ClassTrainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
  ],
  exports: [
    ModalPaymentComponent,
    LoginComponent
  ],
  entryComponents: [
    ModalPaymentComponent,
    LoginComponent
  ],
  providers: [
    /* { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }, */
    /* {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }, */
    { provide: APP_CONFIG, useValue: AppConfigImpl },
    { provide: LOCALE_ID, useValue: 'es-MX'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
