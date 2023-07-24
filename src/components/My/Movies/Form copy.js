import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import { isEmpty } from 'lodash'
import PropTypes from 'prop-types'

import AddMovieForm from './addMovie/AddMovieForm'
import { GENRE_OPTIONS, MOVIE_STATUS } from './const'

const MovieForm = (props) => {
  const [movie, setMovie] = useState()
  const {
    match: {
      params: { id },
    },
  } = props
  const [isMovieAvailable, setIsMovieAvailable] = useState(true)

  useEffect(() => {
    if (id) {
      fetch(`${process.env.REACT_APP_API_URL}/movies/${id}`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'Content-type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((movie) => {
          if (!isEmpty(movie)) {
            setMovie(movie)
            setIsMovieAvailable(true)
          }
        })
        .catch((err) => setIsMovieAvailable(false))
    }
  }, [id])

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

  const saveMovie = () => {
    const { myValues } = props
    const movie = {
      ...myValues,
      status: myValues.status.value,
      cathegory: myValues.cathegory.map((cathegory) => cathegory.value),
    }

    fetch(`${process.env.REACT_APP_API_URL}/movies/${id}`, {
      method: 'PUT',
      headers: {
        accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ ...movie }),
    })
      .then((response) => response.json())
      .then(() => console.log('zaisane'))
      .catch(() => console.log('blad'))
  }

  if (isMovieAvailable && !movie) {
    return <h1 className="movie-form__no-movie">No movie with this id</h1>
  }

  return (
    <>
      <AddMovieForm
        initialValues={{
          ...movie,
          cathegory: movie.cathegory.map(
            (cathegory) =>
              GENRE_OPTIONS.filter((option) => option.value === cathegory)[0]
          ),
          status: MOVIE_STATUS.filter(
            (status) => status.value === movie.status
          )[0],
        }}
      />
      <div>
        <button
          className="movie-form__menu"
          onClick={goToPrevMovie}
          type="button"
        >
          Go To Prev Movie
        </button>
        <button
          className="movie-form__menu"
          onClick={goToNextMovie}
          type="button"
        >
          Go To Next Movie
        </button>
        <button className="movie-form__menu" onClick={saveMovie} type="button">
          Save
        </button>
      </div>
    </>
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
    'remarks'
  ),
})

export default connect(mapStateToProps)(MovieForm)

MovieForm.propTypes = {
  match: PropTypes.object,
}
