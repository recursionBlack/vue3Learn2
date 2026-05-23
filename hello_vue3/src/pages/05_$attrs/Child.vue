<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>b: {{ b }}</h4>
    <h4>其他：{{ $attrs }}</h4>
    <GrandChild v-bind="$attrs" />
  </div>
</template>

<script setup lang="ts" name="Child">
import GrandChild from './GrandChild.vue'

defineProps(['b'])

// attrs是Props的补集，如果子组件仅仅接收部分父组件的数据，那么，未选择接收的数据，并未被丢弃，
// 而是存储到了attrs，子组件如果还有孙组件，则可以将这些漏掉的数据传给孙组件
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
