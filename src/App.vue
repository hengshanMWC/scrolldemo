<script setup>
import { NConfigProvider, NMessageProvider } from 'naive-ui'

import ContainerVue from './Container'
</script>

<template>
  <NConfigProvider>
    <NMessageProvider>
      <ContainerVue></ContainerVue>
    </NMessageProvider>
  </NConfigProvider>
</template>
