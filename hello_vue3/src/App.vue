<template>
  <div class="app">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="person.age += 1">修改年龄</button>
    <hr />
    <h2>{{ car2 }}</h2>
    <button @click="changePrice">点我价格+10</button>
  </div>
</template>

<script setup lang="ts" name="App">
import { reactive, toRaw, markRaw } from 'vue'
import mockjs from 'mockjs'

let person = reactive({ name: 'tony', age: 18 })

// roRaw：用于获取 一个响应式对象的原始数据
// 通常用于，你想修改数据，但又不想立即将变化显示到页面上的情况
// 在需要将响应式对象传递给非vue的库，或外部系统时，使用toRaw可以保证向外传递的是普通对象
let rawPerson = toRaw(person)

console.log('响应式数据:', person)
console.log('原始数据:', rawPerson)

// markRaw:标记一个对象，使其永远不能做成响应式的对象
let car = markRaw({ brand: '奔驰', price: 100 })
let car2 = reactive(car)

console.log(car)
console.log(car2)

let mockJs = markRaw(mockjs)

console.log(mockJs)

function changePrice() {
  car2.price += 10
}
</script>

<style scoped>
.app {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
button {
  margin-right: 5px;
}
</style>
