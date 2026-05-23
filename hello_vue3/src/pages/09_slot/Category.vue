<template>
  <div class="category">
    <h3>子组件</h3>
    <h2>{{ title }}</h2>
    <!-- 承接插槽内容，模板形式实现的回调函数 -->
    <slot>默认内容</slot>
  </div>
</template>

<script setup lang="ts" name="Category">
defineProps(['title'])
</script>

<style scoped>
.category {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
  width: 200px;
  height: 300px;
}
h2 {
  background-color: orange;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
}
</style>
