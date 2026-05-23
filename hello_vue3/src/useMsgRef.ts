import { customRef } from 'vue'

export default function (initValue: string, delay: number) {
  // 使用vue提供的customRef,定义响应式数据，相当于自己封装实现一遍ref
  let timer: number
  // track:跟踪，trigger：触发 面试中最常问的关键点
  let msg = customRef((track, trigger) => {
    return {
      // msg被读取时，get被调用
      get() {
        track() // 告诉vue数据msg很重要，你要对msg进行一个持续关注，一旦msg变化，就去更新
        return initValue
      },
      // msg被修改时，set被调用
      set(value) {
        // 这种延迟效果，原生ref是无法实现的，因为他们是即时的，所以只有自己封装customRef才能加上延时效果
        // 如果这种ref用的很多，则可能会封装成hooks
        clearTimeout(timer)
        timer = setTimeout(() => {
          initValue = value
          trigger() // 通知vue一下，数据msg变换了
        }, delay)
      },
    }
  })

  return { msg }
}
