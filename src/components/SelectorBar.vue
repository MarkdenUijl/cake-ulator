<script setup>
    import { ref } from 'vue'

    const volumeName = ref('');

    const conversionButtons = [
        { id: 'volume', text: 'Volume', image: 'icon-volume' },
        { id: 'weight', text: 'Weight', image: 'icon-weight' },
        { id: 'temperature', text: 'Temperature', image: 'icon-thermostat' }
    ];
</script>

<template>
    <div id="selector-container">
        <list-single-select :buttons="conversionButtons" />
        
        <!-- <div id="selected-content" :class="selectedButton === ('volume' || 'weight' || 'temperature') ? 'visible' : null">
            <div id="volume-content" :class="{ 'visible': selectedButton === 'volume' }">
                <input v-model="volumeName" type="text" placeholder="Item Name" />

            </div>

            <div id="weight-content" :class="{ 'visible': selectedButton === 'weight' }">
                
            </div>

            <div id="temperature-content" :class="{ 'visible': selectedButton === 'temperature' }">
                
            </div>
        </div> -->
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

    #selected-content.visible {
        display: flex;
    }

    #volume-content {
        display: none;
    }

    #volume-content.visible {
        display: block;
    }

    #weight-content {
        display: none;
    }

    #weight-content.visible {
        display: block;
    }

    #temperature-content {
        display: none;
    }

    #temperature-content.visible {
        display: block;
    }
</style>
  