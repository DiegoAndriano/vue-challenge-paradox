import type { Movie } from '@/types/movie'
import type { Ref, ComputedRef } from 'vue'
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useFilterByGeneral } from '@/composables/filterByGeneral'
import { useFilterByTitle } from '@/composables/filterByTitle'
import { useFilterByGenre } from '@/composables/filterByGenre'
import { useFilterByDirector } from '@/composables/filterByDirector'
import { useFilterByMinGross } from '@/composables/filterByMinGross'
import { useFilterByMaxGross } from '@/composables/filterByMaxGross'
import { useFilterByDate } from '@/composables/filterByDate'

export const useMoviesStore = defineStore('movies', () => {
  const movies: Ref<Array<Movie>> = ref([])
  const genres: Ref<Array<string>> = ref([])
  const directors: Ref<Array<string>> = ref([])
  const titles: Ref<Array<string>> = ref([])
  const years: Ref<Array<number>> = ref([])

  const generalSearch: Ref<string> = ref('')
  const advancedSearchTitle: Ref<string> = ref('')
  const advancedSearchGenre: Ref<string> = ref('')
  const advancedSearchDirector: Ref<string> = ref('')
  const advancedSearchMinGross: Ref<number> = ref(0)
  const advancedSearchMaxGross: Ref<number> = ref(0)
  const advancedSearchDate: Ref<number> = ref(0)

  const sortedBy: Ref<any> = ref({
    sort: null,
    isAsc: false,
  } )

  const modals: Ref<any> = ref({
    search: false
  })

  const setup = async function() {
    const url = 'https://diegoandriano.com/api/vue-challenge-paradox/json'

    const response = await axios.get(url)

    movies.value = response.data
    genres.value = movies.value.map((movie: Movie) => movie['genero'])
    genres.value = genres.value.filter((item, index) => genres.value.indexOf(item) === index)

    directors.value = movies.value.map((movie: Movie) => movie['director'])
    directors.value = directors.value.filter((item, index) => directors.value.indexOf(item) === index)

    titles.value = movies.value.map((movie: Movie) => movie['titulo'])
    titles.value = titles.value.filter((item, index) => titles.value.indexOf(item) === index)

    years.value = movies.value.map((movie: Movie) => movie['año'])
    years.value = years.value.filter((item, index) => years.value.indexOf(item) === index)
  }


  const total = computed(() => movies.value.length)

  const filteredMovies: Ref<Array<Movie>> = computed(function() {
    if (generalSearch.value) {
      return useFilterByGeneral(movies.value, generalSearch.value)
    } else {
      return useFilterByDate(
        useFilterByMaxGross(
          useFilterByMinGross(
            useFilterByDirector(
              useFilterByGenre(
                useFilterByTitle(movies.value, advancedSearchTitle.value), advancedSearchGenre.value),
              advancedSearchDirector.value), advancedSearchMinGross.value), advancedSearchMaxGross.value),
        advancedSearchDate.value)
    }
  })

  const biggestGrossNumber: ComputedRef<Movie> = computed(function() {
    const gross: number[] = movies.value.map((movie: Movie) => movie['recaudacion'])
    const grossNumber: number = Math.max(...gross)

    return movies.value.filter((movie: Movie) => grossNumber === movie['recaudacion'])[0]
  })

  const smallestGrossNumber: ComputedRef<Movie> = computed(function() {
    const gross: number[] = movies.value.map((movie: Movie) => movie['recaudacion'])
    const grossNumber: number = Math.min(...gross)

    return movies.value.filter((movie: Movie) => grossNumber === movie['recaudacion'])[0]
  })

  const toggleSearchModal = function() {
    modals.value.search = !modals.value.search
  }

  const updateGeneralSearch = function(search: string) {
    generalSearch.value = search
  }

  const updateAdvancedSearchTitle = function(search: string) {
    advancedSearchTitle.value = search
  }
  const updateAdvancedSearchGenre = function(search: string) {
    advancedSearchGenre.value = search
  }
  const updateAdvancedSearchDirector = function(search: string) {
    advancedSearchDirector.value = search
  }
  const updateAdvancedSearchMinGross = function(search: number) {
    advancedSearchMinGross.value = search
  }
  const updateAdvancedSearchMaxGross = function(search: number) {
    advancedSearchMaxGross.value = search
  }
  const updateAdvancedSearchDate = function(search: number) {
    advancedSearchDate.value = search
  }
  const isAdvancedSearching = function() {
    return advancedSearchMaxGross.value != 0
      || advancedSearchTitle.value != ''
      || advancedSearchDate.value != 0
      || advancedSearchDirector.value != ''
      || advancedSearchMinGross.value != 0
      || advancedSearchGenre.value != ''
  }
  const eraseAdvanced = function() {
    advancedSearchMaxGross.value = 0
    advancedSearchTitle.value = ''
    advancedSearchDate.value = 0
    advancedSearchDirector.value = ''
    advancedSearchMinGross.value = 0
    advancedSearchGenre.value = ''
    filteredMovies.value = []
  }
  const eraseGeneral = function() {
    generalSearch.value = ""
  }

  const sortByDate = function (isAsc: boolean) {
    movies.value.sort(function(item: Movie, another: Movie){
      sortedBy.value.sort = "date"
      if (isAsc) {
        sortedBy.value.isAsc = true
        return another.año - item.año;
      } else {
        sortedBy.value.isAsc = false
        return item.año - another.año;
      }
    })
  }

  const sortByGross = function (isAsc: boolean) {
    movies.value.sort(function(item: Movie, another: Movie){
      sortedBy.value.sort = "gross"
      if (isAsc) {
        sortedBy.value.isAsc = true
        return another.recaudacion - item.recaudacion;
      } else {
        sortedBy.value.isAsc = false
        return item.recaudacion - another.recaudacion;
      }
    })
  }

  return {
    setup,
    movies,
    total,
    biggestGrossNumber,
    smallestGrossNumber,
    modals,
    toggleSearchModal,
    filteredMovies,
    generalSearch,
    genres,
    directors,
    updateGeneralSearch,
    updateAdvancedSearchTitle,
    updateAdvancedSearchGenre,
    updateAdvancedSearchDirector,
    updateAdvancedSearchMinGross,
    updateAdvancedSearchMaxGross,
    updateAdvancedSearchDate,
    isAdvancedSearching,
    eraseAdvanced,
    eraseGeneral,
    titles,
    years,
    sortByDate,
    sortByGross,
    sortedBy
  }
})
