import type { Movie } from '@/types/movie'

export function useFilterByDate(movie: Movie[], filter: number) {
  if (filter === 0) {
    return movie
  }

  const filtered: Array<Movie> = movie.filter(function(item: Movie) {
    if (item.año === filter) {
      return item
    }
  })

  return filtered
}
