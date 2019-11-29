import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarInstructorComponent } from './CambiarInstructor.component';

const routes: Routes = [
  {
    path: '',
    component: CambiarInstructorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CambiarInstructorRoutingModule {
}
