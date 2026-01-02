import { ref } from 'vue'

export default function () {
  let sum = ref(0)

  const add = () => {
    sum.value++
  }

  // 给外部提供东西
  return { sum, add }
}
