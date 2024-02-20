<script setup>
    import { ref, computed } from 'vue'
    import { convertVolume } from '@/utils/convertVolume.js'
    import { convertWeight } from '@/utils/convertWeight.js'
    import { convertTemperature } from '@/utils/convertTemperature.js'

    const toggleConverter = (buttonId) => {
        if (selectedConverter.value === buttonId) {
            selectedConverter.value = null;
        } else {
            selectedConverter.value = buttonId;
        }
    };

    function resetValues() {
        selectedConverter.value = null;
        selectedVolumeInput.value = null;
        selectedVolumeOutput.value = null;
        volumeName.value = '';
        volumeInputAmount.value = null;
        selectedWeightInput.value = null;
        selectedWeightOutput.value = null;
        weightName.value = '';
        weightInputAmount.value = null;
        selectedTemperatureInput.value = null;
        selectedTemperatureOutput.value = null;
        temperatureInputAmount.value = null;
    }

    const conversionButtons = [
        { id: 'volume', text: 'Volume', image: 'icon-volume' },
        { id: 'weight', text: 'Weight', image: 'icon-weight' },
        { id: 'temperature', text: 'Temperature', image: 'icon-thermostat' }
    ];

    const volumeButtons = [
        { id: 'cups', text: 'cups' },
        { id: 'tbsp', text: 'tbsp' },
        { id: 'tsp', text: 'tsp' },
        { id: 'ml', text: 'ml' }
    ];

    const weightButtons = [
        { id: 'cups', text: 'cups' },
        { id: 'g', text: 'g' },
        { id: 'oz', text: 'oz' },
        { id: 'lb', text: 'lb' },
        { id: 'tbsp', text: 'tbsp'},
        { id: 'tsp', text: 'tsp'}
    ];

    const temperatureButtons = [
        { id: 'celsius', text: '℃' },
        { id: 'fahrenheit', text: '℉' },
        { id: 'kelvin', text: 'Kelvin' }
    ];

    const selectedConverter = ref(null)

    const selectedVolumeInput = ref(null)
    const selectedVolumeOutput = ref(null)
    const volumeName = ref('')
    const volumeInputAmount = ref(null)

    const volumeOutputAmount = computed(() => {
        return convertVolume(selectedVolumeInput.value, selectedVolumeOutput.value, volumeInputAmount.value)
    })

    const addVolumeConversion = () => {
        if (volumeOutputAmount.value != null && volumeInputAmount.value != 0 && 
            volumeOutputAmount.value != null && volumeOutputAmount.value != 0 &&
            volumeName.value !== '') {
                console.log(`${volumeInputAmount.value} ${selectedVolumeInput.value} ${volumeName.value}`)
                console.log(`${volumeOutputAmount.value} ${selectedVolumeOutput.value} ${volumeName.value}`)
        }

        resetValues();
    }

    const selectedWeightInput = ref(null)
    const selectedWeightOutput = ref(null)
    const weightName = ref('')
    const weightInputAmount = ref(null)

    const weightOutputAmount = computed(() => {
        return convertWeight(selectedWeightInput.value, selectedWeightOutput.value, weightInputAmount.value)
    })

    const addWeightConversion = () => {
        if (weightOutputAmount.value != null && weightInputAmount.value != 0 && 
            weightOutputAmount.value != null && weightOutputAmount.value != 0 &&
            weightName.value !== '') {
                console.log(`${weightInputAmount.value} ${selectedWeightInput.value} ${weightName.value}`)
                console.log(`${weightOutputAmount.value} ${selectedWeightOutput.value} ${weightName.value}`)
        }

        resetValues();
    }

    const selectedTemperatureInput = ref(null)
    const selectedTemperatureOutput = ref(null)
    const temperatureInputAmount = ref(null)

    const temperatureOutputAmount = computed(() => {
        return convertTemperature(selectedTemperatureInput.value, selectedTemperatureOutput.value, temperatureInputAmount.value)
    })

    const addTemperatureConversion = () => {
        if (temperatureOutputAmount.value != null && temperatureInputAmount.value != 0 && temperatureInputAmount.value != null) {
            console.log(`Bake at ${temperatureOutputAmount.value}º ${selectedTemperatureOutput.value}`)
        }

        resetValues();
    }
</script>

<template>
    <div id="selector-container">
        <list-single-select :buttons="conversionButtons" v-model:selectedButton="selectedConverter" @buttonClicked="toggleConverter" />
    </div>

    <div id="outer-container">
        <div id="conversion-volume" class="conversion-container" :class="{ 'collapsed' : selectedConverter !== 'volume' }">
            <div class="divider"></div>
            
            <input class="item-name-input" v-model="volumeName" type="text" placeholder="Item name"/>

            <div class="amount-select-container">
                <input class="item-amount-input" v-model="volumeInputAmount" type="number" placeholder="Amount"/>

                <list-single-select :buttons="volumeButtons" v-model:selectedButton="selectedVolumeInput" />
            </div>

            <div class="divider"></div>

            <span id="convert-to-text">{{ volumeInputAmount }} {{ selectedVolumeInput }} {{ volumeName }} is:</span>
            
            <div class="amount-select-container">
                <span id="output-amount">{{ volumeOutputAmount }}</span>
                <list-single-select :buttons="volumeButtons" v-model:selectedButton="selectedVolumeOutput" />
            </div>

            <div class="divider"></div>

            <single-state-button @clickButton="addVolumeConversion" text="+" />
        </div>

        <div id="conversion-weight" class="conversion-container" :class="{ 'collapsed' : selectedConverter !== 'weight' }">
            <div class="divider"></div>
            
            <input class="item-name-input" v-model="weightName" type="text" placeholder="Item name"/>

            <div class="amount-select-container">
                <input class="item-amount-input" v-model="weightInputAmount" type="number" placeholder="Amount"/>

                <list-single-select :buttons="weightButtons" v-model:selectedButton="selectedWeightInput" />
            </div>

            <div class="divider"></div>

            <span id="convert-to-text">{{ weightInputAmount }} {{ selectedWeightInput }} {{ weightName }} is:</span>
            
            <div class="amount-select-container">
                <span id="output-amount">{{ parseFloat(weightOutputAmount).toFixed(2) }}</span>
                <list-single-select :buttons="weightButtons" v-model:selectedButton="selectedWeightOutput" />
            </div>

            <div class="divider"></div>

            <single-state-button @clickButton="addWeightConversion" text="+" />
        </div>

        <div id="conversion-temperature" class="conversion-container" :class="{ 'collapsed' : selectedConverter !== 'temperature' }">
            <div class="divider"></div>
            
            <div class="amount-select-container">
                <input class="item-amount-input" v-model="temperatureInputAmount" type="number" placeholder="Temp."/>

                <list-single-select :buttons="temperatureButtons" v-model:selectedButton="selectedTemperatureInput" />
            </div>

            <div class="divider"></div>

            <span id="convert-to-text">{{ temperatureInputAmount }} {{ selectedTemperatureInput }} is:</span>
            
            <div class="amount-select-container">
                <span id="output-amount">{{ parseFloat(temperatureOutputAmount).toFixed(0) }}</span>
                <list-single-select :buttons="temperatureButtons" v-model:selectedButton="selectedTemperatureOutput" />
            </div>

            <div class="divider"></div>

            <single-state-button @clickButton="addTemperatureConversion" text="+" />
        </div>
    </div>
</template>

<style>
    #selector-container {
        display: flex;
        flex-direction: column;
        background-color: var(--color-item);
        border-radius: 15px;
        padding: 10px;
        gap: 10px;
        min-width: 250px;
        width: 90%;
        max-width: 700px;
    }

    #outer-container {
        min-width: 250px;
        width: 90%;
        max-width: 700px;
        position: relative;
    }

    .conversion-container.collapsed {
        transform: scaleY(0);
        opacity: 0;
    }

    .conversion-container {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
        width: 100%;

        background-color: var(--color-item);
        border-radius: 15px;
        padding: 10px;

        overflow:hidden;
        transition:transform 0.5s ease-in-out, opacity 0.3s ease-in-out;
        height:auto;
        transform:scaleY(1);
        transform-origin:top;
    }

    .conversion-container input {
        display: flex;
        background-color: var(--color-item);
        border: 2px solid var(--color-unselected);
        border-radius: 15px;
        color: var(--color-unselected);
        padding: 15px 15px;
        text-align: flex-start;
        align-items: center;
        font-size: 15px;
    }

    .conversion-container input:focus {
        border: 2px solid var(--color-highlight);
        box-shadow: 0px 0px 10px var(--color-highlight);
    }

    .amount-select-container {
        width: 100%;
        background: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    }

    .item-name-input {
        width: 100%;
    }

    .item-amount-input {
        width: 35%;
    }

    .divider {
        width: 100%;
        height: 2px;
        background-color: var(--color-unselected);
        border-radius: 1px;
    }

    #convert-to-text {
        color: var(--color-unselected);
        font-weight: bold;
        padding-left: 10px;
    }

    #output-amount {
        display: flex;
        background-color: var(--color-item);
        border: 2px solid var(--color-unselected);
        border-radius: 15px;
        color: var(--color-unselected);
        padding: 15px 15px;
        text-align: flex-start;
        align-items: center;
        font-size: 15px;
        font-weight: bold;
        width: 35%;
        height: 100%;
    }
</style>