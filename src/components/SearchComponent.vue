<script setup lang='ts'>
import type { Ref } from 'vue'
import { ref } from 'vue'
import { useMoviesStore } from '@/stores/movies'
import IconCircleX from './icons/IconCircleX.vue'

const search: Ref<string> = ref('')
const moviesStore = useMoviesStore()

function openModal() {
  search.value = ""
  moviesStore.toggleSearchModal()
}

function updateGeneralSearch() {
  moviesStore.updateGeneralSearch(search.value.toLowerCase())
}
function eraseAdvanced(){
  moviesStore.eraseAdvanced()
}

</script>

<template>
  <div class='bg-white py-3 px-6 flex flex-col'>
    <input
      type='text'
      class='rounded bg-app-lighttext border border-app-lighttext text-app-text bg-white px-3 py-1 max-w-[250px] focus:px-5 transition ease-in-out duration-150'
      placeholder='Buscar...'
      v-model='search'
      @keyup='updateGeneralSearch'
    />
    <div class='flex space-x-3 items-center'>
      <button
          v-if='moviesStore.movies.length > 0'
        @click='openModal' class='text-app-main font-semibold text-left py-2'>
        Búsqueda avanzada
      </button>
      <IconCircleX
        v-if='moviesStore.isAdvancedSearching()'
        @click='eraseAdvanced'
        class='text-red-500 cursor-pointer'></IconCircleX>
    </div>
  </div>
</template>
