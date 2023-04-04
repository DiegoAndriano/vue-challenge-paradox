<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { Movie } from '@/types/movie'
import { useMoviesStore } from '@/stores/movies'

const moviesStore = useMoviesStore()
const props = defineProps(['movie'])
const movie: Ref<Movie> = ref(props.movie)
</script>

<template>
  <td class="px-4">{{ movie.titulo }}</td>
  <td class="px-4">{{ movie.director }}</td>
  <td class="px-4">{{ movie.genero }}</td>
  <td class="px-4">{{ movie.recaudacion }}</td>
  <td class="py-2 px-4">{{ movie.año }}</td>
</template>
