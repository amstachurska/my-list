import React, { useContext } from 'react'
import classNames from 'class-names'
import PropTypes from 'prop-types'

import { SortContext } from '../MoviesWrapper'

const MoviesHeaderItem = ({ label, sortMovies, value }) => {
  const order = useContext(SortContext)

  return (
    <th>
      <button
        className={classNames('movies-list__header-button', {
          '--sorted': order.orderBy === value,
        })}
        disabled={value === 'cathegory'}
        onClick={(e) => sortMovies(value, e)}
        type="button"
      >
        <>
          {label}
          {order.orderBy === value &&
            (order.orderWay === 'asc' ? (
              <span>&uarr;</span>
            ) : (
              <span>&darr;</span>
            ))}
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
