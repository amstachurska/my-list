import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import { isEmpty } from 'lodash'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import allActions from '../../../store/allActions'
import AddMovieForm from './addMovie/AddMovieForm'
import { GENRE_OPTIONS, MOVIE_STATUS } from './const'

const MovieForm = (props) => {
  const history = useHistory()
  const isPending = useSelector((state) => state.movies.isPending)
  const movieData = useSelector((state) => state.movies.movie)
  const {
    match: {
      params: { id },
    },
  } = props
  const dispatchAction = useDispatch()
  const isSaving = useRef(null)

  useEffect(() => {
    if (id) {
      dispatchAction(allActions.moviesActions.getMovie(id))
    }
  }, [dispatchAction, id])

  useEffect(() => {
    if (isSaving.current && !isPending) {
      history.push({ pathname: '/my/movies' })
    }
  }, [history, isPending])

  const goToPrevMovie = () => {
    const { history } = props
    const prevId = parseInt(id) - 1
    history.push(`/my/movies/${prevId}`)
  }

  const goToNextMovie = () => {
    const { history } = props
    const nextId = parseInt(id) + 1
    history.push(`/my/movies/${nextId}`)
  }

  const saveMovie = (event) => {
    console.log('save', props)
    event.preventDefault()
    const { myValues } = props
    const movie = {
      ...myValues,
      status: myValues.status.value,
      cathegory: myValues.cathegory
        .map((cathegory) => cathegory.value)
        .sort((cathegory1, cathegory2) => (cathegory1 > cathegory2 ? 1 : -1)),
    }
    isSaving.current = true
    if (id) {
      movie.id = id
      dispatchAction(allActions.moviesActions.editMovie(movie))
    } else {
      dispatchAction(allActions.moviesActions.addMovie(movie))
    }
  }

  if (id && isPending && isEmpty(movieData)) {
    return <h1 className="movie-form__no-movie">No movie with this id</h1>
  }

  return (
    <AddMovieForm
      onSubmit={saveMovie}
      goToNextMovie={goToNextMovie}
      goToPrevMovie={goToPrevMovie}
      initialValues={{
        ...movieData,
        cathegory:
          movieData &&
          movieData.cathegory &&
          movieData.cathegory.map(
            (cathegory) =>
              GENRE_OPTIONS.filter((option) => option.value === cathegory)[0]
          ),
        status: MOVIE_STATUS.filter(
          (status) => status.value === movieData.status
        )[0],
      }}
    />
  )
}

const formValues = formValueSelector('addMovie')

const mapStateToProps = (state) => ({
  myValues: formValues(
    state,
    'title',
    'titlePl',
    'year',
    'cathegory',
    'isBook',
    'isSaga',
    'status',
    'date',
    'ranking',
    'isWorthWatchingAgain',
    'nrOfTimesWatched',
    'directors',
    'remarks',
    'linkedMovies',
    'linkedBooks'
  ),
})

export default connect(mapStateToProps)(MovieForm)

MovieForm.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  myValues: PropTypes.object,
}
