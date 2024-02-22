<script setup>
    import SingleStateButton from './SingleStateButton.vue';

    const props = defineProps({
        name: {
            type: String,
            required: true
        },
        amount: {
            type: String,
            required: true
        },
        unit: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div id="recipe-item">
        <div id="item-amount-container">
            <span id="item-name">{{ props.name }}</span>
            <span id="item-amount">{{ props.amount }} {{ props.unit }}</span>
        </div>

        <SingleStateButton :image="'icon-delete'" style="max-width: 75px"/>
    </div>
</template>

<style>
    #recipe-item {
        background-color: var(--color-item);
        padding: 15px 30px;
        width: 100%;
        border-radius: 15px 15px;
        color: var(--color-unselected);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #item-name {
        font-size: 20px;
        font-weight: bold;
    }

    #item-amount {
        font-size: 15px;
    }

    #item-amount-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: auto;
        background:none;
        gap: 5px;
    }

    @media screen and (min-width: 768px){
        #recipe-item {
            width: calc((100% - 20px) / 3);
        }
    }
</style>
