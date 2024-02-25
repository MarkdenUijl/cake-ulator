<script setup>
  import "./assets/main.css"
  import { ref } from 'vue';
  import { halveStringNumber } from "./utils/halveStringNumber.js";
  import { doubleStringNumber } from "./utils/doubleStringNumber.js";

  const recipeItems = ref([
  ]);

  const addItemToRecipe = (item) => {
    recipeItems.value.push(item);
  };

  const deleteItem = (itemId) => {
    recipeItems.value = recipeItems.value.filter(item => item.id !== itemId);
  };

  const clickHalve = () => {
    for (let i = 0; i < recipeItems.value.length; i++) {
        recipeItems.value[i].amount = halveStringNumber(recipeItems.value[i].amount);
    }
  };

  const clickDouble = () => {
    for (let i = 0; i < recipeItems.value.length; i++) {
        recipeItems.value[i].amount = doubleStringNumber(recipeItems.value[i].amount);
    }
  };
</script>

<template>
  <div class="app">
      <selector-bar @addItemToRecipe="addItemToRecipe"></selector-bar>
      <recipe :recipeItems="recipeItems" @deleteItem="deleteItem"></recipe>

      <div id="recipe-button-container">
        <single-state-button :image="'icon-half'" @clickButton="clickHalve" />
        <single-state-button :text="'x2'" @clickButton="clickDouble" />
      </div>
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

  #recipe-button-container {
    position: fixed;
    bottom: 5%;
    right: 5%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 10px;
    width: fit-content;
  }

  #recipe-button-container button {
    border-radius: 35px;
    width: 70px;
    height: 70px;
    box-shadow: 0px 0px 10px;
    font-size: 25px;
  }

</style>
