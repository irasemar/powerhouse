import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import {SliderComponent} from './slider/slider.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {UpcomingComponent} from './upcoming/upcoming.component';
import {HistoryComponent} from './history/history.component';
import {HistoryPagosComponent} from './historypagos/historypagos.component';
import {AwardsComponent} from './awards/awards.component';
import {HiitComponent} from './hiit/hiit.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ClassComponent } from './class/class.component';
import { CartComponent } from './cart/cart.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { StudioComponent } from './studio/studio.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { AvisoPrivacidadComponent } from './avisoprivacidad/avisoprivacidad.component';
import { HiitCalendarComponent } from './hiit-calendar/hiit-calendar.component';
import { NewComponent } from './new/new.component';
import { ClassTrainComponent } from './class-train/class-train.component';

const routes: Routes = [
  { path: '', redirectTo: '/home',pathMatch: 'full'},
  { path: 'home',      component: HomeComponent,pathMatch: 'full' },
  { path: 'faq',      component: FaqComponent,pathMatch: 'full' },
  { path: 'avisoprivacidad',      component: AvisoPrivacidadComponent,pathMatch: 'full' },
  { path: 'slider',      component: SliderComponent },
  { path: 'registro',      component: RegisterComponent },
  { path: 'perfil',      component: ProfileComponent },
  { path: 'proximas-clases',      component: UpcomingComponent },
  { path: 'historial',      component: HistoryComponent },
  { path: 'historialPagos',      component: HistoryPagosComponent },
  { path: 'awards',      component: AwardsComponent },
  { path: 'hiit-calendar',      component: HiitCalendarComponent, runGuardsAndResolvers: 'always', },
  { path: 'indoor-calendar',      component: CalendarComponent, runGuardsAndResolvers: 'always', },
  { path: 'clase/:NFK_Semana/:NFK_Clase/:Dia/:NPK_CalendarioClase',      component: ClassComponent },
  { path: 'cart',      component: CartComponent },
  { path: 'team',      component: InstructorsComponent },  
  { path: 'team-detail/:id',      component: TeamDetailComponent },
  { path: 'estudio',      component: StudioComponent },
  { path: 'nuevo',      component: NewComponent },
  { path: 'comprar-clase',      component: HiitComponent },
  { path: 'train/:NFK_Semana/:NFK_Clase/:Dia/:NPK_CalendarioClase',      component: ClassTrainComponent }
 






];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
