<template>
    <div>
        navbar
        <img src="/logo.png"/>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
    titleBar: String,
    social: {
        type: Object as PropType<ISection['social']>
    }
});
</script>
