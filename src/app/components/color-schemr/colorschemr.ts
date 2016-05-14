import { Component, Inject } from '@angular/core';
import { NgStyle } from '@angular/common';

import { ColorService } from '../../services/ColorService';
import { StripService } from '../../services/StripService';

import { Defaults } from '../../constants/Defaults';

@Component({
  selector: 'app',
  templateUrl: 'app/components/color-schemr/color-schemr.html',
  styleUrls: [
    'app/components/shared/css/style.css',
    'app/components/color-schemr/color-schemr.css'
  ],
  providers: [ ColorService, StripService ],
  directives: [ Header, Footer ],
  pipes: []
})
export class ColorSchemr {
  rangeStartColor: Array<String> = [];
  rangeEndColor: Array<String> = [];
  colorStrips: Array<Object> = [];
  hash: string;

  constructor(
    public colorService: ColorService,
    public stripService: StripService
    // @Inject(RouteParams) params: RouteParams
  ) {
    // this.hash = params.get('hash');
  };

  ngOnInit() {
    this.init();
  }
  init() {
    let stripsLength = Defaults.STRIP_INIT_COUNT;
    this.colorStrips = this.stripService.init(stripsLength);
    // console.log(this.colorStrips);
  };

  updateStripSettings () {
    this.stripService.updateColor();
  };

  eventHandler (ev) {
    // console.log(ev, ev.keyCode, ev.keyIdentifier);
    if (ev.keyCode === 32) {
      this.updateStripSettings();
    }
  };

}
