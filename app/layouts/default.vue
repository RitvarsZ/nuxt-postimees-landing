<template>
  <div>
    <Head>
      <Title>{{ meta.titleBar }}</Title>
      <Meta name="description" :content="meta.description" />
    </Head>
    <header>
      <Navbar :titleBar="meta.titleBar" :social="meta.social" />
    </header>
    <slot />
  </div>
</template>

<script setup lang="ts">
  const { data: meta } = await useFetch<ISection>('/api/meta');
</script>
