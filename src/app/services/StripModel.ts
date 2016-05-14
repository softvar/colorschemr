import { Injectable } from '@angular/core';
import { ColorService } from './ColorService';
import { StripService } from './StripService';

@Injectable()
export class StripModel {
  public colorService: ColorService;
  public stripService: StripService;

  color: String = '';
  rgbColor: String = '';
  isLocked: Boolean = false;
  opacity: any = 10;
  fontColor: string = '';
  isRed: Boolean = true;
  isGreen: Boolean = true;
  isBlue: Boolean = true;

  constructor(public index: Number = 0) {
    // not injecting it in constructor since it would have to be passed
    // while doing `new StripModel()`
    this.colorService = new ColorService();
    this.stripService = new StripService();

    this.color = this.colorService.getRandomHexCode();
    let rgb = this.colorService.hexToRgb(this.color);
    this.rgbColor = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`;
    this.setFontColor(rgb);
  };

  updateColor () {
    if (this.isLocked) { return; }
    let hexColor; // = this.colorService.getRandomHexCode();

    let rgb = this.colorService.getFormattedRGB(this);
    this.rgbColor = rgb.formatted;
    hexColor = this.colorService.rgbToHex(
      rgb.raw[0],
      rgb.raw[1],
      rgb.raw[2]
    );
    // if (parseInt(this.opacity, 10) !== 10) {}
    this.color = hexColor;
    this.setFontColor(rgb.raw);
  };

  updateOpacity () {

  };

  init () {};

  private setFontColor(rgb) {
    let fontWeight = 1 - ( 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;

    if (fontWeight < 0.5) {
      this.fontColor = '#20172C';
    } else {
      this.fontColor = '#DEDEDE';
    }
  };
}
