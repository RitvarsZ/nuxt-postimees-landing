const ARTICLES_API = 'https://services.postimees.ee/rest/v1/sections/81/editorsChoice/articles?limit=6';
const articleLayouts:IArticleLayout[] = [
    {
        component: 'ArticleLayoutSimple',
        props: {
            xReverse: false
        }
    }, {
        component: 'ArticleLayoutFiller',
        props: {
            xReverse: true,
            yReverse: false
        }
    }, {
        component: 'ArticleLayoutSimple',
        props: {
            xReverse: false
        }
    }, {
        component: 'ArticleLayoutTransp',
        props: {
            xReverse: true,
            yReverse: true
        }
    },{
        component: 'ArticleLayoutSimple',
        props: {
            xReverse: false
        }
    },
]

export default defineEventHandler(async () => {
    const data:IArticle[] = await $fetch(ARTICLES_API);
    const leadArticle:IArticle = data.shift();

    return { leadArticle, data, articleLayouts };
})