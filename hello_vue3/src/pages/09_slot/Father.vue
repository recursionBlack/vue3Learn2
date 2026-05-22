<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <!-- 通常组件都是单标签，如果是双标签，则表示其中夹住的内容，是传递给子组件的内容，有点像回调函数 -->
      <Categroy title="热门游戏列表">
        <template v-slot:s2>
          <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
          </ul>
        </template>
        <template v-slot:s1> <h2>热门游戏列表</h2></template>
      </Categroy>
      <Categroy>
        <template v-slot:s1> <h2>今日美食城市</h2></template>
        <template v-slot:s2> <img :src="imgUrl" alt="" /></template>
      </Categroy>
      <Categroy>
        <!-- #是语法糖，跟v-slot:功能一样 -->
        <template #s2> <video :src="videoUrl" controls></video></template>
        <template #s1> <h2>今日影视推荐</h2></template>
      </Categroy>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import { ref, reactive } from 'vue'
import Categroy from './Category.vue'

let games = reactive([
  { id: 'qwerasdf01', name: '英雄联盟' },
  { id: 'qwerasdf02', name: '王者农药' },
  { id: 'qwerasdf03', name: '红色警戒' },
  { id: 'qwerasdf04', name: '斗罗大陆' },
])

let imgUrl = ref('https://z1.ax1x.com/2023/11/19piNxLo4.jpg')

let videoUrl = ref('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4')
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}

/* 横向排列，并均分开 */
.content {
  display: flex;
  justify-content: space-evenly;
}

img,
video {
  width: 100%;
  justify-content: space-evenly;
}

h2 {
  background-color: orange;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
}
</style>
