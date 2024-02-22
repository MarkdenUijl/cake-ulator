<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        recipeItems: {
            type: Array,
            required: true
        }
    })
</script>

<template>
    <div id="recipe-container">
        <recipe-item v-for="item in recipeItems" :key="item.id" :name="item.name" :amount="item.amount" @click="$emit('deleteItem', item.id)"/>
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
    }
</style>
