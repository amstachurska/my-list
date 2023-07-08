import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import allActions from '../../../store/allActions'
import MoviesItem from './moviesList/MoviesItem'
import MoviesFilter from './moviesList/MoviesFilter'
import MoviesHeader from './moviesList/MoviesHeader'

const MyMovies = () => {
  const movies = useSelector((state) => state.movies.movies)
  const isPending = useSelector((state) => state.movies.isPending)
  const orderWay = useSelector((state) => state.movies.way)
  const orderBy = useSelector((state) => state.movies.field)
  const dispatchAction = useDispatch()
  const [filteredMovies, setFilteredMovies] = useState([])
  const [filters, setFilters] = useState({})

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

  useEffect(() => {
    dispatchAction(allActions.moviesActions.getMovies('id'))
  }, [dispatchAction])

  const sortMovies = (field, e) => {
    e.preventDefault()
    dispatchAction(allActions.moviesActions.getMovies(field))
  }

  if (isPending !== false)
    return <h1 style={{ margin: '50px' }}>Loading movies...</h1>

  return (
    <>
      <h1 style={{ margin: '50px' }}>List on movies I watched</h1>
      <MoviesFilter setFilters={setFilters} />
      <table>
        <MoviesHeader
          sortMovies={sortMovies}
          orderBy={orderBy}
          orderWay={orderWay}
        />
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
