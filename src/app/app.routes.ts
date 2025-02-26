import { Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeScreenComponent,
    },
    {
        path: 'button',
        component: ButtonComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
