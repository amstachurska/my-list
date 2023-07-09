import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  ADD_MOVIE_REQUEST,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAILURE,
  EDIT_MOVIE_REQUEST,
  EDIT_MOVIE_SUCCESS,
  EDIT_MOVIE_FAILURE,
  DELETE_MOVIE_REQUEST,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILURE,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,
} from './types'
import { moviesService } from '../../services/movies'
import { ALERT_ERROR, ALERT_SUCCESS } from '../alerts/types'

export const getMovies = (field) => (dispatch) => {
  const sortBy = field ? field : 'id'
  dispatch({ type: GET_MOVIES_REQUEST })
  moviesService.getMovies().then(
    (movies) => {
      dispatch({
        type: GET_MOVIES_SUCCESS,
        payload: { movies: movies, field: sortBy },
      })
      //alertArror
    },
    (error) => {
      dispatch({ type: GET_MOVIES_FAILURE, error: error.toString() })
      //alert errpr
    }
  )
}

export const addMovie = (movie) => (dispatch) => {
  dispatch({ type: ADD_MOVIE_REQUEST })
  moviesService.addMovie(movie).then(
    (movie) => {
      dispatch({ type: ADD_MOVIE_SUCCESS })
      dispatch(getMovies())
      dispatch({
        type: ALERT_SUCCESS,
        payload: { message: `New movie was successfully added to the list` },
      })
    },
    (error) => {
      dispatch({ type: ADD_MOVIE_FAILURE, error: error.toString() })
      dispatch({
        type: ALERT_ERROR,
        payload: {
          message: `ERROR during adding the movie - movie was not added`,
        },
      })
    }
  )
}

export const editMovie = (movie) => (dispatch) => {
  dispatch({ type: EDIT_MOVIE_REQUEST })
  moviesService.editMovie(movie).then(
    (movie) => {
      dispatch({ type: EDIT_MOVIE_SUCCESS, movie })
      dispatch(getMovies())
      dispatch({
        type: ALERT_SUCCESS,
        payload: { message: `Movie ${movie.id} was successfully edited` },
      })
    },
    (error) => {
      dispatch({ type: EDIT_MOVIE_FAILURE, error: error.toString() })
      dispatch({
        type: ALERT_ERROR,
        payload: {
          message: `ERROR during editing - movie ${movie.id} was not edited`,
        },
      })
    }
  )
}

export const deleteMovie = (movieId) => (dispatch) => {
  dispatch({ type: DELETE_MOVIE_REQUEST })
  moviesService.deleteMovie(movieId).then(
    (movie) => {
      dispatch({ type: DELETE_MOVIE_SUCCESS, movie })
      dispatch(getMovies())
      dispatch({
        type: ALERT_SUCCESS,
        payload: { message: `Movie ${movieId} was successfully removed` },
      })
    },
    (error) => {
      dispatch({ type: DELETE_MOVIE_FAILURE })
      dispatch({
        type: ALERT_ERROR,
        payload: {
          message: `ERROR during movie removing - movie ${movieId} was not removed`,
        },
      })
    }
  )
}

export const getMovie = (movieId) => (dispatch) => {
  dispatch({ type: GET_MOVIE_REQUEST })
  moviesService.getMovie(movieId).then(
    (movie) => {
      dispatch({ type: GET_MOVIE_SUCCESS, movie })
    },
    (error) => {
      dispatch({ type: GET_MOVIE_FAILURE, error: error.toString() })
    }
  )
}

export default {
  getMovies,
  addMovie,
  editMovie,
  deleteMovie,
  getMovie,
}
