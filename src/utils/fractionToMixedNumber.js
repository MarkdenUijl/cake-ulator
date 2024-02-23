import { floatToFraction } from './floatToFraction';

export function fractionToMixedNumber(number) {
    const precision = 1e-6;
    let sign = '';

    if (number < 0) {
        sign = '-';
        number = Math.abs(number);
    }
    
    let integerPart = Math.floor(number);
    let fractionPart = number - integerPart;

    if (fractionPart < precision) {
        return sign + integerPart;
    }

    let [numerator, denominator] = floatToFraction(fractionPart);

    if (integerPart === 0) {
        return sign + `${numerator}/${denominator}`;
    }

    return sign + `${integerPart} ${numerator}/${denominator}`;
}
