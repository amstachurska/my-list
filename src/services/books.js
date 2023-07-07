import { apiClient } from '../client/apiClient'

const getBooks = () =>
  apiClient
    .get({ url: '/books' })
    .then(handleResponse)
    .then((books) => books)
const getBook = (bookId) =>
  apiClient
    .get({ url: `/books/${bookId}` })
    .then(handleResponse)
    .then((book) => book)
const addBook = (book) =>
  apiClient
    .post({ url: '/books', body: { ...book } })
    .then(handleResponse)
    .then((book) => book)
const editBook = (book) =>
  apiClient
    .put({ url: `/books/${book.id}`, body: { ...book } })
    .then(handleResponse)
    .then((book) => book)
const deleteBook = (bookId) =>
  apiClient
    .delete({ url: `/books/${bookId}` })
    .then(handleResponse)
    .then((book) => book)

const handleResponse = (response) =>
  response.text().then((text) => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    return data
  })

export const booksService = {
  addBook,
  deleteBook,
  editBook,
  getBooks,
  getBook,
}
