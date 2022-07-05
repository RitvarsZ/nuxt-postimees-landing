<template>
  <div class="flex flex-nowrap" :class="xReverse ? 'flex-row-reverse' : ''">
    <div class="w-3/4 overlay">
      <div class="min-h-[36em] px-16 py-16 flex flex-col justify-end">
        <h1 class="text-white font-bold text-4xl leading-10 block">
          <slot name="title"></slot>
        </h1>
        <slot name="lead"></slot>
      </div>
    </div>
    <div class="w-1/4 flex flex-col" :class="yReverse ? 'flex-col-reverse' : ''">
      <div class="bg-blue flex-auto">
        <slot name="filler"></slot>
      </div>

      <div ref="index" class="flex items-center justify-center bg-blue py-4">
        <ArticleNumber>
          <slot name="index"></slot>
        </ArticleNumber>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  xReverse: Boolean,
  yReverse: Boolean
});

</script>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>