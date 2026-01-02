<template>
  <div class="person">
    <h1>情况三：监视reactive定义的对象类型数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>

<script setup lang="ts">
import { watch, reactive } from 'vue'

let person = reactive({
  name: '张三',
  age: 18,
})

const changeName = () => {
  person.name += '~'
}

const changeAge = () => {
  person.age++
}

const changePerson = () => {
  // ref的value实实在在的发生了变化，地址值是变了的
  // reactive仅仅是，将其属性进行了修改，对象的地址值没有发生任何变化
  Object.assign(person, { name: '李四', age: 90 })
}

// watch 监视reactive定义的对象类型数据，且默认开启深度监视的，ref则需要手动开启
// 该深度监视甚至无法关掉
watch(
  person,
  (newValue, oldValue) => {
    console.log('person变化了', newValue, oldValue)
  },
  { deep: false, immediate: true }, //深度监视,立即执行一次回调函数，
)
</script>
