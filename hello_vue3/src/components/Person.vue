<template>
  <div class="person">
    <ul>
      <li v-for="person in props.list" :key="person.id">
        {{ person.name }}--{{ person.age }}--{{ person.id }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// 接收父类传来的数据，并保存到本地的props里
// const props = defineProps(['a', 'list'])

// 增加限制类型
// import { type Persons } from '@/types'
// const props = defineProps<{ list: Persons }>()

// 接收list+限制类型+限制必要性+指定默认值
// ?可有可无，
// 默认值问题，由于vue3.5改版后，与老师讲的不一样，故不做演示了
import { type Persons } from '@/types'
const props = defineProps<{ list?: Persons }>()
</script>
