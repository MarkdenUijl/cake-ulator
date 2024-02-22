<script setup>
import { computed, ref } from 'vue';

    const props = defineProps({
        image: {
            type: String,
            required: false
        },
        text: {
            type: String,
            required: false
        },
        inverted: {
            type: Boolean,
            required: false
        },
    })

    const screenWidth = ref(window.innerWidth)
    
    window.addEventListener('resize', () => {
        screenWidth.value = window.innerWidth
    })

    const emit = defineEmits(['clickButton'])

</script>

<template>
    <button :class="['singleStateButton']" @click="$emit('clickButton')">
        <icon v-if="props.image != null" 
            :name="props.image" 
            width="30" 
            height="30" 
            :fill="props.isSelected ? 'var(--color-highlight)' : 'var(--color-unselected)'"
        />
    </button>
</template>

<style>
    .singleStateButton {
        background-color: var(--color-item);
        border: 2px solid var(--color-unselected);
        border-radius: 15px;
        color: var(--color-unselected);
        padding: 15px 10px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0px;
        font-size: 15px;
        font-weight: bold;
        flex-grow: 1;
        width: 50%;
        min-width: 10px;
        align-self: center;
    }

    .inverted {
        background-color: var(--color-highlight);
        color: var(--color-item);
        border: 2px solid var(--color-item);
    }

    .singleStateButton:hover {
        border: 2px solid var(--color-highlight);
        color: var(--color-highlight);
        box-shadow: 0px 0px 5px var(--color-highlight);
        text-shadow: 0px 0px 5px var(--color-highlight);
    }

    .singleStateButton:hover svg {
        fill: var(--color-highlight);
        filter: drop-shadow(0px 0px 5px var(--color-highlight));
    }

    .singleStateButton:active {
        border: 2px solid var(--color-highlight);
        background-color: var(--color-highlight);
        color: var(--color-background);
        box-shadow: 0px 0px 10px var(--color-highlight);
        text-shadow: 0px 0px 10px var(--color-highlight);
    }

    .singleStateButton:active svg {
        fill: var(--color-background);
        filter: drop-shadow(0px 0px 10px var(--color-highlight));
    }


    /* MEDIA QUERIES */
    @media (min-width: 768px) {
        .singleStateButton {
            gap: 10px;
        }
    }

</style>