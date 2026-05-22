<template>
  <div class="category">
    <h3>子组件</h3>
    <slot name="s1">默认内容1</slot>
    <!-- 承接插槽内容，模板形式实现的回调函数 -->
    <slot name="s2">默认内容2</slot>
    <!-- 具名插槽主要解决，子组件存在多个 slot时，父组件的数据该传给哪个的问题-->
  </div>
</template>

<script setup lang="en" name="Category">
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
</style>
