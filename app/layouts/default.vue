<template>
  <div>
    <Head>
      <Title>{{ section.titleBar }}</Title>
      <Meta name="description" :content="section.description" />
    </Head>
    <header>
      <Navbar :titleBar="section.titleBar" :social="section.social" />
    </header>
    <slot />
  </div>
</template>

<script setup lang="ts">
  const section = useState<ISection>('section');
</script>
