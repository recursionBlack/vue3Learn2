<template>
  <div class="child">
    <h2>我是子组件</h2>
    <h3>当前求和为：{{ sum }}</h3>
  </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from 'vue'
import axios from 'axios'

let sum = ref(0)
// 网络链接进不去
let {
  data: { content },
} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
console.log(content)

// suspense, 如果子组件内，的setup函数中，直接写了await 由于vue3中，无法自己写setup函数了，所以缺少了一个async,
// 在该组件外部，就要使用suspense包裹，以表明该组件是一个异步组件
</script>

<style scoped>
.child {
  background-color: skyblue;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px;
}
</style>
