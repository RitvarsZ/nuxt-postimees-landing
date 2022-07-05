<template>
  <div>
    <div class="overlay">
      <div class="min-h-[36em] px-16 py-16 flex items-end">
        <h1 class="text-white font-bold text-4xl leading-10 inline-block">
          <slot name="title"></slot>
        </h1>
      </div>
    </div>
    <div class="flex flex-nowrap" :class="xReverse ? 'flex-row-reverse' : ''">
      <div class="bg-dark px-16 py-4 text-white text-lg w-3/4">
        <slot name="lead"></slot>
      </div>
      <div class="flex items-center justify-center bg-blue w-1/4">
        <ArticleNumber>
          <slot name="index"></slot>
        </ArticleNumber>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  xReverse: Boolean
});

</script>

<style scoped>
.overlay {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.902) 0%, rgba(0, 0, 0, 0.18039) 100%);
}
</style>