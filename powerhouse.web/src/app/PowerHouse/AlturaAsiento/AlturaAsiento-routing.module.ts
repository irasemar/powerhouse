import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlturaAsientoComponent } from './AlturaAsiento.component';

const routes: Routes = [
  {
    path: '',
    component: AlturaAsientoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlturaAsientoRoutingModule {
}
