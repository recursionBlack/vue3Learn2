<template>
  <div class="person"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 导入接口必须要加个type
// @表示根目录，src
import { type PersonItf } from '@/types'

let person: PersonItf = {
  id: 'adfasaf01',
  name: '张三',
  age: 60,
}

let personList: PersonItf[] = [
  {
    id: 'adfasaf01',
    name: '张三',
    age: 60,
  },
  {
    id: 'adfasaf02',
    name: '李四',
    age: 42,
  },
  {
    id: 'adfasaf03',
    name: '王五',
    age: 18,
  },
]
</script>
