import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { MDL } from '../shared/mdl';
import { Loader } from '../shared/loader';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: [ 'app/components/shared/css/style.css' ],
  providers: [],
  directives: [ ROUTER_DIRECTIVES, MDL, Loader ],
  pipes: []
})
export class Home {
  constructor() {}
  ngOnInit() {}
}
