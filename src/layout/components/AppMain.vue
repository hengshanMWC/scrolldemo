<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { NLayoutContent } from 'naive-ui'

const route = useRoute()
const key = computed(() => {
  return route.path
})
</script>

<template>
  <NLayoutContent class="app-main px-4">
    <RouterView v-slot="{ Component }">
      <component :is="Component" :key="key" class="main-content" />
    </RouterView>
  </NLayoutContent>
</template>

<style scoped>
.app-main {
  position: relative;
  width: var(--max-width);
  max-width: var(--max-width);
  height: calc(100vh - var(--header-height) * 2);
  max-height: calc(100vh - var(--header-height) * 2);
}
</style>
