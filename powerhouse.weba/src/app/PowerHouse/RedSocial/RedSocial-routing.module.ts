import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedSocialComponent } from './RedSocial.component';

const routes: Routes = [
  {
    path: '',
    component: RedSocialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedSocialRoutingModule {
}
