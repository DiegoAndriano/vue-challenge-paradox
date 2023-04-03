<script setup lang="ts">
import TableComponent from './components/TableComponent.vue'
import TheWidgets from './components/TheWidgets.vue'
import { useMoviesStore } from '@/stores/movies'

const moviesStore = useMoviesStore()
moviesStore.setup()
</script>

<template>
  <header class="text-center w-full py-10 shadow-lg">
    <h1 class="font-bold text-app-text text-4xl">Desafío Vue</h1>
  </header>

  <main class="bg-app-background h-full w-full">
    <TheWidgets></TheWidgets>
    <TableComponent></TableComponent>
  </main>
</template>
