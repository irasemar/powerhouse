import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/pages/custom-pages/login/login.module#LoginModule',
  },
  {
    path: 'register',
    loadChildren: 'app/pages/custom-pages/register/register.module#RegisterModule',
  },
  {
    path: 'forgot-password',
    loadChildren: 'app/pages/custom-pages/forgot-password/forgot-password.module#ForgotPasswordModule',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule',
        pathMatch: 'full'
      },
      {
        path: 'apps/inbox',
        loadChildren: 'app/pages/apps/inbox/inbox.module#InboxModule',
      },
      {
        path: 'apps/calendar',
        loadChildren: 'app/pages/apps/calendar/calendar.module#CalendarAppModule',
      },
      {
        path: 'apps/chat',
        loadChildren: 'app/pages/apps/chat/chat.module#ChatModule',
      },
      {
        path: 'components',
        loadChildren: 'app/pages/components/components.module#ComponentsModule',
      },
      {
        path: 'forms/form-elements',
        loadChildren: 'app/pages/forms/form-elements/form-elements.module#FormElementsModule',
      },
      {
        path: 'forms/form-wizard',
        loadChildren: 'app/pages/forms/form-wizard/form-wizard.module#FormWizardModule',
      },
      {
        path: 'icons',
        loadChildren: 'app/pages/icons/icons.module#IconsModule',
      },
      {
        path: 'level1/level2/level3/level4/level5',
        loadChildren: 'app/pages/level5/level5.module#Level5Module',
      },
      {
        path: 'maps/google-maps',
        loadChildren: 'app/pages/maps/google-maps/google-maps.module#GoogleMapsModule',
      },
      {
        path: 'tables/simple-table',
        loadChildren: 'app/pages/tables/simple-table/simple-table.module#SimpleTableModule',
      },
      {
        path: 'tables/all-in-one-table',
        loadChildren: 'app/pages/tables/all-in-one-table/all-in-one-table.module#AllInOneTableModule',
      },
      {
        path: 'drag-and-drop',
        loadChildren: 'app/pages/drag-and-drop/drag-and-drop.module#DragAndDropModule'
      },
      {
        path: 'editor',
        loadChildren: 'app/pages/editor/editor.module#EditorModule',
      },
      {
        path: 'Genero',
        loadChildren: 'app/PowerHouse/Genero/Genero.module#GeneroModule',
      },
      {
        path: 'AlturaAsiento',
        loadChildren: 'app/PowerHouse/AlturaAsiento/AlturaAsiento.module#AlturaAsientoModule',
      },
      {
        path: 'DistanciaAsiento',
        loadChildren: 'app/PowerHouse/DistanciaAsiento/DistanciaAsiento.module#DistanciaAsientoModule',
      },
      {
        path: 'AlturaManubrio',
        loadChildren: 'app/PowerHouse/AlturaManubrio/AlturaManubrio.module#AlturaManubrioModule',
      },
      {
        path: 'TallaZapato',
        loadChildren: 'app/PowerHouse/TallaZapato/TallaZapato.module#TallaZapatoModule',
      },
      {
        path: 'Clase',
        loadChildren: 'app/PowerHouse/Clase/Clase.module#ClaseModule',
      },
      {
        path: 'Instructor',
        loadChildren: 'app/PowerHouse/Instructor/Instructor.module#InstructorModule',
      },
      {
        path: 'InstructorMusica/:npk_instructor/:instructor',
        loadChildren: 'app/PowerHouse/InstructorMusica/InstructorMusica.module#InstructorMusicaModule',
      },
      {
        path: 'InstructorRedSocial/:npk_instructor/:instructor',
        loadChildren: 'app/PowerHouse/InstructorRedSocial/InstructorRedSocial.module#InstructorRedSocialModule',
      },
      {
        path: 'Paquete',
        loadChildren: 'app/PowerHouse/Paquete/Paquete.module#PaqueteModule',
      },
      {
        path: 'PowerHouse',
        loadChildren: 'app/PowerHouse/PowerHouse/PowerHouse.module#PowerHouseModule',
      },
      {
        path: 'RedSocial',
        loadChildren: 'app/PowerHouse/RedSocial/RedSocial.module#RedSocialModule',
      },
      {
        path: 'PowerHouseRedSocial',
        loadChildren: 'app/PowerHouse/PowerHouseRedSocial/PowerHouseRedSocial.module#PowerHouseRedSocialModule',
      },
      {
        path: 'Salon',
        loadChildren: 'app/PowerHouse/Salon/Salon.module#SalonModule',
      },
      {
        path: 'SalonLugar',
        loadChildren: 'app/PowerHouse/SalonLugar/SalonLugar.module#SalonLugarModule',
      },
      {
        path: 'Anios',
        loadChildren: 'app/PowerHouse/Anio/Anio.module#AnioModule',
      },
      {
        path: 'Semana',
        loadChildren: 'app/PowerHouse/Semana/Semana.module#SemanaModule',
      },
      {
        path: 'Calendario',
        loadChildren: 'app/PowerHouse/Calendario/Calendario.module#CalendarioModule',
      },
      {
        path: 'CalendarioClase/:npk_calendario/:calendario',
        loadChildren: 'app/PowerHouse/CalendarioClase/CalendarioClase.module#CalendarioClaseModule',
      },
      {
        path: 'Usuario',
        loadChildren: 'app/PowerHouse/Usuario/Usuario.module#UsuarioModule',
      },
      {
        path: 'DetalleUsuario/:npk_usuario/:usuario',
        loadChildren: 'app/PowerHouse/DetalleUsuario/DetalleUsuario.module#DetalleUsuarioModule',
      },
      {
        path: 'UsuarioEliminar',
        loadChildren: 'app/PowerHouse/UsuarioEliminar/UsuarioEliminar.module#UsuarioEliminarModule',
      },
      {
        path: 'ClasesAnteriores',
        loadChildren: 'app/PowerHouse/clasesanteriores/clasesanteriores.module#ClasesAnterioresModule',
      },
      {
        path: 'ConsultaClientesClases',
        loadChildren: 'app/PowerHouse/ReporteClasesUsuario/ReporteClasesUsuario.module#ReporteClasesUsuarioModule',
      },
      {
        path: 'ConsultaClientesInstructor',
        loadChildren: 'app/PowerHouse/ReporteUsuarioInstructor/ReporteUsuarioInstructor.module#ReporteUsuarioInstructorModule',
      },
      /* {
        path: 'ActividadMantenimiento/:npk_mantenimiento/:mantenimiento',
        loadChildren: 'app/Sit/ActividadMantenimiento/ActividadMantenimiento.module#ActividadMantenimientoModule',
      }, */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
