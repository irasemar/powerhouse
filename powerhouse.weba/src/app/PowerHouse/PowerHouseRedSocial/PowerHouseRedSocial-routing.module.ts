import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PowerHouseRedSocialComponent } from './PowerHouseRedSocial.component';

const routes: Routes = [
  {
    path: '',
    component: PowerHouseRedSocialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PowerHouseRedSocialRoutingModule {
}
