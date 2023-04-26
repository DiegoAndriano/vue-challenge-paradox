<script setup lang='ts'>

import { computed, defineProps, ref } from 'vue'
import type { Ref } from 'vue'

const props = defineProps(['list', 'selected'])

const list: Ref = ref(props.list)
const selected: Ref<string> = ref(props.selected)
const isOpened: Ref<boolean> = ref(false)

const sortedList: Ref = computed(() => {
    let pre = list.value
    return pre.sort()
  }
)

const toggle = () => {
  isOpened.value = !isOpened.value
}

const erase = () => {
  selected.value = ''
}

defineExpose({ erase })
</script>

<template>
  <div
    class='relative w-full cursor-default rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-300 sm:text-sm'>
    <input @click='toggle' v-model='selected'
           class='w-full border-none py-3 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0'
           placeholder='Click para seleccionar año' type='text'>
    <transition></transition>
    <div
      v-if='isOpened'
      class='absolute top-0 rounded-lg shadow-md bg-red-500 z-50 w-full h-[300px] flex flex-wrap space-x-5'>
      <p class='cursor-pointer' v-for='year in sortedList' :key='year'>{{ year }}</p>
    </div>
  </div>
</template>
