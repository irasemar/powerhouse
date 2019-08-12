import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistanciaAsientoComponent } from './DistanciaAsiento.component';

const routes: Routes = [
  {
    path: '',
    component: DistanciaAsientoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistanciaAsientoRoutingModule {
}
