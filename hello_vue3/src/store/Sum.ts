import { defineStore } from 'pinia'

export const useSumStore = defineStore('Sum', {
  // actions里放的是一个个的方法，用于响应组件中的动作
  actions: {
    increment(value: number) {
      console.log('increment被调用了', value)
      // 修改数据,this 是当前store
      //   console.log(this)
      this.count += value
    },
  },
  // state官方要求必须是个函数
  // 真正存储数据的地方
  state() {
    return {
      count: 1,
      school: 'atguigu',
      address: '洪福科技园',
    }
  },
  getters: {
    bigSum(state) {
      return state.count * 10
    },
    upperSchool(state) {
      return state.school.toUpperCase()
    },
  },
})
