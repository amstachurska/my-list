import React from 'react'
import classNames from 'class-names'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const MoviesHeaderItem = ({ label, sortMovies, value }) => {
  const orderBy = useSelector((state) => state.movies.field)
  const orderWay = useSelector((state) => state.movies.way)

  return (
    <th>
      <button
        className={classNames('movies-list__header-button', {
          '--sorted': orderBy === value,
        })}
        disabled={value === 'cathegory'}
        onClick={(e) => sortMovies(value, e)}
        type="button"
      >
        <>
          {label}
          {orderBy === value &&
            (orderWay === 'asc' ? <span>&uarr;</span> : <span>&darr;</span>)}
        </>
      </button>
    </th>
  )
}

export default MoviesHeaderItem

MoviesHeaderItem.propTypes = {
  label: PropTypes.string,
  sortMovies: PropTypes.func,
  value: PropTypes.string,
}
