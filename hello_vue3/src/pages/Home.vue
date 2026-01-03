<template>
  <div class="home">
    <img src="https://www.atguigu.com/images/index_new/logo.png" alt="" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
// 获取路由器句柄
const router = useRouter()

// onMounted(() => {
//   setTimeout(() => {
//     // 编程式路由导航
//     router.push('/news')
//   }, 3000)
// })
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
