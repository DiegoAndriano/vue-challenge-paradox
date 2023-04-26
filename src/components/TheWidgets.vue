<script setup lang='ts'>
import WidgetComponent from './WidgetComponent.vue'
import { useMoviesStore } from '@/stores/movies'
import IconMovie from '@/components/icons/IconMovie.vue'
import IconBankNote from '@/components/icons/IconBankNote.vue'
import IconArrowUp from '@/components/icons/IconArrowUp.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'

const moviesStore = useMoviesStore()
</script>

<template>
  <div
    class='flex flex-col space-y-6 py-6 px-6 lg:flex-row lg:space-y-0 lg:space-x-6 lg:justify-around'
  >

      <WidgetComponent>
        <template #icon>
          <IconMovie class='text-app-mainmute'></IconMovie>
        </template>
        <template #title> Número total de películas</template>
        <template #show>
          <p>{{ moviesStore.total }}</p>
        </template>
      </WidgetComponent>

      <WidgetComponent>
        <template #icon>
          <IconBankNote class='text-app-mainmute'></IconBankNote>
        </template>
        <template #title>
          <div class='flex space-x-2'>
            Mayor Recaudación (M U$D)
            <IconArrowUp class='text-green-400'></IconArrowUp>
          </div>
        </template>
        <template #show>
          <p>{{ moviesStore.biggestGrossNumber?.titulo }}</p>
          <p>$ {{ moviesStore.biggestGrossNumber?.recaudacion }}</p>
        </template>
      </WidgetComponent>

      <WidgetComponent>
        <template #icon>
          <IconBankNote class='text-app-mainmute'></IconBankNote>
        </template>
        <template #title>
          <div class='flex space-x-2'>
            Menor Recaudación (M U$D)
            <IconArrowDown class='text-red-400'></IconArrowDown>
          </div>
        </template>
        <template #show>
          <p>{{ moviesStore.smallestGrossNumber?.titulo }}</p>
          <p>$ {{ moviesStore.smallestGrossNumber?.recaudacion }}</p>
        </template>
      </WidgetComponent>

  </div>
</template>
