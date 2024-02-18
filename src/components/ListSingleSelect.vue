<!-- <script setup>
    import { ref } from 'vue'
    
    const selectedButton = ref(null)

    const handleButtonSelect = (button) => {
        selectedButton.value = button
    }
</script>

<template>
    <div id="selector-bar">
        <two-state-button image="icon-volume" text="Volume" :isSelected="selectedButton === 'volume'" @click="handleButtonSelect('volume')" />
        <two-state-button image="icon-weight" text="Weight" :isSelected="selectedButton === 'weight'" @click="handleButtonSelect('weight')" />
        <two-state-button image="icon-thermostat" text="Temperature" :isSelected="selectedButton === 'temperature'" @click="handleButtonSelect('temperature')" />
    </div>
</template>

<style>
    #selector-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        min-width: 100%;
        background: none;
    }
</style> -->

<template>
    <div id="selector-bar">
      <two-state-button 
        v-for="button in buttons"
        :key="button.id"
        :image="button.image" 
        :text="button.text" 
        :isSelected="selectedButton === button.id" 
        @click="handleButtonSelect(button.id)" 
      />
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'
  
    const props = defineProps({
      buttons: {
        type: Array,
        required: true
      }
    })
  
    const selectedButton = ref(null)
  
    const handleButtonSelect = (buttonId) => {
      selectedButton.value = buttonId
    }
  </script>
  
  <style>
    #selector-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      min-width: 100%;
      background: none;
    }
  </style>
  