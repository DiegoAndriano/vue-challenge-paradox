<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { Movie } from '@/types/movie'

const props = defineProps(['movie'])
const movie: Ref<Movie> = ref(props.movie)
</script>

<template>
  <td class="px-4 overflow-hidden">{{ movie.titulo }}</td>
  <td class="px-4 overflow-hidden">{{ movie.director }}</td>
  <td class="px-4 overflow-hidden">{{ movie.genero }}</td>
  <td class="px-4 overflow-hidden">{{ movie.recaudacion }}</td>
  <td class="py-2 px-4 overflow-hidden">{{ movie.año }}</td>
</template>
