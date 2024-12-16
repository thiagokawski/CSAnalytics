import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error-404/error-404.component';

export const routes: Routes = [
    {  
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        component: Error404Component
    }
];
