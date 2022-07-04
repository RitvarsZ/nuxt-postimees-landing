export default defineEventHandler(async () => {
    const ARTICLES_API = 'https://services.postimees.ee/rest/v1/sections/81/editorsChoice/articles?limit=6';
    const data:IArticle[] = await $fetch(ARTICLES_API);

    return data;
})