import React, { useEffect, useRef, useState } from 'react'
import './Pagination.css'

export const Pagination = ({ list, setPaginatedBookList }) => {
  const page = useRef(null)
  const offset = useRef(null)

  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [pagesNumber, setPagesNumber] = useState(1)
  const [paginationActualSize, setPaginationActualSize] = useState(1)
  const [paginationInitialNumber, setPaginationInitialNumber] = useState(1)

  const handleListUpdate = (page) => {
    const start = itemsPerPage * (page - 1)
    const end = start + itemsPerPage
    const updatedList = list.slice(start, end)

    setPaginatedBookList(updatedList)
  }

  useEffect(() => {
    page.current.value = 1
    offset.current.value = 3
    let initialInputs = {
      page: page.current.value,
      pagesNumber: pagesNumber,
      offset: offset.current.value,
    }

    let partialSizes = createPaginationExactSizes(initialInputs)
    setPaginationActualSize(partialSizes.paginationActualSize)
    setPaginationInitialNumber(partialSizes.paginationInitialNumber)
    handleListUpdate(page.current.value)
  }, [])

  useEffect(() => {
    setPagesNumber(Math.ceil(list.length / itemsPerPage))
  }, [itemsPerPage, list])

  useEffect(() => {
    let initialInputs = {
      page: page.current.value,
      pagesNumber: pagesNumber,
      offset: offset.current.value,
    }

    let partialSizes = createPaginationExactSizes(initialInputs)
    setPaginationActualSize(partialSizes.paginationActualSize)
    setPaginationInitialNumber(partialSizes.paginationInitialNumber)
    handleListUpdate(page.current.value)
  }, [pagesNumber])

  const createPaginationExactSizes = (inputSizes) => {
    let paginationMaxSize = 2 * Number(inputSizes.offset) + 1
    let paginationActualSize =
      paginationMaxSize > Number(inputSizes.pagesNumber)
        ? Number(inputSizes.pagesNumber)
        : paginationMaxSize

    let paginationInitialNumber = 1

    if (
      inputSizes.page - inputSizes.offset <= 0 ||
      inputSizes.page + inputSizes.offset > inputSizes.pagesNumber
    ) {
      if (inputSizes.page - inputSizes.offset <= 0) {
        paginationInitialNumber = 1
      }

      if (inputSizes.page + inputSizes.offset > inputSizes.pagesNumber) {
        paginationInitialNumber =
          Number(inputSizes.pagesNumber) - paginationActualSize + 1
      }
    } else {
      paginationInitialNumber = inputSizes.page - inputSizes.offset
    }

    let partialSizes = {
      paginationMaxSize: paginationMaxSize,
      paginationActualSize: paginationActualSize,
      paginationInitialNumber: paginationInitialNumber,
    }
    setPaginationActualSize(partialSizes.paginationActualSize)
    setPaginationInitialNumber(partialSizes.paginationInitialNumber)
    return partialSizes
  }

  const changePagination = (e) => {
    let newPage = Number(e.target.innerText)
    page.current.value = newPage

    let startingParameters = {
      page: newPage,
      pagesNumber: pagesNumber,
      offset: offset.current.value,
    }
    let partialSizes = createPaginationExactSizes(startingParameters)
    setPaginationActualSize(partialSizes.paginationActualSize)
    setPaginationInitialNumber(partialSizes.paginationInitialNumber)
    handleListUpdate(newPage)
  }

  const handlePageInput = (event) => {
    let pagesStartingParams = {}
    pagesStartingParams.page =
      event.target.name === 'page'
        ? Number(event.target.value)
        : page.current.value
    pagesStartingParams.pagesNumber = pagesNumber
    pagesStartingParams.offset =
      event.target.name === 'offset'
        ? Number(event.target.value)
        : offset.current.value

    if (pagesStartingParams.page > pagesStartingParams.pagesNumber) {
      pagesStartingParams.page = pagesStartingParams.pagesNumber
    }
    if (
      pagesStartingParams.offset >
      Math.floor(pagesStartingParams.pagesNumber / 2)
    ) {
      pagesStartingParams.offset = Math.floor(
        pagesStartingParams.pagesNumber / 2
      )
    }

    if (event.target.name === 'offset') {
      offset.current.value = event.target.value
    }
    if (event.target.name === 'page') {
      page.current.value = event.target.value
    }

    let partialSizes = createPaginationExactSizes(pagesStartingParams)

    setPaginationActualSize(partialSizes.paginationActualSize)
    setPaginationInitialNumber(partialSizes.paginationInitialNumber)
    handleListUpdate(pagesStartingParams.page)
  }

  return (
    <div>
      <div className="pagination__paginator-container">
        {Array.from({ length: paginationActualSize + 1 }, (_, index) => {
          return (
            <button
              key={index}
              className={
                'pagination__page ' +
                `${
                  index + paginationInitialNumber ===
                  Number(page.current?.value)
                    ? 'pagination__page--active'
                    : ''
                }`
              }
              onClick={changePagination}
            >
              {index + paginationInitialNumber}
            </button>
          )
        })}
      </div>
      <form className="pagination__inputs">
        <label>
          Strona
          <input
            ref={page}
            name="page"
            type="number"
            placeholder="Wybierz stronę"
            onChange={handlePageInput}
            min="1"
            max={pagesNumber}
          />
        </label>
        <span>z</span>
        <label aria-label="liczba stron">
          <input
            name="pagesNumber"
            type="number"
            placeholder="Liczba stron"
            value={pagesNumber}
            disabled
          />
        </label>
        <label>
          Offset
          <input
            ref={offset}
            name="offset"
            type="number"
            placeholder="Offset:"
            onChange={handlePageInput}
            min="0"
            max={Math.floor(pagesNumber / 2)}
          />
        </label>
      </form>
    </div>
  )
}
