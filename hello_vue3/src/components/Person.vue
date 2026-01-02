<template>
  <div class="person">
    姓：<input type="text" v-model="firstname" /> <br />
    名：<input type="text" v-model="lastname" /> <br />
    全名：<span>{{ fullname }}</span> <br />
    <button @click="changeFullName">修改全名</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

let firstname = ref('zhang')
let lastname = ref('san')

// 计算属性是有缓存的，方法是没缓存的，这就导致了，每次渲染，方法都要重新计算一遍，而计算属性则是直接取缓存，
// 这么定义计算属性是只读的
// let fullname = computed(() => {
//   return firstname.value.slice(0, 1).toUpperCase() + firstname.value.slice(1) + '-' + lastname.value
// })

// 可以定义成一个可读可写的计算属性
let fullname = computed({
  get() {
    return (
      firstname.value.slice(0, 1).toUpperCase() + firstname.value.slice(1) + '-' + lastname.value
    )
  },
  set(val) {
    const [str1, str2] = val.split('-')
    firstname.value = str1 as string
    lastname.value = str2 as string
  },
})

const changeFullName = () => {
  // 计算属性也是一个响应式对象哦，其变化依赖于所用到的响应式数据
  fullname.value = 'li-si'
}
</script>
