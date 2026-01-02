<template>
  <!-- html -->
  <Person ref="ren" />
  <button @click="showLog">点我查看Person的defineExpose</button>
</template>

<script lang="ts" setup>
// js或ts
import Person from './components/Person.vue'
import { ref } from 'vue'

// 定义ref对象，获取组件标签，进行操控
let ren = ref()

// 组件标签也能通过ref进行操控，但要显示的数据，必须是子组件主动暴露给父组件的
const showLog = () => {
  console.log(ren.value)
}
</script>

<style>
/* 样式 */
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
