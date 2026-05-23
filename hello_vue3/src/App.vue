<template>
  <div class="app">
    <h2>当前sum1求和为：{{ sum1 }}</h2>
    <h2>当前sum2求和为：{{ sum2 }}</h2>
    <button @click="changeSum1">点我sum1+1</button>
    <button @click="changeSum2">点我sum2+1</button>
  </div>
</template>

<script setup lang="ts" name="App">
import { ref, readonly, shallowReadonly } from 'vue'

let sum1 = ref(0)
// readonly要求参数必须是响应式数据，不能是纯数值
let sum2 = readonly(sum1)

function changeSum1() {
  sum1.value += 1
}

function changeSum2() {
  // 这里就无法修改了，但为了演示才这么写的
  sum2.value += 1
}
</script>

<style scoped>
.app {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
button {
  margin-right: 5px;
}
</style>
