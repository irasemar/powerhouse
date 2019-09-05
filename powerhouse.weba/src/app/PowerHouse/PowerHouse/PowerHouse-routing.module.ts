import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PowerHouseComponent } from './PowerHouse.component';

const routes: Routes = [
  {
    path: '',
    component: PowerHouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PowerHouseRoutingModule {
}
