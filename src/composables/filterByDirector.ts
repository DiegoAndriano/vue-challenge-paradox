import { useRemoveSpecialCharacters } from '@/composables/removeSpecialCharacters'
import type { Movie } from '@/types/movie'

export function useFilterByDirector(movie: Movie[], filter: string) {
  if (filter === '') {
    return movie
  }

  const filtered: Array<Movie> = movie.filter(function(item: Movie) {
    if (
      useRemoveSpecialCharacters(item.director.toLowerCase()).includes(
        useRemoveSpecialCharacters(filter)
      )
    ) {
      return item
    }
  })

  return filtered
}
