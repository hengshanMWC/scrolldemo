<script setup></script>

<template>
  <div class="mt-6 flex flex-col h-full overflow-hidden">
    <RouterView v-slot="{ Component }">
      <component :is="Component"></component>
    </RouterView>
  </div>
</template>
