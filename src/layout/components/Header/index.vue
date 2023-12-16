<script setup></script>

<template>
  <n-layout-header
    class="header z-[1] pr-8 pl-8 bottom-link flex justify-center"
  >
    <div class="header-content justify-between items-center flex px-4"></div>
  </n-layout-header>
</template>

<style scoped>
.header {
  height: var(--header-height);
  backdrop-filter: blur(4px);
  border-bottom: 1px solid var(--tab-border-color);
  box-shadow: 0 0 2px 2px #000;

  .arrange-boxs {
    @apply flex items-center;
  }

  .box-interval:not(:last-child) {
    @apply mr-6;
  }
}

.header-content {
  width: var(--max-width);
}
</style>
