import { reactive } from 'vue'
import axios from 'axios'

// 对外导出
export default function () {
  // 随机返回一张柯基的图片
  // https://dog.ceo/api/breeds/image/random
  // https://dog.ceo/api/breed/Husky/images/random
  // 不过访问不了
  // https://dog.ceo/dog-api/
  // 可以看到，但直接访问随机获取狗的图片就会访问失败

  let dogList = reactive(['https://images.dog.ceo/breeds/terrier-bedlington/n02093647_1550.jpg'])

  const getDog = async () => {
    try {
      let result = await axios.get('https://dog.ceo/api/breeds/image/random') // 但是，用程序居然可以真的获取到！！！
      dogList.push(result.data.message)
    } catch (error) {
      alert(error)
    }
  }

  // 向外部提供东西
  return { dogList, getDog }
}
