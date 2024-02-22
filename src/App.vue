<script setup>
  import "./assets/main.css"
  import { ref } from 'vue';

  const recipeItems = ref([
  ]);

  const addItemToRecipe = (item) => {
    recipeItems.value.push(item);
  };

  const deleteItem = (itemId) => {
    recipeItems.value = recipeItems.value.filter(item => item.id !== itemId);
  };
</script>

<template>
  <div class="app">
      <selector-bar @addItemToRecipe="addItemToRecipe"></selector-bar>
      <recipe :recipeItems="recipeItems" @deleteItem="deleteItem"></recipe>
  </div>
</template>

<style scoped>
  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
  }
</style>
