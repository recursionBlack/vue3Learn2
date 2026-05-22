<template>
  <input type="text" :value="ming" @input="emits('update:ming', $event.target.value)" />
  <br />
  <input type="text" :value="mima" @input="emits('update:mima', $event.target.value)" />
</template>

<script setup lang="en" name="AtguiguInput">
defineProps(['ming', 'mima'])
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
