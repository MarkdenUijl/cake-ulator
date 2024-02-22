<script setup>
  import "./assets/main.css"
  import { ref } from 'vue';

  const recipeItems = ref([
    { id: 1, name: 'Flour', amount: '2 1/2', unit: 'cups' },
    { id: 2, name: 'Sugar', amount: '1 1/2', unit: 'cups' },
    { id: 3, name: 'Butter', amount: '1', unit: 'cup' },
    { id: 4, name: 'Eggs', amount: '4', unit: '' },
    { id: 5, name: 'Baking Powder', amount: '1', unit: 'tbsp' },
    { id: 6, name: 'Vanilla', amount: '1', unit: 'tsp' },
    { id: 7, name: 'Milk', amount: '1', unit: 'cup' },
    { id: 8, name: 'Salt', amount: '1/2', unit: 'tsp' },
    { id: 9, name: 'Cocoa', amount: '1/2', unit: 'cup' },
    { id: 10, name: 'Chocolate Chips', amount: '1', unit: 'cup' },
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
        let fractionPart = 0;

        if (parts.length === 2) {
            integerPart = parseInt(parts[0]);
            const fractionParts = parts[1].split('/');
            fractionPart = parseInt(fractionParts[0]) / parseInt(fractionParts[1]);
        } else {
            fractionPart = parseFloat(input);
        }

        const mixedFraction = integerPart + fractionPart;

        const halved = mixedFraction / 2;

        let numerator = halved * 1000000;
        let denominator = 1000000;
        let gcd = function gcd(a, b) {
            return b ? gcd(b, a % b) : a;
        };
        gcd = gcd(numerator, denominator);
        numerator /= gcd;
        denominator /= gcd;

        return `${numerator}/${denominator}`;
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
