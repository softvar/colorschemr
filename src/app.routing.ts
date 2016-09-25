import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './app/components/home/home';
import { About } from './app/components/about/about';
import { ColorSchemr } from './app/components/color-schemr/colorschemr';

const appRoutes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'app', component: ColorSchemr }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
