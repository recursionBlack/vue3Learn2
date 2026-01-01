<template>
  <div class="person">
    <h2>一辆{{ car.brand }}车，价值：{{ car.price }}元</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeBrand">修改汽车的品牌</button>
    <button @click="changeCar">修改汽车</button>
    <br />
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
    <button @click="changeGameName">修改第一个游戏的名字</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

let car = reactive({ brand: '奔驰', price: 100 })
let sum = ref(0)
let games = ref([
  { id: '001', name: '王者荣耀' },
  { id: '002', name: '原神' },
  { id: '003', name: '三国杀' },
])

const changePrice = () => {
  car.price += 10
}

const changeBrand = () => {
  car.brand = '宝马'
}

const changeCar = () => {
  //car = { brand: '雅迪', price: 5 }
  // reactive 的对象不能直接修改，必须要用Object.assign进行替换
  Object.assign(car, { brand: '雅迪', price: 5 })
}

const changeGameName = () => {
  games.value[0].name = '流星蝴蝶剑'
}

const changeSum = () => {
  sum.value++
}
</script>
