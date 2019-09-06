import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlturaManubrioComponent } from './AlturaManubrio.component';

const routes: Routes = [
  {
    path: '',
    component: AlturaManubrioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlturaManubrioRoutingModule {
}
