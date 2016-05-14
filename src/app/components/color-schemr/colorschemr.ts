import { Component, Inject } from '@angular/core';
import { NgStyle } from '@angular/common';

import { Header } from '../shared/header';
import { Footer } from '../shared/footer';

import { ColorService } from '../../services/ColorService';
import { StripService } from '../../services/StripService';

import { Defaults } from '../../constants/Defaults';
import {QuoteService} from "../../services/QuoteService";

@Component({
  selector: 'app',
  templateUrl: 'app/components/color-schemr/color-schemr.html',
  styleUrls: [
    'app/components/shared/css/style.css',
    'app/components/color-schemr/color-schemr.css'
  ],
  providers: [ ColorService, StripService, QuoteService ],
  directives: [ Header, Footer ],
  pipes: []
})
export class ColorSchemr {
  rangeStartColor: Array<String> = [];
  rangeEndColor: Array<String> = [];
  colorStrips: Array<Object> = [];
  hash: string;

  quote:string;

  constructor(
    public colorService: ColorService,
    public stripService: StripService,
    public quoteService: QuoteService
    // @Inject(RouteParams) params: RouteParams
  ) {
    // this.hash = params.get('hash');
  };

  ngOnInit() {
    this.init();
  }
  init() {
    let stripsLength = Defaults.STRIP_INIT_COUNT;
    this.getQuote();
    this.colorStrips = this.stripService.init(stripsLength);
    // console.log(this.colorStrips);
  };

  updateStripSettings () {
    this.stripService.updateColor();
    this.getQuote();
  };

  eventHandler (ev) {
    // console.log(ev, ev.keyCode, ev.keyIdentifier);
    if (ev.keyCode === 32) {
      this.updateStripSettings();
    }
  };
  onStripClick (ev, index, strip) {
    strip.isLocked = !strip.isLocked;
  };
  addStrip (ev, isInFront) {
    if (this.colorStrips && this.colorStrips.length >= 10) {
        // TODO: show snackbar, notifying user
        return;
    }
    this.colorStrips = this.stripService.addStrip(isInFront);
  };

  removeStrip (ev, index, strip) {
    ev.preventDefault();
    this.colorStrips.splice(index, 1);
  };

  onOpacityChange(index, strip) {
    // ev.preventDefault();
    // ev.stopPropagation();
    this.stripService.updateOpacity(strip, index);
  }

  getQuote() {
    this.quoteService.getQuote().subscribe(function (quote) {
      this.quote = quote;
    });
  }

}
