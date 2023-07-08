import {
  GET_ANIMES_REQUEST,
  GET_ANIMES_SUCCESS,
  GET_ANIMES_FAILURE,
  GET_ANIME_REQUEST,
  GET_ANIME_SUCCESS,
  GET_ANIME_FAILURE,
  ADD_ANIME_REQUEST,
  ADD_ANIME_SUCCESS,
  ADD_ANIME_FAILURE,
  EDIT_ANIME_REQUEST,
  EDIT_ANIME_SUCCESS,
  EDIT_ANIME_FAILURE,
  DELETE_ANIME_REQUEST,
  DELETE_ANIME_SUCCESS,
  DELETE_ANIME_FAILURE,
} from './types'
import animesService from '../../service/animes'

export const getAnimes = () => (dispatch) => {
  dispatch({ type: GET_ANIMES_REQUEST })
  animesService.getAnimes().then(
    (animes) => {
      dispatch({ type: GET_ANIMES_SUCCESS, animes })
    },
    (error) => {
      dispatch({ type: GET_ANIMES_FAILURE, error: error.toString() })
    }
  )
}

export const getAnime = (id) => (dispatch) => {
  dispatch({ type: GET_ANIME_REQUEST })
  animesService.getAnimme(id).then(
    (anime) => {
      dispatch({ type: GET_ANIME_SUCCESS, anime })
    },
    (error) => {
      dispatch({ type: GET_ANIME_FAILURE, error: error.toString() })
    }
  )
}

export const addAnime = (anime) => (dispatch) => {
  dispatch({ type: ADD_ANIME_REQUEST })
  animesService.addAnime(anime).then(
    (anime) => {
      dispatch({ type: ADD_ANIME_SUCCESS, anime })
    },
    (error) => {
      dispatch({ type: ADD_ANIME_FAILURE, error: error.toString() })
    }
  )
}

export const editAnime = (anime) => (dispatch) => {
  dispatch({ type: EDIT_ANIME_REQUEST })
  animesService.editAnime(anime).then(
    (anime) => {
      dispatch({ type: EDIT_ANIME_SUCCESS, anime })
    },
    (error) => {
      dispatch({ type: EDIT_ANIME_FAILURE, error: error.toString() })
    }
  )
}

export const deleteAnime = (id) => (dispatch) => {
  dispatch({ type: DELETE_ANIME_REQUEST })
  animesService.deleteAnime(id).then(
    (anime) => {
      dispatch({ type: DELETE_ANIME_SUCCESS, anime })
    },
    (error) => {
      dispatch({ type: DELETE_ANIME_FAILURE, error: error.toString() })
    }
  )
}
