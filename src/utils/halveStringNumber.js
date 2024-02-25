import { fractionToMixedNumber } from './fractionToMixedNumber.js';

export function halveStringNumber(input) {
    if (input.includes('/')) {
      const parts = input.split(' ');
      let integerPart = 0;
      let fraction = [];

      if (parts.length === 2) {
          integerPart = parseInt(parts[0]);
          fraction = parts[1].split('/');
      } else {
          fraction = parts[0].split('/');
      }

      let numerator = parseInt(fraction[0]);
      let denominator = parseInt(fraction[1]);

      numerator += integerPart * denominator;

      if (numerator % 2 === 0) {
          numerator /= 2;
      } else {
          denominator *= 2;
      }

      return fractionToMixedNumber( numerator/denominator );
    } else {
        const number = parseFloat(input);
        const halved = number / 2;

        return halved.toString();
    }
  }