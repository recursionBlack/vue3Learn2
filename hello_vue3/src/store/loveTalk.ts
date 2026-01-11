import { defineStore } from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'

export const useTalkStore = defineStore('Talk', {
  actions: {
    async getATalk() {
      // 发请求
      // 给的网页链接又是无法获取的
      await axios.get('https://api.uomg.com/api/rand.qinghua?format=json').then((response) => {
        let { data } = response // 响应对象里才有 data
        console.log(data.content)
        let obj = { id: nanoid(), title: data.content }
        this.talkList.unshift(obj)
      })
    },
  },
  // state官方要求必须是个函数
  // 真正存储数据的地方
  state() {
    return {
      //   talkList: [
      //     { id: 'adafs01', title: '今天你有点怪，哪里怪？怪好看的' },
      //     { id: 'adafs02', title: '草莓，蓝莓，蔓越莓，今天想我了没' },
      //     { id: 'adafs03', title: '心里给你留了一块地，我的死心踏地' },
      //   ],
      talkList: JSON.parse(localStorage.getItem('talkList') as string) || [],
    }
  },
})
