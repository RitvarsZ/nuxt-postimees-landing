<template>
    <div>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
    const SectionAPI = 'https://services.postimees.ee/rest/v1/sections/81'
    const ArticlesAPI = 'https://services.postimees.ee/rest/v1/sections/81/editorsChoice/articles?limit=5';

    const { data: articlesRes } = await useFetch<IArticle[]>(ArticlesAPI);
    const { data: sectionRes } = await useFetch<ISection>(SectionAPI, {
        transform: (data: any) => ({
            titleBar: data.meta.titleBar,
            social: data.meta.social,
            description: data.description
        }),
        key: 'section',
    });

    const articles = articlesRes.value as IArticle[];
    const section = sectionRes.value as ISection;

    useState('section', () => section);
    useState('articles', () => articles);
</script>
