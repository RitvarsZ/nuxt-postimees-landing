<template>
    <a :href="linkUrl" class="block h-full">
        <img :src="imgUrl" :alt="imgAlt" :class="`h-full ${imgClass}`">
        <slot />
    </a>
</template>

<script setup lang="ts">
defineProps({
    linkUrl: String,
    imgUrl: String,
    imgAlt: String,
    imgClass: {
        type: String,
        default: ''
    }
});

</script>
