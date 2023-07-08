import {
  ADD_MANGA_REQUEST,
  ADD_MANGA_SUCCESS,
  ADD_MANGA_FAILURE,
  DELETE_MANGA_REQUEST,
  DELETE_MANGA_SUCCESS,
  DELETE_MANGA_FAILURE,
  EDIT_MANGA_REQUEST,
  EDIT_MANGA_SUCCESS,
  EDIT_MANGA_FAILURE,
  GET_MANGAS_REQUEST,
  GET_MANGAS_SUCCESS,
  GET_MANGAS_FAILURE,
  GET_MANGA_REQUEST,
  GET_MANGA_SUCCESS,
  GET_MANGA_FAILURE,
} from './types'

const initialState = { isPending: true, manga: null, mangas: null }
export const mangasList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MANGA_REQUEST:
      return {
        ...state,
        isPending: true,
        manga: null,
      }

    case ADD_MANGA_SUCCESS:
      return {
        ...state,
        isPending: false,
        manga: { ...action.manga },
      }

    case ADD_MANGA_FAILURE:
      return {
        ...state,
        isPending: false,
        manga: null,
      }

    case DELETE_MANGA_REQUEST:
      return {
        ...state,
        isPending: true,
        manga: null,
      }

    case DELETE_MANGA_SUCCESS:
      return {
        ...state,
        isPending: false,
        manga: { ...action.manga },
      }

    case DELETE_MANGA_FAILURE:
      return {
        ...state,
        isPending: false,
        manga: null,
      }

    case EDIT_MANGA_REQUEST:
      return {
        ...state,
        isPending: true,
        manga: null,
      }

    case EDIT_MANGA_SUCCESS:
      return {
        ...state,
        isPending: false,
        manga: null,
      }

    case EDIT_MANGA_FAILURE:
      return {
        ...state,
        isPending: false,
        manga: null,
      }

    case GET_MANGA_REQUEST:
      return {
        ...state,
        isPending: true,
        manga: null,
      }

    case GET_MANGA_SUCCESS:
      return {
        ...state,
        isPending: false,
        manga: { ...action.manga },
      }

    case GET_MANGA_FAILURE:
      return {
        ...state,
        isPending: false,
        manga: null,
      }

    case GET_MANGAS_REQUEST:
      return {
        ...state,
        isPending: true,
      }

    case GET_MANGAS_SUCCESS:
      return {
        ...state,
        isPending: false,
        mangas: [...action.mangas],
      }

    case GET_MANGAS_FAILURE:
      return {
        ...state,
        isPending: false,
        mangas: null,
      }

    default:
      return {
        ...state,
      }
  }
}
