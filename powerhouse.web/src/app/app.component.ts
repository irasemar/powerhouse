import { Component } from '@angular/core';
import { SidenavItem } from './core/layout/sidenav/sidenav-item/sidenav-item.interface';
import { SidenavService } from './core/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(sidenavService: SidenavService) {
    const menu: SidenavItem[] = [];

     menu.push({
      name: 'APPS',
      position: 5,
      type: 'subheading',
      customClass: 'first-subheading'
    });

    menu.push({
      name: 'Dashboard',
      routeOrFunction: '/dashboard',
      icon: 'dashboard',
      position: 10,
      pathMatchExact: true
    });
    /*
    menu.push({
      name: 'Inbox',
      routeOrFunction: '/apps/inbox',
      icon: 'inbox',
      position: 15,
      badge: '22',
      badgeColor: '#673ab7'
    });

    menu.push({
      name: 'Chat',
      routeOrFunction: '/apps/chat',
      icon: 'chat',
      position: 20,
      badge: '14',
      badgeColor: '#009688'
    });

    menu.push({
      name: 'Calendar',
      routeOrFunction: '/apps/calendar',
      icon: 'date_range',
      position: 25
    });

    menu.push({
      name: 'All-In-One Table',
      routeOrFunction: '/tables/all-in-one-table',
      icon: 'assignment',
      position: 30
    });

    menu.push({
      name: 'USER INTERFACE',
      type: 'subheading',
      position: 35
    });
    
    menu.push({
      name: 'Components',
      routeOrFunction: '/components',
      icon: 'layers',
      position: 40
    });

    const formElements = {
      name: 'Form Elements',
      routeOrFunction: '/forms/form-elements',
      position: 10
    };

    const formWizard = {
      name: 'Form Wizard',
      routeOrFunction: '/forms/form-wizard',
      position: 15
    };

    menu.push({
      name: 'Forms',
      icon: 'description',
      position: 45,
      subItems: [
        formElements,
        formWizard
      ]
    });

    const simpleTable = {
      name: 'Simple Table',
      routeOrFunction: '/tables/simple-table',
      position: 10
    };

    const allInOneTable = {
      name: 'All-In-One Table',
      routeOrFunction: '/tables/all-in-one-table',
      position: 15
    };

    menu.push({
      name: 'Tables',
      icon: 'format_line_spacing',
      position: 50,
      subItems: [
        simpleTable,
        allInOneTable
      ]
    });

    menu.push({
      name: 'Drag & Drop',
      routeOrFunction: '/drag-and-drop',
      icon: 'mouse',
      position: 55
    });

    menu.push({
      name: 'WYSIWYG Editor',
      routeOrFunction: '/editor',
      icon: 'format_shapes',
      position: 60
    });

    menu.push({
      name: 'PAGES',
      type: 'subheading',
      position: 65
    });

    const googleMaps = {
      name: 'Google Maps',
      routeOrFunction: '/maps/google-maps',
      position: 5
    };

    menu.push({
      name: 'Maps',
      icon: 'map',
      position: 70,
      subItems: [
        googleMaps
      ],
      badge: '3',
      badgeColor: '#4CAF50'
    });
    
    menu.push({
      name: 'Material Icons',
      routeOrFunction: '/icons',
      icon: 'grade',
      position: 75
    });
    */
/*
    const login = {
      name: 'Login Page',
      routeOrFunction: '/login',
      position: 5
    };

    const register = {
      name: 'Register Page',
      routeOrFunction: '/register',
      position: 10
    };

    const forgotPassword = {
      name: 'Forgot Password',
      routeOrFunction: '/forgot-password',
      position: 15
    };

    menu.push({
      name: 'Custom Pages',
      icon: 'web',
      position: 80,
      subItems: [
        login,
        register,
        forgotPassword
      ]
    });

    const level5 = {
      name: 'Level 5',
      routeOrFunction: '/level1/level2/level3/level4/level5'
    };

    const level4 = {
      name: 'Level 4',
      subItems: [level5]
    };

    const level3 = {
      name: 'Level 3',
      subItems: [level4]
    };

    const level2 = {
      name: 'Level 2',
      subItems: [level3]
    };

    const level1 = {
      name: 'Level 1',
      subItems: [level2]
    };

    menu.push({
      name: 'Multi-Level Menu',
      icon: 'menu',
      position: 85,
      subItems: [level1]
    }); */
    const NIVEL1CATGenero = {
      name: 'Genero',
      position: 1,
      routeOrFunction: 'Genero',
    };
    const NIVEL1CATAlturaAsiento = {
      name: 'Altura de Asiento',
      position: 2,
      routeOrFunction: 'AlturaAsiento',
    };
    const NIVEL1CATDistanciaAsiento = {
      name: 'Distancia de Asiento',
      position: 3,
      routeOrFunction: 'DistanciaAsiento',
    };
    const NIVEL1CATAlturaManubrio = {
      name: 'Altura de Manubrio',
      position: 4,
      routeOrFunction: 'AlturaManubrio',
    };
    const NIVEL1CATTallaZapato = {
      name: 'Talla de Zapato',
      position: 5,
      routeOrFunction: 'TallaZapato',
    };
    const NIVEL1CATClase = {
      name: 'Clase',
      position: 6,
      routeOrFunction: 'Clase',
    };
    const NIVEL1CATInstructor = {
      name: 'Instructor',
      position: 7,
      routeOrFunction: 'Instructor',
    };
    const NIVEL1CATPaquete = {
      name: 'Paquete',
      position: 8,
      routeOrFunction: 'Paquete',
    };
    const NIVEL1CATPowerHouse = {
      name: 'Sucursal',
      position: 9,
      routeOrFunction: 'PowerHouse',
    };
    const NIVEL1CATRedSocial = {
      name: 'Redes Sociales',
      position: 10,
      routeOrFunction: 'RedSocial',
    };
    const NIVEL1CATPowerHouseRedSocial = {
      name: 'Redes Sociales de PowerHouse',
      position: 11,
      routeOrFunction: 'PowerHouseRedSocial',
    };
    const NIVEL1CATSalon = {
      name: 'Salones',
      position: 12,
      routeOrFunction: 'Salon',
    };
    const NIVEL1CATSalonLugar = {
      name: 'Lugares en Salon',
      position: 13,
      routeOrFunction: 'SalonLugar',
    };
    const NIVEL1CATALOGOS = {
      name: 'CATALOGOS',
      icon: 'menu',
      position: 1,
      subItems: [
        ]
    };
    menu.push({
      name: 'CONFIGURACION',
      icon: 'settings',
      position: 1,
      subItems: [NIVEL1CATGenero, NIVEL1CATAlturaAsiento, NIVEL1CATDistanciaAsiento, NIVEL1CATAlturaManubrio, NIVEL1CATTallaZapato, NIVEL1CATClase, 
        NIVEL1CATInstructor, NIVEL1CATPaquete, NIVEL1CATPowerHouse, NIVEL1CATRedSocial, NIVEL1CATPowerHouseRedSocial, NIVEL1CATSalon, NIVEL1CATSalonLugar]
    }/* ,
     {
      name: 'MANTENIMIENTO',
      icon: 'build',
      position: 2,
      subItems: [NIVELMANTENIMIENTO]
    }, */
    );

    // Send all created Items to SidenavService
    menu.forEach(item => sidenavService.addItem(item));
  }
}
