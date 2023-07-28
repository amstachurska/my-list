import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import { MoviesFilter, MoviesHeader, MoviesItem } from './moviesList'

const MyMovies = ({ isPending, movies, sortMovies }) => {
  const [filteredMovies, setFilteredMovies] = useState([])
  const [filters, setFilters] = useState({})
  const history = useHistory()

  useEffect(() => {
    const filterMovies = (filtersValue, list) => {
      let moviesToFilter =
        filtersValue.length > filters.length ||
        (filtersValue.length === filters.length &&
          !!filters.cathegory &&
          !!filtersValue.cathegory &&
          filtersValue.cathegory.length > filters.cathegory.length)
          ? [...filteredMovies]
          : [...list] || []

      Object.keys(filtersValue).length > 0 &&
        Object.keys(filtersValue).forEach((filterKey) => {
          moviesToFilter = moviesToFilter.filter((movie) => {
            if (filterKey === 'status') {
              if (filtersValue['status'].indexOf('all') !== -1) return true
              return filtersValue['status'].indexOf(movie[filterKey]) >= 0
            } else if (filterKey === 'cathegory') {
              return filtersValue['cathegory'].every(
                (cathegory) => movie[filterKey].indexOf(cathegory) >= 0
              )
            } else if (filterKey === 'title') {
              return movie[filterKey]
                .toLowerCase()
                .includes(filtersValue[filterKey].toLowerCase())
            } else if (filterKey === 'year') {
              return movie[filterKey].includes(filtersValue[filterKey])
            }
          })
        })
      return moviesToFilter
    }
    const filtredMovies = filterMovies(filters, movies)
    setFilteredMovies(filtredMovies)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, movies])

  if (isPending !== false)
    return <h1 style={{ margin: '50px' }}>Loading movies...</h1>

  return (
    <>
      <div className="movies__header">
        <h1>List on movies I watched</h1>
        <button
          className="add-movie__button-list"
          onClick={() => history.push('/my/movies/add')}
        >
          Add new movie
        </button>
      </div>
      <MoviesFilter setFilters={setFilters} />
      <table>
        <MoviesHeader sortMovies={sortMovies} />
        <tbody>
          {filteredMovies && isPending === false
            ? filteredMovies.map((movie, index) => (
                <MoviesItem key={`movie-${index}`} movie={movie} />
              ))
            : 'There are no data'}
        </tbody>
      </table>
    </>
  )
}

export default MyMovies
