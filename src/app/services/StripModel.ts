import { Injectable } from '@angular/core';
import { ColorService } from './ColorService';
import { StripService } from './StripService';

@Injectable()
export class StripModel {
  public colorService: ColorService;
  public stripService: StripService;

  color: String = '';
  rgbColor: String = '';
  startColor: String = '#FFFFFF';
  endColor: String = '#000000';
  isLocked: Boolean = false;
  opacity: any = 10;

  constructor(public index: Number = 0) {
    // not injecting it in constructor since it would have to be passed
    // while doing `new StripModel()`
    this.colorService = new ColorService();
    this.stripService = new StripService();

    this.color = this.colorService.getRandomHexCode();
    let rgbObject = this.colorService.hexToRgb(this.color);
    this.rgbColor = 'rgba(' + rgbObject.r + ', ' + rgbObject.g + ', ' + rgbObject.b + ', 1)';
  };

  init () {};
}
