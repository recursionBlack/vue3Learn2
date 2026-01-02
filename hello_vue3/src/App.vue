<template>
  <!-- html -->
  <!-- <Person a="哈哈" :list="personList" /> -->
  <!-- 配合子组件，不传list的情况 -->
  <Person a="哈哈" />
</template>

<script lang="ts" setup>
// js或ts
import Person from './components/Person.vue'
import { reactive } from 'vue'
import { type Persons } from '@/types'

let personList = reactive<Persons>([
  { id: 'adsfqwer01', name: '张三', age: 60 },
  { id: 'adsfqwer02', name: '李四', age: 32 },
  { id: 'adsfqwer03', name: '王五', age: 18 },
])
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
