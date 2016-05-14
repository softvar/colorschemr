import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { MDL } from '../shared/mdl';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-header',
  templateUrl: 'app/components/shared/header.html',
  styleUrls: [ 'app/components/shared/css/style.css' ],
  providers: [],
  directives: [ MDL, ROUTER_DIRECTIVES ],
  pipes: []
})
export class Header {
  constructor() {}
  ngOnInit() {}
}
