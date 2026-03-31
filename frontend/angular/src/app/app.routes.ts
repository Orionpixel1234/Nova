import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./page/home/home').then(m => m.Home) },
    { path: 'login', loadComponent: () => import('./page/login/login').then(m => m.Login) },
    { path: 'signup', loadComponent: () => import('./page/signup/signup').then(m => m.Signup) },
];
