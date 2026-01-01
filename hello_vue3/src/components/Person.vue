<template>
  <div class="person">
    <h2>一辆{{ car.brand }}车，价值：{{ car.price }}元</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br />
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
    <button @click="changeGameName">修改第一个游戏的名字</button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

let car = reactive({ brand: '奔驰', price: 100 })
let games = reactive([
  { id: '001', name: '王者荣耀' },
  { id: '002', name: '原神' },
  { id: '003', name: '三国杀' },
])

const changePrice = () => {
  car.price += 10
}

const changeGameName = () => {
  games[0].name = '流星蝴蝶剑'
}
</script>
