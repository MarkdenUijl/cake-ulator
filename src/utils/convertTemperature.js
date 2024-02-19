export function convertTemperature(selectedTemperatureInput, selectedTemperatureOutput, temperatureInputAmount) {
    if (selectedTemperatureInput === null || selectedTemperatureOutput === null || temperatureInputAmount === null) {
        return 0;
    }

    if (selectedTemperatureInput === 'celsius') {
        if (selectedTemperatureOutput === 'fahrenheit') {
            return (temperatureInputAmount * 9/5) + 32
        } else if (selectedTemperatureOutput === 'kelvin') {
            return temperatureInputAmount + 273.15
        } else {
            return temperatureInputAmount
        }
    } else if (selectedTemperatureInput === 'fahrenheit') {
        if (selectedTemperatureOutput === 'celsius') {
            return (temperatureInputAmount - 32) * 5/9
        } else if (selectedTemperatureOutput === 'kelvin') {
            return (temperatureInputAmount - 32) * 5/9 + 273.15
        } else {
            return temperatureInputAmount
        }
    } else if (selectedTemperatureInput === 'kelvin') {
        if (selectedTemperatureOutput === 'celsius') {
            return temperatureInputAmount - 273.15
        } else if (selectedTemperatureOutput === 'fahrenheit') {
            return (temperatureInputAmount - 273.15) * 9/5 + 32
        } else {
            return temperatureInputAmount
        }
    }
}