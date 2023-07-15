import { v4 as uuidv4 } from 'uuid'
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
import { ALERT_ERROR, ALERT_REMOVE, ALERT_SUCCESS } from '../alerts/types'
import { booksService } from '../../services/books'

export const getBooks = () => (dispatch, shallAddNotification) => {
  dispatch({ type: GET_BOOKS_REQUEST })
  booksService.getBooks().then(
    (books) => {
      dispatch({ type: GET_BOOKS_SUCCESS, books })
      if (shallAddNotification === true) {
        const id = uuidv4()
        dispatch({
          type: ALERT_SUCCESS,
          payload: { message: 'Book list has been updated', id },
        })
        const timeoutId = setTimeout(() => {
          dispatch({ type: ALERT_REMOVE, payload: { id } })
          clearTimeout(timeoutId)
        }, 3000)
      }
    },
    (error) => {
      dispatch({ type: GET_BOOKS_FAILURE, error: error.toString() })
      const id = uuidv4()
      dispatch({
        type: ALERT_ERROR,
        payload: { message: error.toString(), id },
      })
      const timeoutId = setTimeout(() => {
        dispatch({ type: ALERT_REMOVE, payload: { id } })
        clearTimeout(timeoutId)
      }, 3000)
    }
  )
}

export const getBook = (bookId) => (dispatch) => {
  dispatch({ type: GET_BOOK_REQUEST })
  booksService.getBook(bookId).then(
    (book) => {
      dispatch({ type: GET_BOOK_SUCCESS, book: book })
    },
    (error) => {
      dispatch({ type: GET_BOOK_FAILURE, error: error.toString() })
      const id = uuidv4()
      dispatch({
        type: ALERT_ERROR,
        payload: { message: error.toString(), id },
      })
      const timeoutId = setTimeout(() => {
        dispatch({ type: ALERT_REMOVE, payload: { id } })
        clearTimeout(timeoutId)
      }, 3000)
    }
  )
}

export const addBook = (book) => (dispatch) => {
  dispatch({ type: ADD_BOOK_REQUEST })
  booksService.addBook(book).then(
    (book) => {
      const id = uuidv4()
      dispatch({ type: ADD_BOOK_SUCCESS, book })
      dispatch({
        type: ALERT_SUCCESS,
        payload: {
          id,
          message:
            'New book was added to the book list, previous elements of list were not changed.',
        },
      })
      dispatch(getBooks(dispatch, true))

      const timeoutId = setTimeout(() => {
        dispatch({ type: ALERT_REMOVE, payload: { id } })
        clearTimeout(timeoutId)
      }, 10000)
    },
    (error) => {
      const id = uuidv4()
      dispatch({ type: ADD_BOOK_FAILURE, error: error.toString() })
      dispatch({
        type: ALERT_ERROR,
        payload: {
          id,
          message:
            'The problem has occured when adding new book. Book was not added.',
        },
      })
      const timeoutId = setTimeout(() => {
        dispatch({ type: ALERT_REMOVE, payload: { id } })
        clearTimeout(timeoutId)
      }, 10000)
    }
  )
}

export const editBook = (book) => (dispatch) => {
  dispatch({ type: EDIT_BOOK_REQUEST })
  booksService.editBook(book).then(
    (book) => {
      const id = uuidv4()
      dispatch({ type: EDIT_BOOK_SUCCESS, book })
      dispatch({
        type: ALERT_SUCCESS,
        payload: {
          message: `Book list was changed. Book ${book.id} has been edited`,
          id,
        },
      })
      dispatch(getBooks(dispatch, true))
      const timeoutId = setTimeout(() => {
        dispatch({ type: ALERT_REMOVE, payload: { id } })
        clearTimeout(timeoutId)
      }, 3000)
    },
    (error) => {
      const id = uuidv4()
      dispatch({ type: EDIT_BOOK_FAILURE, error: error.toString(), id })
      const timeoutId = setTimeout(() => {
        dispatch({ type: ALERT_REMOVE, payload: { id } })
        clearTimeout(timeoutId)
      }, 3000)
    }
  )
}

export const deleteBook = (bookId) => (dispatch) => {
  dispatch({ type: DELETE_BOOK_REQUEST })
  booksService.deleteBook(bookId).then(
    () => {
      const id = uuidv4()
      dispatch({ type: DELETE_BOOK_SUCCESS })
      dispatch(getBooks(dispatch, true))
      dispatch({
        type: ALERT_SUCCESS,
        payload: {
          message: `Book list was changed. Book ${bookId} has been removed`,
          id,
        },
      })
      const timeoutId = setTimeout(() => {
        dispatch({ type: ALERT_REMOVE, payload: { id } })
        clearTimeout(timeoutId)
      }, 10000)
    },
    (error) => {
      dispatch({ type: DELETE_BOOK_FAILURE, error: error.toString() })
      const id = uuidv4()
      dispatch({
        type: ALERT_ERROR,
        payload: { message: error.toString(), id },
      })
      const timeoutId = setTimeout(() => {
        dispatch({ type: ALERT_REMOVE, payload: { id } })
        clearTimeout(timeoutId)
      }, 3000)
    }
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getBooks,
  addBook,
  editBook,
  deleteBook,
  getBook,
}
