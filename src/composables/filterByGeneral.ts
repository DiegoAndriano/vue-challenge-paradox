import type { Movie } from '@/types/movie'
import { useRemoveSpecialCharacters } from '@/composables/removeSpecialCharacters'

export function useFilterByGeneral(movie: Movie[], filter: string) {
  return movie.filter(function (item: Movie) {
    if (
      item.año.toString().includes(filter) ||
      item.recaudacion.toString().includes(filter) ||
      useRemoveSpecialCharacters(item.titulo.toLowerCase()).includes(
        useRemoveSpecialCharacters(filter)
      ) ||
      useRemoveSpecialCharacters(item.genero.toLowerCase()).includes(
        useRemoveSpecialCharacters(filter)
      ) ||
      useRemoveSpecialCharacters(item.director.toLowerCase()).includes(
        useRemoveSpecialCharacters(filter)
      )
    ) {
      return item
    }
  })
}
