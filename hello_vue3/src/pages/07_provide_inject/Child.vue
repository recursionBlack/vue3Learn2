<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>a: {{ a }}</h4>

    <GrandChild />
  </div>
</template>

<script setup lang="en" name="Child">
import GrandChild from './GrandChild.vue';

// 相比于$attrs，provide_inject的中间商不用参与任何修改，直接被绕过
</script>

<style scoped>
.chlld {
  margin-top: 20px;
  background-color: skyblue;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
}
</style>
