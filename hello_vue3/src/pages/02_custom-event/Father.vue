<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>子给的玩具：{{ toy }}</h4>
    <!-- 给子组件绑定自定义事件 -->
    <Child @send-toy="saveToy" />
  </div>
</template>

<script setup lang="ts" name="father">
import Child from './Child.vue'
import { ref } from 'vue'

let toy = ref('')
// 用于保存从子类传递过来的玩具
function saveToy(value: string) {
  // value：子组件emit发送的第二个参数
  console.log('saveToy', value)
  toy.value = value
}
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}

.father button {
  margin-right: 5px;
}
</style>
