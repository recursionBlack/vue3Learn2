import { defineStore } from 'pinia'

export const useSumStore = defineStore('Sum', {
  // state官方要求必须是个函数
  // 真正存储数据的地方
  state() {
    return {
      count: 6,
    }
  },
})
