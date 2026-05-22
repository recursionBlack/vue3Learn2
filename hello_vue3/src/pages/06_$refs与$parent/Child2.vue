<template>
  <div class="child2">
    <h3>子组件2</h3>
    <h4>电脑： {{ dell }}</h4>
    <h4>书籍本：{{ book }}</h4>
  </div>
</template>

<script setup lang="en" name="Child">
import {ref} from 'vue'

let computer = ref('dell')
let book = ref(6)
// 把数据暴露给外部
defineExpose({computer,book})
</script>

<style scoped>
.chlld2 {
  margin-top: 20px;
  background-color: orange;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
}
</style>
