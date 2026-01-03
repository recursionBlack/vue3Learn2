<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <button @click="showNewsDetail(news)">查看新闻</button>
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
import { RouterView, RouterLink, useRouter } from 'vue-router'

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

const router = useRouter()

// 这里的news参数是必须要加上的，否则news会爆红，因为模板里的news的作用域仅在v-for标签内
const showNewsDetail = (news: { id: string; title: string; content: string }) => {
  router.push(
    // 跟RouteLink里的to写法一致，字符串或对象都可以
    {
      name: 'xiang',
      params: {
        id: news.id,
        title: news.title,
        content: news.content,
      },
    },
  )
}
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
