<template>
    <div>
        <Jumbotron />
        <Article v-for="article, i in articles" :key="article.id" :index="i" :article="article" />
    </div>
</template>

<script setup lang="ts">
    const articles = useState<IArticle[]>('articles');

</script>
