import { fractionToMixedNumber } from '@/utils/fractionToMixedNumber.js';
import { parse } from 'vue/compiler-sfc';

export function convertWeight(selectedWeightInput, selectedWeightOutput, weightInputAmount) {
    if (selectedWeightInput === null || selectedWeightOutput === null || weightInputAmount === null) {
        return 0;
    }

    if (selectedWeightInput === 'cups') {
        if (selectedWeightOutput === 'g') {
            return parseFloat(weightInputAmount * 128).toFixed(2);
        } else if (selectedWeightOutput === 'oz') {
            return parseFloat(weightInputAmount * 4.5).toFixed(2);
        } else if (selectedWeightOutput === 'lb') {
            return parseFloat(weightInputAmount * 0.28).toFixed(2);
        } else if (selectedWeightOutput === 'tbsp') {
            return parseFloat(weightInputAmount * 16).toFixed(2);
        } else if (selectedWeightOutput === 'tsp') {
            return parseFloat(weightInputAmount * 48).toFixed(2);
        } else {
            return weightInputAmount;
        }
    } else if (selectedWeightInput === 'g') {
        if (selectedWeightOutput === 'cups') {
            return fractionToMixedNumber( weightInputAmount / 128 );
        } else if (selectedWeightOutput === 'oz') {
            return parseFloat(weightInputAmount / ( 256/9 )).toFixed(2);
        } else if (selectedWeightOutput === 'lb') {
            return parseFloat(weightInputAmount / ( 256/9 ) / ( 128 / 0.28 )).toFixed(2);
        } else if (selectedWeightOutput === 'tbsp') {
            return parseFloat(weightInputAmount / 8).toFixed(2);
        } else if (selectedWeightOutput === 'tsp') {
            return parseFloat(weightInputAmount / ( 8/3 )).toFixed(2);
        } else {
            return weightInputAmount;
        }
    } else if (selectedWeightInput === 'oz') {
        if (selectedWeightOutput === 'cups') {
            return fractionToMixedNumber( weightInputAmount / 4.5 );
        } else if (selectedWeightOutput === 'g') {
            return parseFloat(weightInputAmount * ( 256/9 )).toFixed(2);
        } else if (selectedWeightOutput === 'lb') {
            return parseFloat(weightInputAmount / ( 4.5 / 0.28 )).toFixed(2);
        } else if (selectedWeightOutput === 'tbsp') {
            return parseFloat(weightInputAmount * ( 16 / 4.5 )).toFixed(2);
        } else if (selectedWeightOutput === 'tsp') {
            return parseFloat(weightInputAmount * ( 48 / 4.5 )).toFixed(2);
        } else {
            return weightInputAmount;
        }
    } else if (selectedWeightInput === 'lb') {
        if (selectedWeightOutput === 'cups') {
            return fractionToMixedNumber( weightInputAmount / 0.28 );
        } else if (selectedWeightOutput === 'g') {
            return parseFloat(weightInputAmount * ( 128 / 0.28 )).toFixed(2);
        } else if (selectedWeightOutput === 'oz') {
            return parseFloat(weightInputAmount * ( 4.5 / 0.28 )).toFixed(2);
        } else if (selectedWeightOutput === 'tbsp') {
            return parseFloat(weightInputAmount * ( 16 / 0.28 )).toFixed(2);
        } else if (selectedWeightOutput === 'tsp') {
            return parseFloat(weightInputAmount * ( 48 / 0.28 )).toFixed(2);
        } else {
            return weightInputAmount;
        }
    } else if (selectedWeightInput === 'tbsp') {
        if (selectedWeightOutput === 'cups') {
            return fractionToMixedNumber( weightInputAmount / 16 );
        } else if (selectedWeightOutput === 'g') {
            return parseFloat(weightInputAmount * 8).toFixed(2);
        } else if (selectedWeightOutput === 'oz') {
            return parseFloat(weightInputAmount * ( 16 / 4.5 )).toFixed(2);
        } else if (selectedWeightOutput === 'lb') {
            return parseFloat(weightInputAmount * ( 16 / 0.28 )).toFixed(2);
        } else if (selectedWeightOutput === 'tsp') {
            return parseFloat(weightInputAmount * 3).toFixed(2);
        } else {
            return weightInputAmount;
        }
    } else if (selectedWeightInput === 'tsp') {
        if (selectedWeightOutput === 'cups') {
            return fractionToMixedNumber( weightInputAmount / 48 );
        } else if (selectedWeightOutput === 'g') {
            return parseFloat(weightInputAmount * ( 8 / 3 )).toFixed(2);
        } else if (selectedWeightOutput === 'oz') {
            return parseFloat(weightInputAmount * ( 48 / 4.5 )).toFixed(2);
        } else if (selectedWeightOutput === 'lb') {
            return parseFloat(weightInputAmount * ( 48 / 0.28 )).toFixed(2);
        } else if (selectedWeightOutput === 'tbsp') {
            return parseFloat(weightInputAmount / 3).toFixed(2);
        } else {
            return weightInputAmount;
        }
    }
}