<script setup>
    import { ref, defineProps, defineEmits } from 'vue';

    // const props = defineProps({
    //     recipeItems: {
    //         type: Array,
    //         required: false
    //     }
    // })

    const recipeItems = ref([
        { id: 1, name: 'Water', amount: '300 ml' },
        { id: 2, name: 'Milk', amount: '200 ml' },
        { id: 3, name: 'Flour', amount: '500 g' }
    ]);

    const emits = defineEmits(['deleteItem']);
</script>

<template>
    <div id="recipe-container">
        <recipe-item v-for="item in recipeItems" :key="item.id" :name="item.name" :amount="item.amount" @click="deleteItem"/>
   
        <!-- <recipe-item v-for="recipeItem in recipeItems" :key="recipeItem.id" :recipeItem="recipeItem" /> -->
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
        height: 100%;
        flex-shrink: 1;
        overflow-y: scroll;
        padding: 10px;

        border: red 1px solid;
    }
</style>
