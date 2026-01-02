<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script setup lang="ts">
import { toRefs, reactive } from 'vue'

let person = reactive({
  name: '张三',
  age: 18,
})

// 解构式赋值后，每个属性失去了响应式
// let { name, age } = person
// toRefs将每个属性都变成响应式对象了
// 而且，name和person.name是同一个地址，类似于cpp里的引用
let { name, age } = toRefs(person)

const changeName = () => {
  name.value = 'zhang-san'
}

const changeAge = () => {
  age.value++
}
</script>
