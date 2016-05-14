import { Injectable } from '@angular/core';
import { StripModel } from './StripModel';

import { Defaults } from '../constants/Defaults';

@Injectable()
export class StripService {
  strips: StripModel[] = [];
  stripsLength: Number = 0;

  constructor() {};

  addStrip (isInFront) {
    let strip;
    strip = new StripModel(this.stripsLength);
    this.stripsLength = this.strips.length;

    if (isInFront) {
        this.strips = [strip, ...this.strips];
    } else {
        this.strips = [...this.strips, strip];
    }
    return this.strips;
  };

  updateColor () {
    for (let i = 0; i < this.strips.length; i++) {
        this.strips[i].updateColor();
    }
  };

  updateColorByIndex (index) {
    if (this.strips[index]) {
      this.strips[index].updateColor();
    }
  }

  updateOpacity (strip: StripModel, index: number) {
    // console.log(strip.opacity)
    this.strips[index].updateColor();
    // this.strips[index].opacity = Math.round(strip.opacity / 10);
    // rgb to hex
  };

  flush () {
    this.strips = [];
  };

  init (numOfStrips: Number = Defaults.STRIP_INIT_COUNT) {
    this.flush();
    for (let i = 0; i < numOfStrips; i++) {
      this.strips[i] = new StripModel(this.stripsLength);
      this.stripsLength = this.strips.length;
    }
    return this.strips;
  };
}
