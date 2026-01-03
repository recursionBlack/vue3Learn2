<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- 第一种写法 -->
        <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`"
          >{{ news.title }}
        </RouterLink> -->
        <!-- 第二种写法 -->
        <RouterLink
          :to="{
            name: 'xiang', // 这里不能用path了，只能用name
            params: {
              id: news.id,
              title: news.title,
              content: news.content,
            },
          }"
          >{{ news.title }}
        </RouterLink>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content"><RouterView></RouterView></div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

const newsList = reactive([
  {
    id: 'asdfqwer01',
    title: '一种抗癌食物',
    content: '西兰花',
  },
  {
    id: 'asdfqwer02',
    title: '如何一夜暴富？',
    content: '学IT',
  },
  {
    id: 'asdfqwer03',
    title: '震惊，万万没想到',
    content: '明天是周一',
  },
  {
    id: 'asdfqwer04',
    title: '好消息！好消息！',
    content: '快过年了',
  },
])
</script>

<style scoped>
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  /* list-style: none; */
  padding-left: 10px;
}
.news li::marker {
  color: #64967e;
}
.news li > a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967e;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>
