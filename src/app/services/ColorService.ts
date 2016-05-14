import {Injectable} from '@angular/core';

@Injectable()
export class ColorService {
  constructor() {}

  getRandomHexCode () {
    return this.hexMode();
  };

  hexMode () {
    let hexChars = '0123456789abcdef';
    let hexCode = '';
    let index = 0;
    let randChar;

    while (index < 6) {
        randChar = Math.floor(Math.random() * hexChars.length);
        hexCode += hexChars.substring(randChar, randChar + 1);
        index += 1;
    }

    return '#' + hexCode;
  };

  hexToRgb(hexColor) {
    if (!hexColor) { return; }

    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hexColor = hexColor.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : {
      r: undefined,
      g: undefined,
      b: undefined
    };
  };

  componentToHex(c) {
    let hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  rgbToHex(r, g, b) {
    return '#' + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  };
}
