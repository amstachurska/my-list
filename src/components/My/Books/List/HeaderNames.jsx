import React from 'react'
import PropTypes from 'prop-types'

const MyBooksListHeaderNames = ({ onHeaderClick, sortSetting }) => {
  return (
    <tr>
      <th
        className="books-table__header-element -names -no"
        onClick={() => onHeaderClick('id')}
      >
        No.
        {sortSetting.key === 'id' && sortSetting.order === 'asc' && (
          <span className="books-table-header-element__arrow">&uarr;</span>
        )}
        {sortSetting.key === 'id' && sortSetting.order === 'des' && (
          <span className="books-table-header-element__arrow">&darr;</span>
        )}
      </th>
      <th
        className="books-table__header-element -names -title"
        onClick={() => onHeaderClick('title')}
      >
        Title
        {sortSetting.key === 'title' && sortSetting.order === 'asc' && (
          <span className="books-table-header-element__arrow">&uarr;</span>
        )}
        {sortSetting.key === 'title' && sortSetting.order === 'des' && (
          <span className="books-table-header-element__arrow">&darr;</span>
        )}
      </th>
      <th
        className="books-table__header-element -names -titlePl"
        onClick={() => onHeaderClick('titlePl')}
      >
        Title in Polish
        {sortSetting.key === 'titlePl' && sortSetting.order === 'asc' && (
          <span className="books-table-header-element__arrow">&uarr;</span>
        )}
        {sortSetting.key === 'titlePl' && sortSetting.order === 'des' && (
          <span className="books-table-header-element__arrow">&darr;</span>
        )}
      </th>
      <th
        className="books-table__header-element -author"
        onClick={() => onHeaderClick('author')}
      >
        Author
        {sortSetting.key === 'author' && sortSetting.order === 'asc' && (
          <span className="books-table-header-element__arrow">&uarr;</span>
        )}
        {sortSetting.key === 'author' && sortSetting.order === 'des' && (
          <span className="books-table-header-element__arrow">&darr;</span>
        )}
      </th>
      <th
        className="books-table__header-element -rating"
        onClick={() => onHeaderClick('rating')}
      >
        Rating
        {sortSetting.key === 'rating' && sortSetting.order === 'asc' && (
          <span className="books-table-header-element__arrow">&uarr;</span>
        )}
        {sortSetting.key === 'rating' && sortSetting.order === 'des' && (
          <span className="books-table-header-element__arrow">&darr;</span>
        )}
      </th>
      <th
        className="books-table__header-element -language"
        onClick={() => onHeaderClick('language')}
      >
        Language
        {sortSetting.key === 'language' && sortSetting.order === 'asc' && (
          <span className="books-table-header-element__arrow">&uarr;</span>
        )}
        {sortSetting.key === 'language' && sortSetting.order === 'des' && (
          <span className="books-table-header-element__arrow">&darr;</span>
        )}
      </th>
      <th
        className="books-table__header-element -isRead"
        onClick={() => onHeaderClick('status')}
      >
        isRead
        {sortSetting.key === 'status' && sortSetting.order === 'asc' && (
          <span className="books-table-header-element__arrow">&uarr;</span>
        )}
        {sortSetting.key === 'status' && sortSetting.order === 'des' && (
          <span className="books-table-header-element__arrow">&darr;</span>
        )}
      </th>
      <th
        className="books-table__header-element -dateOfReading"
        onClick={() => onHeaderClick('dateOfBeingRead')}
      >
        Date of reading
        {sortSetting.key === 'dateOfBeingRead' &&
          sortSetting.order === 'asc' && (
            <span className="books-table-header-element__arrow">&uarr;</span>
          )}
        {sortSetting.key === 'dateOfBeingRead' &&
          sortSetting.order === 'des' && (
            <span className="books-table-header-element__arrow">&darr;</span>
          )}
      </th>
      <th className="books-table__header-element -genre">Genre</th>
      <th
        className="books-table__header-element -isMovie"
        onClick={() => onHeaderClick('isAdaptation')}
      >
        Movie
        {sortSetting.key === 'isAdaptation' && sortSetting.order === 'asc' && (
          <span className="books-table-header-element__arrow">&uarr;</span>
        )}
        {sortSetting.key === 'isAdaptation' && sortSetting.order === 'des' && (
          <span className="books-table-header-element__arrow">&darr;</span>
        )}
      </th>
      <th
        className="books-table__header-element -isSaga"
        onClick={() => onHeaderClick('isSaga')}
      >
        Saga
        {sortSetting.key === 'isSaga' && sortSetting.order === 'asc' && (
          <span className="books-table-header-element__arrow">&uarr;</span>
        )}
        {sortSetting.key === 'isSaga' && sortSetting.order === 'des' && (
          <span className="books-table-header-element__arrow">&darr;</span>
        )}
      </th>
      <th className="books-table__header-element -edit"> </th>
    </tr>
  )
}
MyBooksListHeaderNames.propTypes = {
  onHeaderClick: PropTypes.func,
  sortSetting: PropTypes.object,
}

export default MyBooksListHeaderNames
