<template>
    <div>
        <LeadArticle :article="articles[0]" />
        <Article v-for="article, i in articles" :key="article.id" :index="i" :article="article" />
    </div>
</template>

<script setup lang="ts">
    const { data: articles } = await useFetch<IArticle[]>('/api/articles');
</script>
