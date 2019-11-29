import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteUsuarioInstructorComponent } from './ReporteUsuarioInstructor.component';

const routes: Routes = [
  {
    path: '',
    component: ReporteUsuarioInstructorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteUsuarioInstructorRoutingModule {
}
