export default defineEventHandler(async () => {
    const SECTION_API = 'https://services.postimees.ee/rest/v1/sections/81';
    const res:any = await $fetch(SECTION_API);

    const data:ISection = {
        titleBar: res.meta.titleBar,
        social: res.meta.social,
        description: res.description
    };

    return data;
})