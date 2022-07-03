<template>
    <div>

        <Head>
            <Title>{{ section.titleBar }}</Title>
            <Meta name="description" :content="section.description" />
        </Head>

        <Navbar :titleBar="section.titleBar" :social="section.social" />
        <Jumbotron />
        <Article v-for="article in articles" :key="article.id" :article="article" />
    </div>
</template>

<script setup lang="ts">

const SectionAPI = 'https://services.postimees.ee/rest/v1/sections/81'
const ArticlesAPI = 'https://services.postimees.ee/rest/v1/sections/81/editorsChoice/articles?limit=5';

const { data: articles } = await useFetch<IArticle[]>(ArticlesAPI);
const { data: section } = await useFetch<ISection>(SectionAPI, {
    transform: (data: any) => ({
        titleBar: data.meta.titleBar,
        social: data.meta.social,
        description: data.description
    }),
    key: 'section',
});

</script>