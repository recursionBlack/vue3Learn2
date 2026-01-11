<template>
  <div class="Sum">
    <h2>当前求和为：{{ count }},放大十倍后：{{ bigSum }}</h2>
    <h3>欢迎来到：{{ school }}, 坐落于：{{ address }},大写:{{ upperSchool }}</h3>

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
import { useSumStore } from '@/store/Sum'
import { storeToRefs } from 'pinia'

const sumStore = useSumStore()
// count 虽然是ref数据，但由于sumStore是reactive数据，会将内部的ref数据自动解包，所以获取其值就不用.value了
console.log(sumStore.count)

// 这里要用storeToRefs,而不要用toRefs, 前者是pinia专门写的，只将数据转为响应式
// 后者则会将sumStore里的所有成员，尤其是方法，还有我们不关注的属性和函数，也给转成响应式的，代价很大
const { count, school, address, bigSum, upperSchool } = storeToRefs(sumStore)

let n = ref(1)

const add = () => {
  sumStore.increment(n.value)
}

const minus = () => {
  sumStore.count -= n.value
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
