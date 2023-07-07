import React from 'react'
import PropTypes from 'prop-types'

const MoviesHeader = ({ sortMovies, orderBy, orderWay }) => (
  <thead>
    <tr>
      <th>
        <button onClick={(e) => sortMovies('id', e)} type="button">
          Index {orderWay}
          {orderBy === 'id' &&
            (orderWay === 'asc' ? <span>&uarr;</span> : <span>&darr;</span>)}
        </button>
      </th>
      <th>
        <button onClick={(e) => sortMovies('title', e)} type="button">
          Title
          {orderBy === 'title' &&
            (orderWay === 'asc' ? <span>&uarr;</span> : <span>&darr;</span>)}
        </button>
      </th>
      <th>
        <button onClick={(e) => sortMovies('titlePl', e)} type="button">
          Title in Polish
          {orderBy === 'titlePl' &&
            (orderWay === 'asc' ? <span>&uarr;</span> : <span>&darr;</span>)}
        </button>
      </th>
      <th>
        <button onClick={(e) => sortMovies('year', e)} type="button">
          Year
          {orderBy === 'year' &&
            (orderWay === 'asc' ? <span>&uarr;</span> : <span>&darr;</span>)}
        </button>
      </th>
      <th>Cathegory</th>
      <th>
        <button onClick={(e) => sortMovies('status', e)} type="button">
          Status
          {orderBy === 'status' &&
            (orderWay === 'asc' ? <span>&uarr;</span> : <span>&darr;</span>)}
        </button>
      </th>
      <th>
        <button onClick={(e) => sortMovies('date', e)} type="button">
          When watched
          {orderBy === 'date' &&
            (orderWay === 'asc' ? <span>&uarr;</span> : <span>&darr;</span>)}
        </button>
      </th>
      <th>
        <button onClick={(e) => sortMovies('ranking', e)} type="button">
          Rating
          {orderBy === 'ranking' &&
            (orderWay === 'asc' ? <span>&uarr;</span> : <span>&darr;</span>)}
        </button>
      </th>
      <th>
        <button onClick={(e) => sortMovies('shallWatchAgain', e)} type="button">
          Watch again?
          {orderBy === 'shallWatchAgain' &&
            (orderWay === 'asc' ? <span>&uarr;</span> : <span>&darr;</span>)}
        </button>
      </th>
      <th>
        <button
          onClick={(e) => sortMovies('nrOfTimesWatched', e)}
          type="button"
        >
          Nr of times watched
          {orderBy === 'nrOfTimesWatched' &&
            (orderWay === 'asc' ? <span>&uarr;</span> : <span>&darr;</span>)}
        </button>
      </th>

      <th>
        <button onClick={(e) => sortMovies('remarks', e)} type="button">
          Remarks
          {orderBy === 'remarks' &&
            (orderWay === 'asc' ? <span>&uarr;</span> : <span>&darr;</span>)}
        </button>
      </th>
    </tr>
  </thead>
)

MoviesHeader.propTypes = {
  orderBy: PropTypes.oneOf([
    'date',
    'id',
    'nrOfTimesWatched',
    'ranking',
    'remarks',
    'shallWatchAgain',
    'status',
    'title',
    'titlePl',
    'year',
  ]),
  orderWay: PropTypes.oneOf(['asc', 'desc']),
  sortMovies: PropTypes.func,
}

export default MoviesHeader
