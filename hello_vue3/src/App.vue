<template>
  <!-- html -->
  <Person v-if="isShow" />
</template>

<script lang="ts" setup>
// js或ts
import Person from './components/Person.vue'
import { ref, onMounted } from 'vue'

let isShow = ref(true)

// 挂载完毕
onMounted(() => {
  console.log('父---挂载完毕hook')
})
// 子先解析，先挂载，等所有的子组件解析完毕后，才执行父组件的解析，所以app.vue永远是最后挂载的
</script>

<style scoped>
/* 样式 */
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
