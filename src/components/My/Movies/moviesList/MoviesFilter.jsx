import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { GENRE_OPTIONS, MOVIE_STATUS } from '../const'

const MoviesFilter = ({ setFilters }) => {
  const [cathegory, setCathegory] = useState([])
  const [status, setStatus] = useState([])
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')

  const handleCathegoryChange = (value) => {
    setCathegory(value)
    const cathegory =
      value && value.length > 0
        ? { cathegory: value.map((cathegory) => cathegory.value) }
        : {}

    setFilters((prevValue) => {
      const status = prevValue.status ? { status: prevValue.status } : {}
      return {
        ...status,
        ...cathegory,
      }
    })
  }

  const handleStatusChange = (event) => {
    let updatedStatus = [...status]
    if (updatedStatus.some((status) => status === event.target.value)) {
      updatedStatus = updatedStatus.filter(
        (item) => item !== event.target.value
      )
    } else {
      updatedStatus.push(event.target.value)
    }
    setStatus(updatedStatus)
    setFilters((prevValue) => ({ ...prevValue, status: updatedStatus }))
  }
  return (
    <form className="movies-list__filter">
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="year">Year</label>
        <input
          id="year"
          name="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <Select
        className="movies-list__cathegory"
        isMulti
        onChange={handleCathegoryChange}
        value={cathegory}
        options={GENRE_OPTIONS}
      />
      <select
        className="movies-list__status"
        multiple
        onChange={handleStatusChange}
        value={status}
        options={MOVIE_STATUS}
      >
        <option value="all">All</option>
        {MOVIE_STATUS &&
          MOVIE_STATUS.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      {/* <Select isMulti input={{name: 'genre'}}options={GENRE_OPTIONS}></Select> */}
    </form>
  )
}

MoviesFilter.propTypes = {
  setFilters: PropTypes.func,
}

export default MoviesFilter
