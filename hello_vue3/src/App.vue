<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg" />
  </div>
</template>

<script setup lang="ts" name="App">
import { reactive, customRef } from 'vue'

// 使用vue提供的默认ref定义响应式数据，数据一变化，界面立马更新
// let msg = ref('你好')
import useMsgRef from './useMsgRef'

// 使用useMsgRef来定义一个响应式数据，且有一定的延时效果
let { msg } = useMsgRef('尚硅谷', 2000)
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
