import {
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE,
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
  EDIT_BOOK_REQUEST,
  EDIT_BOOK_SUCCESS,
  EDIT_BOOK_FAILURE,
  DELETE_BOOK_REQUEST,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAILURE,
  GET_BOOK_REQUEST,
  GET_BOOK_SUCCESS,
  GET_BOOK_FAILURE,
} from './types'

const initialState = { isPending: true, books: [], book: {} }
export const books = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_REQUEST: {
      return {
        ...state,
        isPending: true,
      }
    }
    case GET_BOOKS_SUCCESS: {
      return {
        ...state,
        isPending: false,
        books: [...action.books],
      }
    }
    case GET_BOOKS_FAILURE: {
      return {
        ...state,
        isPending: false,
        books: [],
      }
    }
    case GET_BOOK_REQUEST: {
      return {
        ...state,
        isPending: true,
      }
    }
    case GET_BOOK_SUCCESS: {
      return {
        ...state,
        isPending: false,
        book: { ...action.book },
      }
    }
    case GET_BOOK_FAILURE: {
      return {
        ...state,
        isPending: false,
        book: {},
      }
    }
    case ADD_BOOK_REQUEST: {
      return {
        ...state,
        isPending: true,
      }
    }
    case ADD_BOOK_SUCCESS: {
      return {
        ...state,
        isPending: false,
        book: { ...action.book },
      }
    }
    case ADD_BOOK_FAILURE: {
      return {
        ...state,
        isPending: false,
        book: {},
      }
    }
    case EDIT_BOOK_REQUEST: {
      return {
        ...state,
        isPending: true,
      }
    }
    case EDIT_BOOK_SUCCESS: {
      return {
        ...state,
        isPending: false,
        book: { ...action.book },
      }
    }
    case EDIT_BOOK_FAILURE: {
      return {
        ...state,
        isPending: false,
        book: {},
      }
    }
    case DELETE_BOOK_REQUEST: {
      return {
        ...state,
        isPending: true,
      }
    }
    case DELETE_BOOK_SUCCESS: {
      return {
        ...state,
        isPending: false,
        book: {},
      }
    }
    case DELETE_BOOK_FAILURE: {
      return {
        ...state,
        isPending: false,
        book: {},
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}

export default books
