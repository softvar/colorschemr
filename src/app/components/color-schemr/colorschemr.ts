import { Component, Inject } from '@angular/core';
import { NgStyle, NgIf } from '@angular/common';

import { MDL } from '../shared/mdl';
import { Header } from '../shared/header';
import { Footer } from '../shared/footer';

import { ColorService } from '../../services/ColorService';
import { StripService } from '../../services/StripService';

import { Defaults } from '../../constants/Defaults';
import { QuoteService } from '../../services/QuoteService';
import { SchemrPreviewer } from '../previewer/Previewer';
import { PreviewPipe } from '../../pipes/PreviewPipe';

import { EscapeHtmlTagsPipe } from '../../pipes/EscapeHtmlTagsPipe';
@Component({
  selector: 'app',
  templateUrl: 'app/components/color-schemr/color-schemr.html',
  styleUrls: [
    'app/components/shared/css/style.css',
    'app/components/color-schemr/color-schemr.css'
  ],
  providers: [ ColorService, StripService, QuoteService ],
  directives: [ MDL, Header, Footer, SchemrPreviewer ],
  pipes: [ EscapeHtmlTagsPipe, PreviewPipe ]
})
export class ColorSchemr {
  rangeRGBColor: Array<Object> = [];
  // TS Error: Property 'isLocked' does not exist on type 'Object'.
  // http://stackoverflow.com/questions/18083389/
  // ignore-typescript-errors-property-does-not-exist-on-value-of-type
  colorStrips: Array<any> = [];
  allStrips: any = {};
  hash: string;

  discoModeInterval: any;
  pianoModeInterval: any;

  quotes: Array<Object> = [];
  currentQuoteIndex: number = 0;
  quote: Object = {};

  isDiscoMode: boolean = false;
  isPianoMode: boolean = false;

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
    this.allStrips = {
      areLocked: false,
      isRed: true,
      isGreen: true,
      isBlue: true
    };
    this.setCurrentQuote();
    this.colorStrips = this.stripService.init(stripsLength);
    // console.log(this.colorStrips);
  };

  updateStripSettings () {
    this.stripService.updateColor();
    this.setCurrentQuote();
  };

  eventHandler (ev) {
    // console.log(ev, ev.keyCode, ev.keyIdentifier);
    if (ev.keyCode === 32) {
      this.updateStripSettings();
    } else if ((ev.keyCode >= 49 && ev.keyCode <= 57)) {
      this.stripService.updateColorByIndex(ev.keyCode - 49);
    } else if ((ev.keyCode >= 97 && ev.keyCode <= 105)) {
      this.stripService.updateColorByIndex(ev.keyCode - 97);
    } else if ((ev.keyCode === 48) || (ev.keyCode === 96)) {
      this.stripService.updateColorByIndex(9);
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

  onOpacityChange(ev, index, strip) {
    ev.preventDefault();
    ev.stopPropagation();
    this.stripService.updateOpacity(strip, index);
  };

  getQuote() {
    this.quoteService.getQuote().subscribe((quotes) => {
      Array.prototype.push.apply(this.quotes, quotes);
      this.setCurrentQuote();
    });
  };

  setQuote() {
    if (this.currentQuoteIndex === 0 && this.quotes.length === 0) {
      this.getQuote();
    } else {
      this.setCurrentQuote();
    }
  }

  setCurrentQuote() {
    if (this.isDiscoMode || this.isPianoMode) {
      if (Object.keys(this.quote).length !== 0) {
        return;
      }
    }
    if (this.quotes.length - this.currentQuoteIndex <= 5) {
      this.getQuote();
    } else {
      this.quote = this.quotes[this.currentQuoteIndex];
      this.currentQuoteIndex++;
      if (this.quote['content'].length > 80) {
        this.setCurrentQuote();
      }
    }
  }

  discoMode() {
    this.discoModeInterval = setInterval(() => {
      this.eventHandler({
        keyCode: 32
      });
    }, 1000);
  }

  pianoMode() {
    this.pianoModeInterval = setInterval(() => {
      this.isPianoMode = true;
      this.eventHandler({
        keyCode: Math.floor(Math.random() * 10) + 48
      });
    }, 250);
  }

  toggleStripsLock () {
    this.allStrips.areLocked = !this.allStrips.areLocked;
    for (let i = 0; i < this.colorStrips.length; i++) {
      this.colorStrips[i].isLocked = this.allStrips.areLocked;
    }
  };

  toggleStripsRGBComponents () {
    for (let i = 0; i < this.colorStrips.length; i++) {
      this.colorStrips[i].isRed = this.allStrips.isRed;
      this.colorStrips[i].isGreen = this.allStrips.isGreen;
      this.colorStrips[i].isBlue = this.allStrips.isBlue;
    }
  }

  toggleDiscoMode(mode) {
    if (mode) {
      this.discoMode();
      this.isDiscoMode = true;
    } else {
      clearInterval(this.discoModeInterval);
      this.isDiscoMode = false;
    }
  }

  togglePianoMode(mode) {
    if (mode) {
      this.pianoMode();
      this.isPianoMode = true;
    } else {
      clearInterval(this.pianoModeInterval);
      this.isPianoMode = false;
    }
  }
}
