<script setup>
    const props = defineProps({
        recipeItems: {
            type: Object,
            required: false
        }
    })
</script>

<template>
    <div id="recipe-container">
        <recipe-item v-for="recipeItem in recipeItems" :key="recipeItem.id" :recipeItem="recipeItem" />
    </div>
</template>

<style>
  
</style>
