<script setup>
    import { ref } from 'vue'

    const conversionButtons = [
        { id: 'volume', text: 'Volume', image: 'icon-volume' },
        { id: 'weight', text: 'Weight', image: 'icon-weight' },
        { id: 'temperature', text: 'Temperature', image: 'icon-thermostat' }
    ];

    const volumeButtons = [
        { id: 'cups', text: 'cups' },
        { id: 'teaspoons', text: 'tsp' },
        { id: 'tablespoons', text: 'tbsp' },
        { id: 'millilitres', text: 'ml' }
    ];

    const selectedConverter = ref(null)
    const selectedVolumeInput = ref(null)
    const selectedVolumeOutput = ref(null)

    const volumeName = ref('')
</script>

<template>
    <div id="selector-container">
        <list-single-select :buttons="conversionButtons" v-model:selectedButton="selectedConverter" />
        
        <div id="conversion-volume" class="conversion-container" :class="{ 'visible' : selectedConverter === 'volume' }">
            <input v-model="volumeName" type="text" placeholder="Item name"/>

            <input v-model="volumeAmount" type="number" placeholder="Amount"/>

            <div class="button-container">
                <list-single-select :buttons="volumeButtons" v-model:selectedButton="selectedVolumeInput" />

                <span>></span>

                <list-single-select :buttons="volumeButtons" v-model:selectedButton="selectedVolumeOutput" />
            </div>
            
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

    #selected-content {
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .conversion-container {
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
        background: none;
    }

    .conversion-container.visible {
        display: flex;
    }

    .button-container {
        background: none;
        width: 100%;
    }

</style>
  