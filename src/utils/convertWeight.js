import { fractionToMixedNumber } from '@/utils/fractionToMixedNumber.js';

export function convertWeight(selectedWeightInput, selectedWeightOutput, weightInputAmount) {
    if (selectedWeightInput === null || selectedWeightOutput === null || weightInputAmount === null) {
        return 0;
    }

    if (selectedWeightInput === 'cups') {
        if (selectedWeightOutput === 'g') {
            return weightInputAmount * 128;
        } else if (selectedWeightOutput === 'oz') {
            return weightInputAmount * 4.5;
        } else if (selectedWeightOutput === 'lb') {
            return weightInputAmount * 0.28;
        } else if (selectedWeightOutput === 'tbsp') {
            return weightInputAmount * 16;
        } else if (selectedWeightOutput === 'tsp') {
            return weightInputAmount * 48;
        } else {
            return weightInputAmount;
        }
    } else if (selectedWeightInput === 'g') {
        if (selectedWeightOutput === 'cups') {
            return fractionToMixedNumber( weightInputAmount / 128 );
        } else if (selectedWeightOutput === 'oz') {
            return weightInputAmount / ( 256/9 );
        } else if (selectedWeightOutput === 'lb') {
            return weightInputAmount / ( 128 / 0.28 );
        } else if (selectedWeightOutput === 'tbsp') {
            return weightInputAmount / 8;
        } else if (selectedWeightOutput === 'tsp') {
            return weightInputAmount / ( 8/3 );
        } else {
            return weightInputAmount;
        }
    } else if (selectedWeightInput === 'oz') {
        if (selectedWeightOutput === 'cups') {
            return fractionToMixedNumber( weightInputAmount / 4.5 );
        } else if (selectedWeightOutput === 'g') {
            return weightInputAmount * ( 256/9 );
        } else if (selectedWeightOutput === 'lb') {
            return weightInputAmount / ( 4.5 / 0.28 );
        } else if (selectedWeightOutput === 'tbsp') {
            return weightInputAmount * ( 16 / 4.5 );
        } else if (selectedWeightOutput === 'tsp') {
            return weightInputAmount * ( 48 / 4.5 );
        } else {
            return weightInputAmount;
        }
    } else if (selectedWeightInput === 'lb') {
        if (selectedWeightOutput === 'cups') {
            return fractionToMixedNumber( weightInputAmount / 0.28 );
        } else if (selectedWeightOutput === 'g') {
            return weightInputAmount * ( 128 / 0.28 );
        } else if (selectedWeightOutput === 'oz') {
            return weightInputAmount * ( 4.5 / 0.28 );
        } else if (selectedWeightOutput === 'tbsp') {
            return weightInputAmount * ( 16 / 0.28 );
        } else if (selectedWeightOutput === 'tsp') {
            return weightInputAmount * ( 48 / 0.28 );
        } else {
            return weightInputAmount;
        }
    } else if (selectedWeightInput === 'tbsp') {
        if (selectedWeightOutput === 'cups') {
            return fractionToMixedNumber( weightInputAmount / 16 );
        } else if (selectedWeightOutput === 'g') {
            return weightInputAmount * 8;
        } else if (selectedWeightOutput === 'oz') {
            return weightInputAmount / ( 16 / 4.5 );
        } else if (selectedWeightOutput === 'lb') {
            return weightInputAmount / ( 16 / 0.28 );
        } else if (selectedWeightOutput === 'tsp') {
            return weightInputAmount * 3;
        } else {
            return weightInputAmount;
        }
    } else if (selectedWeightInput === 'tsp') {
        if (selectedWeightOutput === 'cups') {
            return fractionToMixedNumber( weightInputAmount / 48 );
        } else if (selectedWeightOutput === 'g') {
            return weightInputAmount * ( 8 / 3 );
        } else if (selectedWeightOutput === 'oz') {
            return weightInputAmount / ( 48 / 4.5 );
        } else if (selectedWeightOutput === 'lb') {
            return weightInputAmount / ( 48 / 0.28 );
        } else if (selectedWeightOutput === 'tbsp') {
            return weightInputAmount / 3;
        } else {
            return weightInputAmount;
        }
    }
}