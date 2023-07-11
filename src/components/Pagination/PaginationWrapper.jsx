import React, { useEffect, useState } from 'react'
import { Pagination } from './Pagination'

export const PaginationWrapper = ({ list, setPaginatedBookList }) => {
  const itemsPerPage = 10

  const handleListUpdate = (page) => {
    const start = itemsPerPage * (page - 1)
    const end = start + itemsPerPage
    const updatedList = list.slice(start, end)

    setPaginatedBookList(updatedList)
  }

  if (!list.length) return <div>Loading...</div>
  return (
    <Pagination
      pagesNumber={Math.ceil(list.length / itemsPerPage)}
      handleListUpdate={handleListUpdate}
    />
  )
}
