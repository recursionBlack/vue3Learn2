<template>
  <div class="child"">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
  </div>
</template>

<script setup lang="ts" name="child">
import { ref, onMounted } from 'vue'
// 数据
let toy = ref('奥特曼')
// 声明事件
const emits =defineEmits(['send-toy'])
// 自定义事件，主要用来从子类给父类传递数据，props父传子很方便，emit是子传父很方便，适合搭配使用

// 组件挂载后3s，触发
onMounted(()=>{
    setTimeout(()=>{
        emits('send-toy', toy)
    }, 3000)
})
</script>

<style scoped>
.child {
  margin-top: 10px;
  background-color: rgb(76,209,76);
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>