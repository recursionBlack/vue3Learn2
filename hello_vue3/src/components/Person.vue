<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我sum+1</button>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue'

let sum = ref(0)

const add = () => {
  sum.value++
}

// 创建  setup
console.log('创建hook')

// 挂载前
onBeforeMount(() => {
  console.log('挂载前hook')
})

// 挂载完毕
onMounted(() => {
  console.log('子---挂载完毕hook')
})

// 更新前
onBeforeUpdate(() => {
  console.log('更新前hook')
})

// 更新完毕
onUpdated(() => {
  console.log('更新完毕hook')
})

// 卸载前
onBeforeUnmount(() => {
  console.log('卸载前hook')
})

// 卸载完毕
onUnmounted(() => {
  console.log('卸载完毕hook')
})
</script>
