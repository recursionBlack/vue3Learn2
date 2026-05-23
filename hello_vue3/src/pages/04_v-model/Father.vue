<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>{{ username }}</h4>
    <!-- v-model用在html标签上 -->
    <!-- <input type="text" v-model="username" /> -->
    <!-- 下一行是v-model的底层原理，从代码到页面，和从页面到代码的双向绑定 -->
    <!-- <input type="text" :value="username" @input="username = $event.target.value" /> -->

    <!-- v-model用在组件标签上 -->
    <!-- <AtguiguInput v-model="username" /> -->
    <!-- 下面是组件v-model的实现原理 -->
    <!-- <AtguiguInput :modelValue="username" @update:modelValue="username = $event" /> -->

    <!-- 修改modelValue -->
    <AtguiguInput v-model:ming="username" v-model:mima="password" />
  </div>
</template>

<script setup lang="ts" name="Father">
import { ref } from 'vue'
import AtguiguInput from './AtguiguInput.vue'
// 数据
let username = ref('zhangsan')
let password = ref('123456')

// $event到底是啥？？？啥时候能.target???
// 对于原生事件,$event就是事件对象
// 对于自定义事件，$event就是触发事件时，所传递的数据，不能.target
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
