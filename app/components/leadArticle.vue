<template>
    <section>
        <div class="overlay">
            <div class="p-4 text-white md:w-7/12 md:mx-auto">
                <p v-if="!responsive.isDesktop.value" class="mt-4">POSTIMEES PLUS {{ publishDate }}</p>
                <h1 class="mt-8 text-5xl font-bold md:text-center md:mt-48">{{ props.article.headline }}</h1>
                <div v-if="!responsive.isDesktop.value" class="flex items-center mt-4">
                    <span class="mr-2">{{ props.article.meta.commentCount }}</span>
                    <img src="/icons/comments.png" alt="comments" class="h-6">
                </div>
                <div class="flex items-center justify-center mb-16 md:mt-24">
                    <a :href="articleUrl" target="_blank" title="Continue reading"
                        class="w-16 h-16 bg-[url('/icons/nooleke_2.png')] hover:bg-[url('/icons/nooleke.png')] bg-center bg-contain hover:bg-no-repeat hover:bg-auto">
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
    article: { type: Object as PropType<IArticle> },
});
const responsive = useResponsive();
const articleUrl = `https://postimees.ee/${props.article.id}`
const publishDate = computed<string>(() => {
    let date = new Date(props.article.meta.actualPublishTime)

    return date.toLocaleDateString('et-EE', { dateStyle: 'medium' }) + ' ' +
        date.toLocaleTimeString('et-EE', { timeStyle: 'short' });
});
const thumbnail = ref(`url('${responsive.isDesktop.value ? props.article.thumbnail.sources.landscape.large : props.article.thumbnail.sources.square.large}')`);

</script>

<style scoped>
.overlay {
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.902) 0%, rgba(0, 0, 0, 0.18039) 100%);
}

section {
    background-image: v-bind(thumbnail);
    background-size: cover;
    background-position: center;
}
</style>
