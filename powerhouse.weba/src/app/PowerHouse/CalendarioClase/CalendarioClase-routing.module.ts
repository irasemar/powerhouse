import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioClaseComponent } from './CalendarioClase.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarioClaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarioClaseRoutingModule {
}
