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
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ] : [
      undefined,
      undefined,
      undefined
    ];
  };

  componentToHex(c) {
    let hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  rgbToHex(r, g, b) {
    return '#' + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  };

  getRandomRGB (strip) {
    let redComponentRange = 0;
    let greenComponentRange = 0;
    let blueComponentRange = 0;

    if (strip.isRed) {
      redComponentRange = Math.floor(Math.random() * (0 - 255 + 1) + 255);
    }
    if (strip.isGreen) {
      greenComponentRange = Math.floor(Math.random() * (0 - 255 + 1) + 255);
    }
    if (strip.isBlue) {
      blueComponentRange = Math.floor(Math.random() * (0 - 255 + 1) + 255);
    }

    return [
      redComponentRange,
      greenComponentRange,
      blueComponentRange
    ];
  };

  getFormattedRGB (strip) {
    let rgb = this.getRandomRGB(strip);
    return {
      formatted: `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${strip.opacity / 10 || 1})`,
      raw: rgb
    };
  };
}
