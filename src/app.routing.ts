import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './app/components/home/home';
import { About } from './app/components/about/about';

const appRoutes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
