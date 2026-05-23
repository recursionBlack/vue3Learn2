<template>
  <input
    type="text"
    :value="ming"
    @input="emits('update:ming', ($event.target as HTMLInputElement).value)"
  />
  <br />
  <input
    type="text"
    :value="mima"
    @input="emits('update:mima', ($event.target as HTMLInputElement).value)"
  />
</template>

<script setup lang="ts" name="AtguiguInput">
defineProps(['ming', 'mima'])
// update:ming是个信号，这个信号比较特殊，前面的update:是固定格式，但冒号后面的就可以自行修改
// 这就是v-model的底层原理
const emits = defineEmits(['update:ming', 'update:mima'])

// 自己实现的组件库，通常由UI人员写。
</script>

<style scoped>
.input {
  border: 2px solid black;
  background-image: linear-gradient(45deg, red, yellow, green);
  height: 30px;
  font-size: 20px;
  color: white;
}
</style>
