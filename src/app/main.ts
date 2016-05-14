import { Component, Inject } from '@angular/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';


@Component({
  selector: 'main-app',
  providers: [],
  pipes: [],
  directives: [ ROUTER_DIRECTIVES],
  templateUrl: 'app/main.html'
})
@RouteConfig([
  { path: '/',	         component: Home,        name: 'Home', useAsDefault: true },
])

export class MainApp {
}
