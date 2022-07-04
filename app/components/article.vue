<template>
    <div>{{article.headline}}</div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
    article: { type: Object as PropType<IArticle> },
    index: Number
});

const url = `https://postimees.ee/${props.article.id}`


</script>