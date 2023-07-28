import React, { createContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import MyMovies from './Movies.jsx'
import allActions from '../../../store/allActions'

let db = require('./movies.json')

export const SortContext = createContext(null)

const MoviesWrapperProd = () => {
  const [isPending, setIsPending] = useState(true)
  const [movies, setMovies] = useState([])
  const [way, setWay] = useState('asc')
  const [field, setField] = useState('id')

  const sortMovies = (sort_field, e) => {
    let sortedMovies = [...movies]

    if (['id', 'ranking', 'nrOfTimesWatched'].indexOf(sort_field) !== -1) {
      if (sort_field === field) {
        if (way === 'desc') {
          sortedMovies.sort(
            (firstMovie, secondMovie) =>
              firstMovie[sort_field] - secondMovie[sort_field]
          )
          setWay('asc')
        } else {
          sortedMovies.sort(
            (firstMovie, secondMovie) =>
              secondMovie[sort_field] - firstMovie[sort_field]
          )
          setWay('desc')
        }
      } else {
        sortedMovies
          .sort(
            (firstMovie, secondMovie) =>
              secondMovie[sort_field] - firstMovie[sort_field]
          )
          .reverse()
        setWay('asc')
      }
    }

    if (
      [
        'title',
        'titlePl',
        // 'remarks',
        'year',
        'date',
        'status',
        'isWorthWatchingAgain',
      ].indexOf(sort_field) !== -1
    ) {
      if (sort_field !== field || (sort_field === field && way === 'desc')) {
        setWay('asc')
        sortedMovies.sort((firstMovie, secondMovie) => {
          if (!firstMovie[sort_field] && !secondMovie[sort_field]) {
            return 2
          }
          if (
            firstMovie[sort_field] &&
            secondMovie[sort_field] &&
            firstMovie[sort_field].toLowerCase() >
              secondMovie[sort_field].toLowerCase()
          ) {
            return 1
          }
          if (
            !firstMovie[sort_field] ||
            !secondMovie[sort_field] ||
            firstMovie[sort_field].toLowerCase() ===
              secondMovie[sort_field].toLowerCase()
          ) {
            return 0
          }
          if (
            firstMovie[sort_field] &&
            secondMovie[sort_field] &&
            firstMovie[sort_field].toLowerCase() <
              secondMovie[sort_field].toLowerCase()
          ) {
            return -1
          }
          return 0
        })
      } else {
        setWay('desc')
        sortedMovies.sort((firstMovie, secondMovie) => {
          if (
            firstMovie[sort_field] &&
            secondMovie[sort_field] &&
            firstMovie[sort_field].toLowerCase() <
              secondMovie[sort_field].toLowerCase()
          )
            return 1
          if (
            !firstMovie[sort_field] ||
            !secondMovie[sort_field] ||
            firstMovie[sort_field].toLowerCase() ===
              secondMovie[sort_field].toLowerCase()
          )
            return 0
          if (
            firstMovie[sort_field] &&
            secondMovie[sort_field] &&
            firstMovie[sort_field].toLowerCase() >
              secondMovie[sort_field].toLowerCase()
          )
            return -1
          return 0
        })
      }
    }
    setField(sort_field)
    setMovies(sortedMovies)
  }

  useEffect(() => {
    setMovies(db.movies)
    setIsPending(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SortContext.Provider value={{ orderBy: field, orderWay: way }}>
      <MyMovies isPending={isPending} movies={movies} sortMovies={sortMovies} />
    </SortContext.Provider>
  )
}

const MoviesWrapperDev = () => {
  const movies = useSelector((state) => state.movies.movies)
  const isPending = useSelector((state) => state.movies.isPending)
  const dispatchAction = useDispatch()
  const orderBy = useSelector((state) => state.movies.field)
  const orderWay = useSelector((state) => state.movies.way)

  const sortMovies = (field, e) => {
    e.preventDefault()
    dispatchAction(allActions.moviesActions.getMovies(field))
  }

  useEffect(() => {
    dispatchAction(allActions.moviesActions.getMovies('id'))
  }, [dispatchAction])

  return (
    <SortContext.Provider value={{ orderBy, orderWay }}>
      <MyMovies isPending={isPending} movies={movies} sortMovies={sortMovies} />
    </SortContext.Provider>
  )
}

const MoviesWrapper = () => {
  if (process.env.NODE_ENV === 'production') {
    return <MoviesWrapperProd />
  } else {
    return <MoviesWrapperDev />
  }
}

export default MoviesWrapper
