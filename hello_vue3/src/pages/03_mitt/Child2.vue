<template>
  <div class="child2">
    <h3>子组件2</h3>
    <h4>电脑： {{ computer }}</h4>
    <h4>哥哥给的玩具：{{ toy }}</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
import { ref, onUnmounted } from 'vue'
import emitter from '@/utils/emitter'

// 自身原有数据
let computer = ref('dell')
// 接收自外部组件的数据
let toy = ref('')
// 给emitter绑定send-toy事件
emitter.on('send-toy', (value: any) => {
  console.log('send-toy')
  toy.value = value
})

onUnmounted(() => {
  // 在组件卸载时，解绑send-toy事件，
  emitter.off('send-toy')
})
</script>

<style scoped>
.child2 {
  margin-top: 50px;
  background-color: orange;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>
