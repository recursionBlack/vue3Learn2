<template>
  <div class="person">
    <h1>情况三：监视reactive定义的对象类型数据</h1>
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

// watch监视响应式对象中的某个属性，且该属性是基本类型属性，要写成函数式
// watch(
//   () => person.name,
//   (newValue, oldValue) => {
//     console.log('person变化了', newValue, oldValue)
//   },
// )

// watch监视响应式对象中的某个属性,且该属性是对象类型的，可以直接写，也能写函数式，更推荐写函数式
// 结论：监视的要是对象里的属性，那么最好写函数式，如果要监视成员对象的成员，要手动开启深度监视
watch(
  () => person.car,
  (newValue, oldValue) => {
    console.log('person.car变化了', newValue, oldValue)
  },
  { deep: true },
)
</script>
