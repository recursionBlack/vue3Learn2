<template>
  <div class="grand-child">
    <h3>孙组件</h3>
    <h4>银子：{{ money }}</h4>
    <h4>车子:一辆{{ y.brand }}车，价值{{ y.price }}万元</h4>
    <button @click="updateMoney(6)">花爷爷的money</button>
  </div>
</template>

<script setup lang="ts" name="GrandChild">
import { inject } from 'vue'

// 接收祖上通过provide提供的数据, 第二个参数，保证如果祖上没有穿过来对应的数据，也有一个默认值
let { money, updateMoney } = inject('moneyContext', { money: 0, updateMoney: (x: number) => {} })
let y = inject('che', { brand: '未知', price: 0 })
</script>

<style scoped>
.grand-child {
  margin-top: 20px;
  background-color: orange;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
}
</style>
