import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PlatillosComponent } from './components/productos/platillos/platillos.component';

export const routes: Routes = [
    {
        path: 'about',
        title: 'About',
        component: AboutComponent
    },
    {
        path: 'contact',
        title: 'Contact Us',
        component: ContactComponent
    },
    {
        path: 'home',
        title: 'Home',
        component: InicioComponent
    },
    {
        path: 'platillos',
        title: 'Platos',
        component: PlatillosComponent
    }
];
