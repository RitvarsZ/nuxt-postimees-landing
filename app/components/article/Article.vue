<template>
  <!-- Mobile -->
  <section v-if="responsive.isDesktop.value == false">
    <div class="overlay">
      <ArticleNumber>{{ index }}</ArticleNumber>
      <div class="min-h-[24em] px-4 py-8 flex items-end">
        <h1 class="text-white font-bold text-3xl leading-10 inline-block">
          <a :href="url" target="_blank">{{ article.headline }}</a>
        </h1>
      </div>
    </div>
    <div class="grid">
      <div v-html="article.articleLead[0].html" class="bg-dark py-8 px-4 text-white text-lg"></div>
    </div>
  </section>
  <!-- Desktop -->
  <section v-else>
    <!-- wanted to do this with vue dynamic components but nuxt just doesnt allow that - couldnt resolve them dynamically -->
    <template v-if="layout.component === 'ArticleLayoutSimple'">
      <ArticleLayoutSimple v-bind="layout.props">
        <template #title><a :href="url" target="_blank">{{ article.headline }}</a></template>
        <template #lead>
          <p v-html="article.articleLead[0].html" class="py-8 text-white text-lg"></p>
        </template>
        <template #index>{{ index }}</template>
      </ArticleLayoutSimple>
    </template>

    <template v-if="layout.component === 'ArticleLayoutFiller'">
      <ArticleLayoutFiller v-bind="layout.props">
        <template #title><a :href="url" target="_blank">{{ article.headline }}</a></template>
        <template #lead>
          <p v-html="article.articleLead[0].html" class="py-8 text-white text-lg"></p>
        </template>
        <template #filler>
          <img :src="article.thumbnail.sources.square.large" :alt="article.thumbnail.title.et"
            class="object-cover h-full opacity-50">
        </template>
        <template #index>{{ index }}</template>
      </ArticleLayoutFiller>
    </template>

    <template v-if="layout.component === 'ArticleLayoutTransp'">
      <ArticleLayoutTransp v-bind="layout.props">
        <template #title><a :href="url" target="_blank">{{ article.headline }}</a></template>
        <template #lead>
          <p v-html="article.articleLead[0].html" class="py-8 text-white text-lg"></p>
        </template>
        <template #filler>
          <img :src="article.thumbnail.sources.square.large" :alt="article.thumbnail.title.et"
            class="object-cover h-full opacity-50">
        </template>
        <template #index>{{ index }}</template>
      </ArticleLayoutTransp>
    </template>
  </section>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
  article: { type: Object as PropType<IArticle> },
  index: Number,
  layout: { type: Object as PropType<IArticleLayout> },
});
const responsive = useResponsive();

const url = `https://postimees.ee/${props.article.id}`;
const thumbnail = ref(`url('${responsive.isDesktop.value == true ? props.article.thumbnail.sources.landscape.large : props.article.thumbnail.sources.square.large}')`);

watch(responsive.isDesktop, (value, prevValue) => {
  if (value !== prevValue)
    thumbnail.value = `url('${value == true ? props.article.thumbnail.sources.landscape.large : props.article.thumbnail.sources.square.large}')`;
});

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
