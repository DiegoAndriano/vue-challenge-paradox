<script setup lang='ts'>
import TableRow from './TableRow.vue'
import { useMoviesStore } from '@/stores/movies'
import IconNoResults from './icons/IconNoResults.vue'
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { Movie } from '@/types/movie'

const moviesStore = useMoviesStore()

const noResults = computed(() => moviesStore.filteredMovies.length === 0  && moviesStore.isAdvancedSearching())

const movies: ComputedRef<Movie[]> = computed(function() {
  if(moviesStore.filteredMovies.length > 0){
    return moviesStore.filteredMovies
  }

  return moviesStore.movies
})

</script>

<template>
  <tbody class='bg-white'>
  <template v-if='! noResults'>
    <tr class='px-4 border border-l-0 border-r-0 border-t-0 border-b-1 border-app-mute'
        v-for='movie in movies' :key='movie.titulo'>
      <TableRow :movie='movie'></TableRow>
    </tr>
  </template>
  </tbody>
  <template v-if='noResults'>
    <div class='w-full flex flex-col space-y-3'>
      <p class='text-gray-500'>Sin resultados.</p>
      <IconNoResults></IconNoResults>
    </div>
  </template>
</template>
