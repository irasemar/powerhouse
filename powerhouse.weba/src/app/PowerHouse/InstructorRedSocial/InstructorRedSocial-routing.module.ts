import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorRedSocialComponent } from './InstructorRedSocial.component';

const routes: Routes = [
  {
    path: '',
    component: InstructorRedSocialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRedSocialRoutingModule {
}
