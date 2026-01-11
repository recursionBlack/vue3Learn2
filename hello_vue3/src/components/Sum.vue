<template>
  <div class="Sum">
    <h2>当前求和为：{{ count }}</h2>
    <!-- .number:将收集到的东西，尽量转成数字，否则会成字符串的拼接 -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let count = ref(1)
let n = ref(1)

const add = () => {
  count.value += n.value
}

const minus = () => {
  count.value -= n.value
}
</script>

<style scoped>
.Sum {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
select,
button {
  margin: 0 5px;
  height: 25px;
}
</style>
