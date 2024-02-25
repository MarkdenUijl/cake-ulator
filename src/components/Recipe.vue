<script setup>
    import { halveStringNumber } from '@/utils/halveStringNumber.js';

    const props = defineProps({
        recipeItems: {
            type: Array,
            required: true
        }
    });
</script>

<template>
    <div id="recipe-container">
        <recipe-item v-for="item in recipeItems" :key="item.id" :itemId="item.id" :name="item.name" :amount="item.amount" :unit="item.unit" @deleteItem="$emit('deleteItem', item.id)"/>
    </div>
</template>

<style>
    #recipe-container {
        display: flex;
        justify-content: flex-start;
        background: none;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 10px;
        width: 100%;
        height: auto;
        flex-shrink: 1;
        overflow-y: scroll;
        padding: 10px;
        padding-bottom: 40px;
    }
</style>
