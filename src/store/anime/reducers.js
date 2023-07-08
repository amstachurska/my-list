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

const initialState = { isPending: true, animes: null, anime: null }
export const animeList = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANIMES_REQUEST:
      return {
        ...state,
        isPending: true,
        animes: [],
      }

    case GET_ANIMES_SUCCESS:
      return {
        ...state,
        isPending: false,
        animes: [...action.animes],
      }

    case GET_ANIMES_FAILURE:
      return {
        ...state,
        isPending: false,
        animes: [],
      }

    case GET_ANIME_REQUEST:
      return {
        ...state,
        isPending: true,
        anime: {},
      }

    case GET_ANIME_SUCCESS:
      return {
        ...state,
        isPending: false,
        anime: { ...action.anime },
      }

    case GET_ANIME_FAILURE:
      return {
        ...state,
        isPending: false,
        anime: {},
      }

    case ADD_ANIME_REQUEST:
      return {
        ...state,
        isPending: true,
        anime: {},
      }

    case ADD_ANIME_SUCCESS:
      return {
        ...state,
        isPending: false,
        anime: { ...action.anime },
      }

    case ADD_ANIME_FAILURE:
      return {
        ...state,
        isPending: false,
        anime: {},
      }

    case EDIT_ANIME_REQUEST:
      return {
        ...state,
        isPending: true,
        anime: {},
      }

    case EDIT_ANIME_SUCCESS:
      return {
        ...state,
        isPending: false,
        anime: { ...action.anime },
      }

    case EDIT_ANIME_FAILURE:
      return {
        ...state,
        isPending: false,
        anime: {},
      }

    case DELETE_ANIME_REQUEST:
      return {
        ...state,
        isPending: true,
        anime: {},
      }

    case DELETE_ANIME_SUCCESS:
      return {
        ...state,
        inPending: false,
        anime: { ...action.anime },
      }

    case DELETE_ANIME_FAILURE:
      return {
        ...state,
        isPending: false,
        anime: {},
      }

    default:
      return {
        ...state,
      }
  }
}
