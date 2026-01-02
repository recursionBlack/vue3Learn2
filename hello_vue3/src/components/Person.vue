<template>
  <div class="person">
    <h2>当前求和为{{ sum }}</h2>
    <button @click="add">点我sum+1</button>
    <hr />
    <img v-for="(dog, index) in dogList" :src="dog" :key="index" />
    <hr />
    <button @click="getDog">再来一只修狗</button>
  </div>
</template>

<script setup lang="ts">
import useSum from '@/hooks/useSum'
import useDog from '@/hooks/useDog'

// 自定义hook的本质，就是一个一个可以调用的函数
// 正是有了hooks，才叫组合式api
const { sum, add } = useSum()
const { dogList, getDog } = useDog()
</script>

<style scoped>
.img {
  height: 100px;
  margin-right: 10px;
}
</style>
