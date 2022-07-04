<template>
    <div class="bg-cyan-500 h-16 md:h-12 flex flex-nowrap overflow-hidden">
        <div class="space-y-1 p-5 md:p-3 flex flex-col self-center hover:bg-cyan-400">
            <div class="w-6 h-1 rounded-full bg-white"></div>
            <div class="w-6 h-1 rounded-full bg-white"></div>
            <div class="w-6 h-1 rounded-full bg-white"></div>
        </div>

        <div class="ml-1 p-5 md:p-3 pl-0">
            <IconLink linkUrl="https://postimees.ee" imgUrl="/logo.png" imgAlt="Postimees logo" />
        </div>

        <div class="flex-grow-0 sm:flex-grow"></div>
        <div class="p-5 md:p-3 text-white hidden md:block whitespace-nowrap">{{ titleBar }}</div>
        <div class="flex-grow"></div>

        <div class="p-5 pr-0 md:p-3" @click="socialVisibleOnMobile = !socialVisibleOnMobile">
            <img src="/icons/share.png" alt="share" class="h-6 md:hidden">
            <div class="flex gap-2 h-6">
                <IconLink :linkUrl="social.facebook" imgUrl="/icons/Facebook.png" imgAlt="Facebook"
                    class="hidden md:block" />
                <IconLink :linkUrl="social.twitter" imgUrl="/icons/Twitter.png" imgAlt="Twitter"
                    class="hidden md:block" />
                <IconLink linkUrl="#" imgUrl="/icons/Email.png" imgAlt="Email" class="hidden md:block" />
            </div>
        </div>
        <div v-if="socialVisibleOnMobile"
            class="md:hidden absolute top-16 right-12 bg-cyan-500 flex flex-col gap-1 p-2">
            <IconLink :linkUrl="social.facebook" imgUrl="/icons/Facebook.png" imgAlt="Facebook" />
            <IconLink :linkUrl="social.twitter" imgUrl="/icons/Twitter.png" imgAlt="Twitter" />
            <IconLink linkUrl="#" imgUrl="/icons/Email.png" imgAlt="Email" />
        </div>

        <div class="p-5 md:p-3 md:border-l border-cyan-300 hover:bg-cyan-400 flex">
            <IconLink linkUrl="https://secure.postimees.ee" imgUrl="/icons/avatar.png" imgAlt="Avatar"
                imgClass="block md:hidden">
                <p class="hidden md:block text-white font-bold whitespace-nowrap text-sm">LOGI SISSE</p>
            </IconLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
    titleBar: String,
    social: {
        type: Object as PropType<ISection['social']>
    }
});

const socialVisibleOnMobile = ref(false);
</script>
