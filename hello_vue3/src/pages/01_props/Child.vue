<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>玩具： {{ toy }}</h4>
    <h4>父给的车： {{ car }}</h4>
    <button @click="sendToy(toy)">把玩具交给父亲</button>
  </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from 'vue'
// 数据
let toy = ref('奥特曼')
// 声明接收props
let props = defineProps(['car', 'sendToy'])
// 父传子简单，直接传值，传的是非函数
// 子传父，比较麻烦，需要先父传子，给子传过来一个回调
// 仅适用于父子直接相传的，如果隔代了，比如爷传孙，就不适合用props进行传递了，比较臃肿
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>
