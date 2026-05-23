<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Game>
        <!-- params存储从子组件slot标签上传过来的参数 -->
        <template v-slot="params">
          <ul>
            <li v-for="g in params.youxi" :key="g.id">{{ g.name }}</li>
          </ul>
        </template>
      </Game>

      <Game>
        <template v-slot="params">
          <ol>
            <li v-for="g in params.youxi" :key="g.id">{{ g.name }}</li>
          </ol>
        </template>
      </Game>

      <Game>
        <template v-slot="params">
          <h3 v-for="g in params.youxi" :key="g.id">{{ g.name }}</h3>
        </template>
      </Game>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import { ref, reactive } from 'vue'
import Game from './Game.vue'

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
</style>
