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

const initialState = {
  isPending: true,
  movies: [],
  movie: {},
  field: 'id',
  way: 'desc',
}
export const moviesList = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return {
        ...state,
        isPending: true,
      }
    case GET_MOVIES_SUCCESS:
      let sortedMovies = [...action.payload.movies]
      let way = state.way
      const field = action.payload.field || state.field

      if (['id', 'ranking', 'nrOfTimesWatched'].indexOf(field) !== -1) {
        if (action?.payload?.field === state.field) {
          if (way === 'desc') {
            sortedMovies.sort(
              (firstMovie, secondMovie) =>
                firstMovie[field] - secondMovie[field]
            )
            way = 'asc'
          } else {
            sortedMovies.sort(
              (firstMovie, secondMovie) =>
                secondMovie[field] - firstMovie[field]
            )
            way = 'desc'
          }
        } else {
          way = 'asc'
          sortedMovies.sort(
            (firstMovie, secondMovie) => firstMovie[field] - secondMovie[field]
          )
        }
      }
      if (
        [
          'title',
          'titlePl',
          'remarks',
          'year',
          'date',
          'status',
          'isWorthWatchingAgain',
        ].indexOf(field) !== -1
      ) {
        if (
          action.payload.field !== state.field ||
          (action.payload.field === state.field && way === 'desc')
        ) {
          way = 'asc'
          sortedMovies.sort((firstMovie, secondMovie) => {
            if (!firstMovie[field] && !secondMovie[field]) {
              // to nie tak
              return 2
            }
            if (
              firstMovie[field] &&
              secondMovie[field] &&
              firstMovie[field].toLowerCase() > secondMovie[field].toLowerCase()
            ) {
              return 1
            }
            if (
              !firstMovie[field] ||
              !secondMovie[field] ||
              firstMovie[field].toLowerCase() ===
                secondMovie[field].toLowerCase()
            ) {
              return 0
            }
            if (
              firstMovie[field] &&
              secondMovie[field] &&
              firstMovie[field].toLowerCase() < secondMovie[field].toLowerCase()
            ) {
              return -1
            }
            return 0
          })
        } else {
          way = 'desc'
          sortedMovies.sort((firstMovie, secondMovie) => {
            if (
              firstMovie[field] &&
              secondMovie[field] &&
              firstMovie[field].toLowerCase() < secondMovie[field].toLowerCase()
            )
              return 1
            if (
              !firstMovie[field] ||
              !secondMovie[field] ||
              firstMovie[field].toLowerCase() ===
                secondMovie[field].toLowerCase()
            )
              return 0
            if (
              firstMovie[field] &&
              secondMovie[field] &&
              firstMovie[field].toLowerCase() > secondMovie[field].toLowerCase()
            )
              return -1
            return 0
          })
        }
      }

      return {
        ...state,
        isPending: false,
        movies: sortedMovies,
        field,
        way,
      }

    case GET_MOVIES_FAILURE:
      return {
        ...state,
        isPending: false,
        movies: [],
      }

    case ADD_MOVIE_REQUEST:
      return {
        ...state,
        isPending: true,
      }

    case ADD_MOVIE_SUCCESS:
      return {
        ...state,
        isPending: false,
      }

    case ADD_MOVIE_FAILURE:
      return {
        ...state,
        isPending: false,
      }

    case EDIT_MOVIE_REQUEST:
      return {
        ...state,
        isPending: true,
      }

    case EDIT_MOVIE_SUCCESS:
      return {
        ...state,
        isPending: false,
      }

    case EDIT_MOVIE_FAILURE:
      return {
        ...state,
        isPending: false,
      }

    case DELETE_MOVIE_REQUEST:
      return {
        ...state,
        isPending: true,
      }

    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        isPending: false,
      }

    case DELETE_MOVIE_FAILURE:
      return {
        ...state,
        isPending: false,
      }

    case GET_MOVIE_REQUEST:
      return {
        ...state,
        isPending: true,
        movie: {},
      }

    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        isPending: false,
        movie: { ...action.movie },
      }

    case GET_MOVIE_FAILURE:
      return {
        ...state,
        isPending: false,
        movie: {},
      }

    default:
      return {
        ...state,
      }
  }
}

export default moviesList
