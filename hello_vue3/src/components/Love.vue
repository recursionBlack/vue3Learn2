<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import axios from 'axios'
import { nanoid } from 'nanoid'
import { useTalkStore } from '@/store/loveTalk'

const talkStore = useTalkStore()

const getLoveTalk = async () => {
  // 发请求
  // 给的网页链接又是无法获取的
  //   await axios.get('https://api.uomg.com/api/rand.qinghua?format=json').then((response) => {
  //     let { data } = response // 响应对象里才有 data
  //     console.log(data.content)
  //     let obj = { id: nanoid(), title: data.content }
  //     // talkList.unshift(obj)
  //   })
}
</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
