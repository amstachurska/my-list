import { apiClient } from '../client/apiClient'

const getMovies = () =>
  apiClient
    .get({ url: '/movies' })
    .then(handleResponse)
    .then((movies) => movies)
const addMovie = (movie) =>
  apiClient
    .post({ url: '/movies', body: { ...movie } })
    .then(handleResponse)
    .then((movie) => movie)
const editMovie = (movie) =>
  apiClient
    .put({ url: `/movies/${movie.id}`, body: { ...movie } })
    .then(handleResponse)
    .then((movie) => movie)
const deleteMovie = (id) =>
  apiClient.delete({ url: `/movies/${id}` }).then(handleResponse)
const getMovie = (id) =>
  apiClient
    .get({ url: `/movies/${id}` })
    .then(handleResponse)
    .then((movie) => movie)

const handleResponse = (response) =>
  response.text().then((text) => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    return data
  })

export const moviesService = {
  getMovies,
  addMovie,
  editMovie,
  deleteMovie,
  getMovie,
}
