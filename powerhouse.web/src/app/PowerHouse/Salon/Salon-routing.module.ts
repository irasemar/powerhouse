import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalonComponent } from './Salon.component';

const routes: Routes = [
  {
    path: '',
    component: SalonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalonRoutingModule {
}
