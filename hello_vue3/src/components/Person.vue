<template>
  <div class="person">
    <h1>情况五：通过数组监视以上所有数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车: {{ person.car.c1 }} 、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第一台车</button>
    <button @click="changeCar">修改整个车</button>
  </div>
</template>

<script setup lang="ts">
import { watch, reactive } from 'vue'

let person = reactive({
  name: '张三',
  age: 18,
  car: {
    c1: '奔驰',
    c2: '宝马',
  },
})

const changeName = () => {
  person.name += '~'
}
const changeAge = () => {
  person.age += 1
}
const changeC1 = () => {
  person.car.c1 = '奥迪'
}
const changeC2 = () => {
  person.car.c2 = '大众'
}
const changeCar = () => {
  person.car = { c1: '雅迪', c2: '爱马' }
}

// watch 情况五，监视上述多个数据,用数组框住
watch(
  [() => person.name, () => person.car.c1],
  (newValue, oldValue) => {
    console.log('person.car变化了', newValue, oldValue)
  },
  { deep: true },
)
</script>
