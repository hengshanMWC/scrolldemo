<script setup>
import { NLayout } from 'naive-ui'
import { AppMain, Footer, Header } from './components/index'
</script>

<template>
  <NLayout class="h-screen layout-box overs">
    <div class="flex flex-col">
      <Header />
      <AppMain class="main-box" />
    </div>
    <Footer />
  </NLayout>
</template>

<style lang="scss">
.layout-box {
  min-width: var(--max-width);

  .n-layout-scroll-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

.main-box {
  align-self: center;
}
</style>
