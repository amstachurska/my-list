import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import allActions from '../../../../store/allActions'
import Badge from '../../../common/Bagde'

const MyBooksListItem = ({ book, setShallUpdate }) => {
  const dispatchAction = useDispatch()
  const renderStars = (field) => {
    if (field === 1) return <span>☆</span>
    if (field === 2) return <span>☆☆</span>
    if (field === 3) return <span>☆☆☆</span>
    if (field === 4) return <span>☆☆☆☆</span>
    if (field === 5) return <span>☆☆☆☆☆</span>
    return null
  }

  const handleStatus = (status) => {
    switch (status) {
      case 'done':
        return 'Finished'
      case 'inProgress':
        return 'In progress'
      case 'toRead':
        return 'To read'
      default:
        return 'To read'
    }
  }

  const handleGenre = (genres) => {
    // const genresList =  genres ? genres.map((genre) => (<li className={`badge -~${genre}`} >{genre}</li>) ) : null
    const genresList = genres
      ? genres.map((genre, index) => (
          <li className="list-items_map" key={`genre-${index}`}>
            <Badge className={genre} content={genre} />
          </li>
        ))
      : null

    return genresList
  }

  const deleteBook = useCallback(() => {
    dispatchAction(allActions.booksActions.deleteBook(book.id))
    setShallUpdate(true)
  }, [book.id, dispatchAction, setShallUpdate])

  //znalesc w palikacji
  // const generateRandomId = Math.random().toString(36).substring(2)

  return (
    <tr style={{ borderTop: '1px solid purple', padding: '5px 0' }}>
      <td className="books-table__item -no">{book.id}</td>
      <td className="books-table__item -title">{book.title}</td>
      <td className="books-table__item -titlePl">{book.titlePl}</td>
      <td className="books-table__item -author">{book.author}</td>
      <td className="books-table__item -rating">
        {renderStars(Number(book.rating))}
      </td>
      <td className="books-table__item -language">
        {book.hasOwnProperty('language') &&
          (book.language === 'pol' ? 'Polish' : 'English')}
      </td>
      <td className="books-table__item -isRead">
        <Badge
          className={handleStatus(book.status)
            .split(' ')
            .join('')
            .toLowerCase()}
          content={handleStatus(book.status)}
        />
      </td>
      <td className="books-table__item -dateOfReading">
        {book.dateOfBeingRead}
      </td>
      <td className="books-table__item -genre">
        {/* {book.genre ? book.genre.join(', ') : null} */}
        {handleGenre(book.genre)}
      </td>
      <td className="books-table__item -isMovie">
        {book.hasOwnProperty('isAdaptation') && (
          <input type="checkbox" checked={book.isAdaptation} disabled />
        )}
      </td>
      <td className="books-table__item -isSaga">
        {book.hasOwnProperty('isSaga') && (
          <input type="checkbox" checked={book.isSaga} disabled />
        )}
      </td>
      <td className="books-table__item -edit">
        <Link to={`/my/books/${book.id}`}>Edit</Link>
        <button onClick={deleteBook}>Delete</button>
      </td>
    </tr>
  )
}

MyBooksListItem.propTypes = {
  book: PropTypes.object,
  setShallUpdate: PropTypes.func
}

export default MyBooksListItem
