<template>
  <div class="Sum">
    <h2>当前求和为：{{ sumStore.count }}</h2>
    <h3>欢迎来到：{{ sumStore.school }}, 坐落于：{{ sumStore.address }}</h3>

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

const sumStore = useSumStore()
// count 虽然是ref数据，但由于sumStore是reactive数据，会将内部的ref数据自动解包，所以获取其值就不用.value了
console.log(sumStore.count)

let n = ref(1)

const add = () => {
  // 第一种修改方式
  // sumStore.count += 1

  // 第二种:批量修改
  //   sumStore.$patch({
  //     count: 888,
  //     school: '尚硅谷',
  //     address: '北京',
  //   })

  // 第三种：actions修改
  sumStore.increment(n.value)
}

const minus = () => {
  //   count.value -= n.value
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
