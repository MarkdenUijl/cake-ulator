<script setup>
  import "./assets/main.css"
  import { ref } from 'vue';
  import { fractionToMixedNumber } from "./utils/fractionToMixedNumber";

  const recipeItems = ref([
  ]);

  const addItemToRecipe = (item) => {
    recipeItems.value.push(item);
  };

  const deleteItem = (itemId) => {
    recipeItems.value = recipeItems.value.filter(item => item.id !== itemId);
  };

  const clickButton = () => {
    for (let i = 0; i < recipeItems.value.length; i++) {
        recipeItems.value[i].amount = halveString(recipeItems.value[i].amount);
    }
  };

  function halveString(input) {
    if (input.includes('/')) {
      const parts = input.split(' ');
      let integerPart = 0;
      let fraction = [];

      if (parts.length === 2) {
          integerPart = parseInt(parts[0]);
          fraction = parts[1].split('/');
      } else {
          fraction = parts[0].split('/');
      }

      let numerator = parseInt(fraction[0]);
      let denominator = parseInt(fraction[1]);

      numerator += integerPart * denominator;

      if (numerator % 2 === 0) {
          numerator /= 2;
      } else {
          denominator *= 2;
      }

      return fractionToMixedNumber( numerator/denominator );
    } else {
        const number = parseFloat(input);
        const halved = number / 2;

        return halved.toString();
    }
  }
</script>

<template>
  <div class="app">
      <selector-bar @addItemToRecipe="addItemToRecipe"></selector-bar>
      <recipe :recipeItems="recipeItems" @deleteItem="deleteItem"></recipe>
      <single-state-button id="halve-button" :image="'icon-half'" @clickButton="clickButton" />
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
  
  #halve-button {
    position: fixed;
    height: 70px;
    max-width: 70px;
    border-radius: 35px;
    bottom: 5%;
    right: 5%;
    box-shadow: 0px 0px 10px;
  }

</style>
