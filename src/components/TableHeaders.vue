<script setup lang='ts'>
import IconArrowDown from './icons/IconArrowDown.vue'
import IconArrowUp from './icons/IconArrowUp.vue'
import { useMoviesStore } from '@/stores/movies'

const moviesStore = useMoviesStore()
</script>
<template>
  <tr class='bg-app-backgrounddarker'>
    <th class='text-app-text text-left px-4 overflow-hidden'>Título</th>
    <th class='text-app-text text-left px-4 overflow-hidden'>Director</th>
    <th class='text-app-text text-left px-4 overflow-hidden'>Género</th>
    <th class='text-app-text text-left px-4 overflow-hidden'>
      <span class='flex'>
        Recaudación (M U$D)
      <IconArrowDown
        v-if="! moviesStore.sortedBy.isAsc"
        class='cursor-pointer'
        @click='moviesStore.sortByGross(true)'
      ></IconArrowDown>
      <IconArrowUp
        class='cursor-pointer'
        v-if="moviesStore.sortedBy.isAsc"
        @click='moviesStore.sortByGross(false)'
      ></IconArrowUp>
        </span>
    </th>
    <th class='text-app-text text-left px-4 py-3 overflow-hidden'>
      <span class='flex'>
      Año
      <IconArrowDown
        v-if="! moviesStore.sortedBy.isAsc"
        class='cursor-pointer'
        @click='moviesStore.sortByDate(true)'
      ></IconArrowDown>
      <IconArrowUp
        class='cursor-pointer'
        v-if="moviesStore.sortedBy.isAsc"
        @click='moviesStore.sortByDate(false)'
      ></IconArrowUp>
        </span>
    </th>
  </tr>
</template>
