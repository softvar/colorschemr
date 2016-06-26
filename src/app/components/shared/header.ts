import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { MDL } from '../shared/mdl';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-header',
  templateUrl: 'app/components/shared/header.html',
  styleUrls: [
    'app/assets/styles/responsive.css',
    'app/components/shared/css/style.css'
    ],
  providers: [],
  directives: [ MDL, ROUTER_DIRECTIVES ],
  pipes: []
})
export class Header {
  @Input() isAboutPage;
  texts: any = {};
  constructor () {
    this.init();
  };
  init () {
    this.updateText();
  };
  updateText () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      .test(navigator.userAgent)) {
      this.texts.changePalettes = 'Swipe to generate colors';
    } else {
      this.texts.changePalettes = `Hit Spacebar to generate palettes,
      num keys to update strip color`;
    }
  };
}
