<template>
  <input type="text" :value="modelValue" @input="emits('update:modelValue', $event.target.value)" />
</template>

<script setup lang="ts" name="AtguiguInput">
defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])

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
