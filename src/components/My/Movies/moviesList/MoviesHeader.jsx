import React from 'react'
import PropTypes from 'prop-types'
import MoviesHeaderItem from './MoviesHeaderItem'
import { movieHeaderFields } from '../const'

const MoviesHeader = ({ sortMovies }) => (
  <thead>
    <tr>
      {movieHeaderFields.map((field) => (
        <MoviesHeaderItem
          key={field.value}
          sortMovies={sortMovies}
          label={field.label}
          value={field.value}
        />
      ))}
    </tr>
  </thead>
)

MoviesHeader.propTypes = {
  sortMovies: PropTypes.func,
}

export default MoviesHeader
