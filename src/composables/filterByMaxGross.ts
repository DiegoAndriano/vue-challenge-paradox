import type { Movie } from '@/types/movie'

export function useFilterByMaxGross(movie: Movie[], filter: number) {
  if (filter === 0) {
    return movie
  }

  const filtered: Array<Movie> = movie.filter(function(item: Movie) {
    if (item.recaudacion <= filter) {
      return item
    }
  })

  return filtered
}
