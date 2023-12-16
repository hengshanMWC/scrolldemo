<script setup>
import { onMounted, ref } from 'vue'
import BScroll from '@better-scroll/core'

let bscroll

const bscrollRef = ref()
onMounted(() => {
  bscroll = new BScroll(bscrollRef.value, {
    pullDownRefresh: true,
    pullUpLoad: true,
  })
  bscroll.refresh()
  bscroll.on('pullingDown', () => {
    console.log('pullingDown')
  })
  bscroll.on('scroll', () => {
    console.log('scroll')
  })
  bscroll.on('pullingUp', () => {
    console.log('pullingUp')
  })
})
</script>

<template>
  <div class="flex flex-col flex-auto justify-between overflow-hidden">
    <div class="flex justify-between items-center pb-3">123</div>
    <div class="flex flex-col flex-auto justify-between overflow-hidden">
      <div ref="bscrollRef" class="h-full relative overflow-hidden">
        <div class="bg-red h-[10000px]"></div>
      </div>
    </div>
  </div>
</template>
