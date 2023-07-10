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

  const handleTitleChange = (event) => {
    event.persist()
    setTitle(event.target.value)
    const field = event.target.name
    setFilters((prevValue) => ({
      ...prevValue,
      [field]: event.target.value,
    }))
  }

  const handleYearChange = (event) => {
    event.persist()
    setYear(event.target.value)
    setFilters((prevValue) => ({
      ...prevValue,
      year: event.target.value,
    }))
  }

  return (
    <form className="movies-list__filter">
      <div>
        <label className="movies-list__filter-label" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          name="title"
          className="movies-list__filter-input"
          type="text"
          value={title || ''}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label className="movies-list__filter-label" htmlFor="year">
          Year
        </label>
        <input
          id="year"
          name="year"
          className="movies-list__filter-input"
          type="text"
          value={year || ''}
          onChange={handleYearChange}
        />
      </div>
      <label className="movies-list__filter-label" htmlFor="cathegory">
        Cathegory
      </label>
      <Select
        className="movies-list__cathegory"
        isMulti
        onChange={handleCathegoryChange}
        value={cathegory}
        options={GENRE_OPTIONS}
      />
      <label className="movies-list__filter-label" htmlFor="status">
        Status
      </label>
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
