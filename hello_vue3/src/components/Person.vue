<template>
  <div class="person">
    <h2>需求：当水温达到60度或水位达到80cm时，给服务器发请求</h2>
    <h2>当前水温：{{ temp }}°C</h2>
    <h2>当前水位：{{ height }} cm</h2>
    <button @click="changeTemp">点我水温+10</button>
    <button @click="changeHeight">点我水位+10</button>
  </div>
</template>

<script setup lang="ts">
import { watchEffect, ref } from 'vue'

let temp = ref(10)
let height = ref(0)

const changeTemp = () => {
  temp.value += 10
}

const changeHeight = () => {
  height.value += 10
}
// watchEffect与watch相比，watch需要亲口告诉它，需要监视谁，
// 而watchEffect会自动分析，回调内使用了哪些响应式，自动的进行监视
// 防止回调的函数体过大，要监视的数据太多，手写着麻烦
// 而且watchEffect会自动触发一次，类似于immediate
watchEffect(() => {
  if (temp.value > 60 || height.value > 80) {
    console.log('给服务器自动发送请求')
  }
})
</script>
