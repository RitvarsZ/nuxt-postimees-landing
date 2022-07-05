<template>
  <div class="max-w-7xl m-auto bg-dark">
    <ArticleLeading :article="articles.leadArticle" />
    <Article v-for="article, i in articles.data" :key="article.id" :index="i + 1" :article="article"
      :layout="articles.articleLayouts[i]" />
  </div>
</template>

<script setup lang="ts">
const { data: articles } = await useFetch<{ leadArticle: IArticle, data: IArticle[], articleLayouts: IArticleLayout }>('/api/articles');
</script>
