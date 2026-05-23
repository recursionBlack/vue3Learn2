<template>
  <div class="app">
    <h2>我是App组件</h2>
    <Suspense>
      <!-- 异步结果回来后显示该行 -->
      <template v-slot:default>
        <Child />
      </template>
      <!-- 异步结果暂未回来时显示该行 -->
      <template v-slot:fallback>
        <h3>加载中......</h3>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts" name="App">
import { Suspense } from 'vue'
import Child from './Child.vue'
</script>

<style>
.app {
  background-color: #ddd;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px;
}
</style>
