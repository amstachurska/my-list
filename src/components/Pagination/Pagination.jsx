import React, { useCallback, useEffect, useRef, useState } from 'react'
import './Pagination.css'

export const Pagination = ({ list, setPaginatedBookList }) => {
  const itemsPerPage = useRef(null)
  const offset = useRef(null)
  const page = useRef(null)
  const pagesNumber = useRef(null)
  const pagination = useRef({
    actualSize: 0,
    initialNumber: 0,
  })

  const handleListUpdate = useCallback(
    (page) => {
      const start = itemsPerPage.current.value * (page - 1)
      const end = start + Number(itemsPerPage.current.value)
      const updatedList = list.slice(start, end)

      setPaginatedBookList(updatedList)
    },
    [list, setPaginatedBookList]
  )

  const createPaginationExactSizes = useCallback(() => {
    let paginationMaxSize = 2 * Number(offset.current.value) + 1
    let paginationActualSize =
      paginationMaxSize > Number(pagesNumber.current.value)
        ? Number(pagesNumber.current.value)
        : paginationMaxSize

    let paginationInitialNumber = 1

    if (
      page.current.value - offset.current.value <= 0 ||
      page.current.value + offset.current.value > pagesNumber.current.value
    ) {
      if (page.current.value - offset.current.value <= 0) {
        paginationInitialNumber = 1
      }

      if (
        page.current.value + offset.current.value >
        pagesNumber.current.value
      ) {
        paginationInitialNumber =
          Number(pagesNumber.current.value) - paginationActualSize + 1
      }
    } else {
      paginationInitialNumber = page.current.value - offset.current.value
    }

    pagination.current = {
      paginationActualSize: paginationActualSize,
      paginationInitialNumber: paginationInitialNumber,
    }

    if (page.current.value > paginationActualSize) {
      page.current.value = paginationActualSize
    }
  }, [])

  const setPagination = useCallback(() => {
    createPaginationExactSizes()
    handleListUpdate(page.current.value)
  }, [createPaginationExactSizes, handleListUpdate])

  const handlePageInput = useCallback(
    (event) => {
      if (page.current.value > pagesNumber.current.value) {
        page.current.value = pagesNumber.current.value
      }
      if (offset.current.value > Math.floor(pagesNumber.current.value / 2)) {
        offset.current.value = Math.floor(pagesNumber.current.value / 2)
      }

      setPagination()
    },
    [setPagination]
  )

  const changePagination = useCallback(
    (e) => {
      let newPage = Number(e.target.innerText)
      page.current.value = newPage

      setPagination()
    },
    [setPagination]
  )

  useEffect(() => {
    page.current.value = 1
    offset.current.value = 3
    itemsPerPage.current.value = 10
  }, [])

  useEffect(() => {
    pagesNumber.current.value = Math.ceil(
      list.length / itemsPerPage.current.value
    )
    setPagination()
  }, [list, setPagination])

  return (
    <div style={{ marginBottom: '20px' }}>
      <div className="pagination__paginator-container">
        {Array.from(
          { length: pagination.current.paginationActualSize },
          (_, index) => {
            return (
              <button
                key={index}
                className={
                  'pagination__page ' +
                  `${
                    index + pagination.current.paginationInitialNumber ===
                    Number(page.current?.value)
                      ? 'pagination__page--active'
                      : ''
                  }`
                }
                onClick={changePagination}
              >
                {index + pagination.current.paginationInitialNumber}
              </button>
            )
          }
        )}
      </div>
      <form className="pagination__inputs">
        <label aria-label="Page">
          Page
          <input
            ref={page}
            name="page"
            type="number"
            placeholder="Choose page number"
            onChange={handlePageInput}
            min={Number(1)}
            max={pagesNumber.current?.value}
          />
        </label>
        <span>of</span>
        <label aria-label="Number of pages">
          <input
            ref={pagesNumber}
            name="pagesNumber"
            type="number"
            placeholder="Number of mages"
            disabled
          />
        </label>
        <label aria-label="Offset">
          Offset
          <input
            ref={offset}
            name="offset"
            type="number"
            placeholder="Offset:"
            onChange={handlePageInput}
            min={Number(0)}
            max={Math.floor(pagesNumber.current?.value / 2) || 0}
          />
        </label>
        <label aria-label="Items per page">
          Items per Page
          <input
            ref={itemsPerPage}
            name="itemsPerPage"
            type="number"
            placeholder="Items per page:"
            onChange={handlePageInput}
            min={Number(0)}
            max={list?.length}
          />
        </label>
      </form>
    </div>
  )
}
