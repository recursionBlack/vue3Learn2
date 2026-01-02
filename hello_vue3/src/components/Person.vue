<template>
  <div class="person">
    <h1>情况二：监视ref定义的对象类型数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'

let person = ref({
  name: '张三',
  age: 18,
})

const changeName = () => {
  person.value.name += '~'
}

const changeAge = () => {
  person.value.age++
}

const changePerson = () => {
  person.value = { name: '李四', age: 90 }
}

// watch 监视ref定义的对象类型数据，监视的是对象的地址值，
// 若想监视对象内部属性的变化，需要手动开启深度监视
// watch 第一个参数，待监视的数据
// 第二个参数，回调函数
// 第三个参数，配置对象，（deep,immedidate等等)
watch(
  person,
  (newValue, oldValue) => {
    console.log('person变化', newValue, oldValue)
  },
  { deep: true, immediate: true }, //深度监视,立即执行一次回调函数，
)
</script>
