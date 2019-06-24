import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  exports: [
    ModalPaymentComponent
  ],
  entryComponents: [
    ModalPaymentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
