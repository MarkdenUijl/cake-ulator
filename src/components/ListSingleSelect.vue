<script setup>
  const props = defineProps({
    buttons: {
      type: Array,
      required: true
    },
    selectedButton: {
      type: String,
      default: null
    },
    toggle: {
      type: Boolean,
      default: false
    }
  })

  const emit = defineEmits(['buttonClicked', 'update:selectedButton']);

  const handleButtonToggle = (buttonId) => {
    if (props.selectedButton === buttonId) {
      emit('buttonClicked', null);
    } else {
      emit('buttonClicked', buttonId);
    }
  };

  const handleButtonSelect = (buttonId) => {
    emit('update:selectedButton', buttonId);
  };
</script>

<template>
  <div id="selector-bar">
    <two-state-button 
      v-for="button in buttons"
      :key="button.id"
      :image="button.image" 
      :text="button.text" 
      :isSelected="selectedButton === button.id" 
      @click="toggle ? handleButtonToggle(button.id) : handleButtonSelect(button.id)" 
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
