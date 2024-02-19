<script setup>
    import { ref, computed } from 'vue'
    import { convertVolume } from '@/utils/convertVolume.js'

    function resetValues() {
        selectedConverter.value = null;
        selectedVolumeInput.value = null;
        selectedVolumeOutput.value = null;
        volumeName.value = '';
        volumeInputAmount.value = null;
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
</script>

<template>
    <div id="selector-container">
        <list-single-select :buttons="conversionButtons" v-model:selectedButton="selectedConverter" />
        
        <transition name="slide">
            <!-- <div id="conversion-volume" class="conversion-container" :class="{ 'visible' : selectedConverter === 'volume' }"> -->
            <div id="conversion-volume" class="conversion-container" v-show="selectedConverter === 'volume'">
                <input id="volume-name-input" v-model="volumeName" type="text" placeholder="Item name"/>

                <div class="amount-select-container">
                    <input id="volume-amount-input" v-model="volumeInputAmount" type="number" placeholder="Amount"/>

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
        </transition>
        
    </div>
</template>

<style>
    /* Add this style for the sliding animation */
    .slide-enter-active, .slide-leave-active {
        transition: transform 0.5s ease;
    }
    .slide-enter, .slide-leave-to {
        transform: translateY(-100%);
    }
    .slide-enter-to, .slide-leave {
        transform: translateY(0);
    }

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

    .conversion-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
        background: none;
    }

    #selector-container input {
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

    #selector-container input:focus {
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

    #volume-name-input {
        width: 100%;
    }

    #volume-amount-input {
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