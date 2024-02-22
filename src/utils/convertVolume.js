import { fractionToMixedNumber } from '@/utils/fractionToMixedNumber.js';

export function convertVolume(selectedVolumeInput, selectedVolumeOutput, volumeInputAmount) {
    if (selectedVolumeInput === null || selectedVolumeOutput === null || volumeInputAmount === null) {
        return 0;
    }
    
    if (selectedVolumeInput === 'cups') {
        if (selectedVolumeOutput === 'tsp') {
            return parseFloat((volumeInputAmount * 48).toFixed(2));
        } else if (selectedVolumeOutput === 'tbsp') {
            return fractionToMixedNumber(volumeInputAmount * 16);
        } else if (selectedVolumeOutput === 'ml') {
            return parseFloat((volumeInputAmount * 240).toFixed(2));
        } else {
            return volumeInputAmount;
        }
    } else if (selectedVolumeInput === 'tbsp') {
        if (selectedVolumeOutput === 'cups') {
            return fractionToMixedNumber(volumeInputAmount / 16);
        } else if (selectedVolumeOutput === 'tsp') {
            return parseFloat((volumeInputAmount * 3).toFixed(2));
        } else if (selectedVolumeOutput === 'ml') {
            return parseFloat((volumeInputAmount * 15).toFixed(2));
        } else {
            return volumeInputAmount;
        }
    } else if (selectedVolumeInput === 'tsp') {
        if (selectedVolumeOutput === 'cups') {
            return fractionToMixedNumber(volumeInputAmount / 48);
        } else if (selectedVolumeOutput === 'tbsp') {
            return fractionToMixedNumber(volumeInputAmount / 3);
        } else if (selectedVolumeOutput === 'ml') {
            return parseFloat((volumeInputAmount * 5).toFixed(2));
        } else {
            return volumeInputAmount;
        }
    } else if (selectedVolumeInput === 'ml') {
        if (selectedVolumeOutput === 'cups') {
            return fractionToMixedNumber(volumeInputAmount / 240);
        } else if (selectedVolumeOutput === 'tbsp') {
            return fractionToMixedNumber(volumeInputAmount / 15);
        } else if (selectedVolumeOutput === 'tsp') {
            return parseFloat((volumeInputAmount / 5).toFixed(2));
        } else {
            return volumeInputAmount;
        }
    }
}