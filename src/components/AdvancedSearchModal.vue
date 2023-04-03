<script setup lang='ts'>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { useMoviesStore } from '@/stores/movies'
import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import AutocompleteComponent from './AutocompleteComponent.vue'
import IconCircleX from './icons/IconCircleX.vue'

const searchTitle: Ref<string> = ref('')
const searchMinGross: Ref<number> = ref(0)
const searchMaxGross: Ref<number> = ref(0)
const searchDate: Ref<number> = ref(0)
const selectedGenre: Ref<string> = ref('');
const selectedDirector: Ref<string> = ref('');
const autocompleteDirector: Ref = ref('')

const moviesStore = useMoviesStore()

const genres = computed(() => moviesStore.genres)
const directors = computed(() => moviesStore.directors)

function closeModal() {
  moviesStore.updateAdvancedSearchTitle(searchTitle.value.toLowerCase())
  moviesStore.updateAdvancedSearchGenre(selectedGenre.value.toLowerCase())
  moviesStore.updateAdvancedSearchDirector(selectedDirector.value.toLowerCase())
  moviesStore.updateAdvancedSearchMinGross(searchMinGross.value)
  moviesStore.updateAdvancedSearchMaxGross(searchMaxGross.value)
  moviesStore.updateAdvancedSearchDate(searchDate.value)
  moviesStore.toggleSearchModal()
}

function eraseDirector(){
  autocompleteDirector.value.erase()
  selectedDirector.value = ""
}

</script>

<template>
  <TransitionRoot appear :show='moviesStore.modals.search' as='template'>
    <Dialog as='div' @close='closeModal' class='relative z-10'>
      <TransitionChild
        as='template'
        enter='duration-300 ease-out'
        enter-from='opacity-0'
        enter-to='opacity-100'
        leave='duration-200 ease-in'
        leave-from='opacity-100'
        leave-to='opacity-0'
      >
        <div class='fixed inset-0 bg-black bg-opacity-25' />
      </TransitionChild>

      <div class='fixed inset-0 overflow-y-auto'>
        <div class='flex min-h-full items-center justify-center p-4 text-center'>
          <TransitionChild
            as='template'
            enter='duration-300 ease-out'
            enter-from='opacity-0 scale-95'
            enter-to='opacity-100 scale-100'
            leave='duration-200 ease-in'
            leave-from='opacity-100 scale-100'
            leave-to='opacity-0 scale-95'
          >
            <DialogPanel
              id='Hola'
              class='h-full w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all  min-h-[600px] flex flex-col'
            >
              <DialogTitle as='h3' class='text-lg font-medium leading-6 text-gray-900'>
                Filtros avanzados
              </DialogTitle>

              <div class='mt-2 flex flex-col justify-around flex-grow'>
                <label class="text-sm text-gray-500" for='Titulo'>Título</label>
                <input
                  id='Titulo'
                  type='text'
                  class='rounded bg-app-lighttext border border-app-lighttext text-app-text bg-white px-3 py-1 w-full focus:px-5 transition ease-in-out duration-150'
                  placeholder='Buscar Título...'
                  v-model='searchTitle'
                />
                <label class="text-sm text-gray-500" for='Mínima'>Mínima recaudación</label>
                <input
                  id='Mínima'
                  type='number'
                  class='rounded bg-app-lighttext border border-app-lighttext text-app-text bg-white px-3 py-1 w-full focus:px-5 transition ease-in-out duration-150'
                  placeholder='Mínima Recaudación...'
                  v-model='searchMinGross'
                />
                <label class="text-sm text-gray-500" for='Mínima'>Máxima recaudación</label>
                <input
                  id='Máxima'
                  type='number'
                  class='rounded bg-app-lighttext border border-app-lighttext text-app-text bg-white px-3 py-1 w-full focus:px-5 transition ease-in-out duration-150'
                  placeholder='Máxima Recaudación...'
                  v-model='searchMaxGross'
                />
                <label class="text-sm text-gray-500" for='Date'>Fecha</label>
                <input
                  id='Date'
                  type='number'
                  class='rounded bg-app-lighttext border border-app-lighttext text-app-text bg-white px-3 py-1 w-full focus:px-5 transition ease-in-out duration-150'
                  placeholder='Fecha...'
                  v-model='searchDate'
                />
                <label class="text-sm text-gray-500">Seleccionar Género</label>
                <div class='flex flex space-x-3 items-center'>
                  <AutocompleteComponent
                    :selected='selectedGenre'
                    v-model='selectedGenre' :list='genres' class='z-20'>

                  </AutocompleteComponent>
                  <IconCircleX class='text-red-500 cursor-pointer' @click="selectedGenre = ''"></IconCircleX>
                </div>


                <label  class="text-sm text-gray-500">Seleccionar Director</label>
                <div class='flex flex space-x-3 items-center w-full'>
                  <AutocompleteComponent v-model='selectedDirector' :list='directors' class="z-10" ref='autocompleteDirector'>

                  </AutocompleteComponent>
                  <IconCircleX
                    class='text-red-500 cursor-pointer'
                    @click="eraseDirector"></IconCircleX>

                </div>
              </div>

              <div class='mt-4'>
                <button
                  type='button'
                  class='inline-flex justify-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2'
                  @click='closeModal'
                >
                  Buscar
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
