<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    buttons: {
      type: Array,
      required: true
    },
    selectedButton: {
      type: String,
      default: null
    }
  })

  const emit = defineEmits(['update:selectedButton'])

  const handleButtonSelect = (buttonId) => {
      emit('update:selectedButton', buttonId)
  }
</script>

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

<style>
  #selector-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    background: none;
    flex-shrink: 1;
  }
</style>
