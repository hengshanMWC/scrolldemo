<script setup>
import { onMounted, ref } from 'vue'
import BScroll from '@better-scroll/core'
import PullDown from '@better-scroll/pull-down'
import Pullup from '@better-scroll/pull-up'

BScroll.use(PullDown)
BScroll.use(Pullup)

let bscroll

const bscrollRef = ref()
onMounted(() => {
  console.log(bscrollRef.value, 'bscrollRef.value')
  bscroll = new BScroll(bscrollRef.value, {
    pullDownRefresh: true,
    pullUpLoad: true,
  })
  bscroll.refresh()
  bscroll.on('pullingDown', () => {
    console.log('pullingDown')
  })
  bscroll.on('pullingUp', () => {
    console.log('pullingUp')
  })
  window.bscroll = bscroll
})
</script>

<template>
  <div class="flex flex-col flex-auto justify-between">
    <div class="flex justify-between items-center pb-3">123</div>
    <div class="flex flex-col flex-auto justify-between">
      <div ref="bscrollRef" class="h-[300px] relative">
        <div class="bg-red h-[10000px]"></div>
      </div>
    </div>
  </div>
</template>
