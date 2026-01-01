<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>地址：{{ address }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 数据
let name = ref('张三')
let age = ref(18)
let tel = '138888888'
let address = '北京昌平区宏福苑-宏福科技园'

const changeName = () => {
  name.value = 'zhang-san'
}

const changeAge = () => {
  age.value++
}

const showTel = () => {
  alert(tel)
}
</script>
