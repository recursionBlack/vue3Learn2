<template>
  <div class="child1">
    <h3>子组件1</h3>
    <h4>玩具： {{ toy }}</h4>
    <h4>书籍本：{{ book }}</h4>
    <!-- $parent用来获取当前组件的父组件 -->
    <button @click="minusHouse($parent)">干掉父亲的一套房产</button>
  </div>
</template>

<script setup lang="ts" name="Child1">
import { ref } from 'vue'

let toy = ref('奥特曼')
let book = ref(3)

function minusHouse(parent: any) {
  parent.house -= 1
}

// 把数据暴露给外部
defineExpose({ toy, book })
</script>

<style scoped>
.chlld1 {
  margin-top: 20px;
  background-color: skyblue;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
}
</style>
