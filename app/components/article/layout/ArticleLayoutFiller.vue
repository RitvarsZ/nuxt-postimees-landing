<template>
  <div class="flex flex-nowrap" :class="xReverse ? 'flex-row-reverse' : ''">
    <div class="w-3/4">
      <div class="min-h-[36em] px-16 py-16 flex items-end overlay">
        <h1 class="text-white font-bold text-4xl leading-10 inline-block">
          <slot name="title"></slot>
        </h1>
      </div>

      <div ref="lead" class="bg-dark px-16 py-4 text-white text-lg">
        <slot name="lead"></slot>
      </div>
    </div>
    <div class="w-1/4 flex flex-col" :class="yReverse ? 'flex-col-reverse' : ''">
      <div class="bg-blue flex-auto">
        <slot name="filler"></slot>
      </div>

      <div ref="index" class="flex items-center justify-center bg-blue">
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
onMounted(() => {
  updateHeight();
  window.addEventListener('resize', updateHeight);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateHeight);
});

const lead = ref<HTMLInputElement | null>(null);
const index = ref<HTMLInputElement | null>(null);

function updateHeight() {
  index.value.style.height = `${lead.value.clientHeight}px`;
}

</script>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>