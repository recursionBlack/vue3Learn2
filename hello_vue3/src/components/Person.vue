<template>
  <div class="person">
    <h1>中国</h1>
    <h2 ref="title2">北京</h2>
    <h3>尚硅谷</h3>
    <button @click="showLog">点我输出h2这个元素</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 创建一个title2用于存储ref标记的内容
// 操控原生的html DOM标签
let title2 = ref()

let a = ref(0)
let b = ref(10)
let c = ref(77)

const showLog = () => {
  console.log(title2.value)
}

defineExpose({ a, b })
</script>
