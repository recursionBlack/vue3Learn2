<template>
  <div class="person">
    <h1>情况一：监视ref定义的基本类型</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'

let sum = ref(0)

const changeSum = () => {
  sum.value++
}

// watch ，sum不要.value
const stopWatch = watch(sum, (newValue, oldValue) => {
  console.log('sum变化了', newValue, oldValue)

  // watch返回一个停止监视的函数
  if (newValue > 5) {
    stopWatch()
  }
})
</script>
