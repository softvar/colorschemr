import { Component, Inject, enableProdMode } from '@angular/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { Home } from './components/home/home';
import { About } from './components/about/about';
import { ColorSchemr } from './components/color-schemr/colorschemr';

@Component({
  selector: 'main-app',
  providers: [],
  pipes: [],
  directives: [ ROUTER_DIRECTIVES],
  templateUrl: 'app/main.html'
})
@RouteConfig([
  { path: '/',           component: Home,        name: 'Home', useAsDefault: true },
  { path: '/app',        component: ColorSchemr, name: 'ColorSchemr' },
  { path: '/app/:id',    component: ColorSchemr },
  { path: '/about',      component: About,       name: 'About' }
])

export class MainApp {

}

enableProdMode();
