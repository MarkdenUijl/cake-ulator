<script setup>
    const props = defineProps({
        image: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: false
        },
        isSelected: {
            type: Boolean,
            required: false
        }
    })
</script>

<template>
    <button id="twoStateButton" :class="props.isSelected ? 'selected' : null">
        <icon :name="props.image" width="30" height="30" :fill="props.isSelected ? 'var(--color-highlight)' : 'var(--color-unselected)'"/>
        {{ props.text }}
    </button>
</template>

<style>
    #twoStateButton {
        background-color: var(--color-item);
        border: 2px solid var(--color-unselected);
        border-radius: 15px;
        color: var(--color-unselected);
        padding: 15px 15px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0px;
        font-size: 0px;
        flex-grow: 1;
    }

    #twoStateButton:hover {
        border: 2px solid var(--color-highlight);
        color: var(--color-highlight);
        box-shadow: 0px 0px 5px var(--color-highlight);
        text-shadow: 0px 0px 5px var(--color-highlight);
    }

    #twoStateButton:hover svg {
        fill: var(--color-highlight);
        filter: drop-shadow(0px 0px 5px var(--color-highlight));
    }

    #twoStateButton.selected {
        background-color: var(--color-highlight);
        color: var(--color-background);
        border-color: var(--color-highlight);
        box-shadow: 0px 0px 5px var(--color-highlight);
    }

    #twoStateButton.selected svg {
        fill: var(--color-background);
    }


    /* MEDIA QUERIES */
    @media (min-width: 768px) {
        #twoStateButton {
            gap: 10px;
            font-size: 20px;
        }
    }

    @media (min-width: 1024px) {
        #twoStateButton {
            gap: 10px;
            font-size: 20px;
        }
    }

</style>