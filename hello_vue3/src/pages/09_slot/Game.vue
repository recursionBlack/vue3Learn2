<template>
  <div class="game">
    <h2>游戏列表</h2>
    <slot :youxi="games"></slot>
  </div>
</template>

<script setup lang="ts" name="Game">
import { reactive } from 'vue'

let games = reactive([
  { id: 'qwerasdf01', name: '英雄联盟' },
  { id: 'qwerasdf02', name: '王者农药' },
  { id: 'qwerasdf03', name: '红色警戒' },
  { id: 'qwerasdf04', name: '斗罗大陆' },
])
// 数据在子组件里，但根据数据生成的结构，却由父亲决定，这就是作用域不同的问题
// 所以要将数据，通过<slot里的参数，传递给父组件，类似于回调函数的定义，位于子组件里
// 父组件作为回调的调用者，来使用
// 作用域插槽和具名插槽是解决不同问题而设计的，所以也是可以有名字的
</script>

<style scoped>
.game {
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
