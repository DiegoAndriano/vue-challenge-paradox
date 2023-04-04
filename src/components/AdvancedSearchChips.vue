<script setup lang='ts'>
import { computed } from 'vue'
import { useMoviesStore } from '@/stores/movies'

const moviesStore = useMoviesStore()

const showTitleChip = computed(() => !moviesStore.advancedSearchTitle)
const showMinGrossChip = computed(() => !moviesStore.advancedSearchMinGross)
const showMaxGrossChip = computed(() => !moviesStore.advancedSearchMaxGross)
const showDateChip = computed(() => !moviesStore.advancedSearchDate)
const showDirectorChip = computed(() => !moviesStore.advancedSearchDirector)
const showGenreChip = computed(() => !moviesStore.advancedSearchGenre)

</script>
<template>
  <div class='flex flex-wrap gap-2'>
    <button
      v-if='! showTitleChip'
      type='button'
      class='text-sm inline-flex justify-center rounded-md border border-transparent bg-green-100 px-2 py-1 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
      @click="moviesStore.advancedSearchTitle = ''; $emit('titleRemoved')"
    >
      {{ moviesStore.advancedSearchTitle }} <span class='font-bold text-green-900 pl-3 text-sm'>x</span>
    </button>
    <button
      v-if='! showMinGrossChip'
      type='button'
      class='text-sm inline-flex justify-center rounded-md border border-transparent bg-green-100 px-2 py-1 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
      @click="moviesStore.advancedSearchMinGross = ''; $emit('minGrossRemoved')"
    >
      {{ moviesStore.advancedSearchMinGross }} <span class='font-bold text-green-900 pl-3 text-sm'>x</span>
    </button>
        <button
          v-if='! showMaxGrossChip'
          type='button'
          class='text-sm inline-flex justify-center rounded-md border border-transparent bg-green-100 px-2 py-1 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
          @click="moviesStore.advancedSearchMaxGross = ''; $emit('maxGrossRemoved')"
        >
          {{ moviesStore.advancedSearchMaxGross }} <span class='font-bold text-green-900 pl-3 text-sm'>x</span>
        </button>
        <button
          v-if='! showDateChip'
          type='button'
          class='text-sm inline-flex justify-center rounded-md border border-transparent bg-green-100 px-2 py-1 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
          @click="moviesStore.advancedSearchDate = ''; $emit('dateRemoved')"
        >
          {{ moviesStore.advancedSearchDate }} <span class='font-bold text-green-900 pl-3 text-sm'>x</span>
        </button>
        <button
          v-if='! showGenreChip'
          type='button'
          class='text-sm inline-flex justify-center rounded-md border border-transparent bg-green-100 px-2 py-1 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
          @click="moviesStore.advancedSearchGenre = ''; $emit('genreRemoved')"
        >
          {{ moviesStore.advancedSearchGenre }} <span class='font-bold text-green-900 pl-3 text-sm'>x</span>
        </button>
        <button
          v-if='! showDirectorChip'
          type='button'
          class='text-sm inline-flex justify-center rounded-md border border-transparent bg-green-100 px-2 py-1 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
          @click="moviesStore.advancedSearchDirector = ''; $emit('directorRemoved')"
        >
          {{ moviesStore.advancedSearchDirector }} <span class='font-bold text-green-900 pl-3 text-sm'>x</span>
        </button>
  </div>
</template>
