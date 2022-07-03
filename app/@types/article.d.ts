declare interface IArticle {
    id: number,
    articleLead: Array<{
        html: string,
        type: string,
        wordCount: number
    }>,
    headline: string,
    thumbnail: {
        sources: {
            landscape: {
                medium: string,
                large: string
            },
            square: {
                medium: string,
                large: string
            },
        },
        title: { et: string }
    }
}
