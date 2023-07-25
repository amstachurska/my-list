import React, { useEffect } from 'react'
import { get } from 'lodash'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import allActions from '../../../../store/allActions'
import Form from './BookForm'

const AddEditBook = (props) => {
  const { id } = useParams()
  const dispatchAction = useDispatch()
  const history = useHistory()

  const isPending = useSelector((state) => state.books.isPending)
  const book = useSelector((state) => state.books.book)
  // const [, updateState] = React.useState()
  // const forceUpdate = React.useCallback(() => updateState({}), [])

  // useEffect(() => {
  //   console.log('zmieiam book', props)
  //   forceUpdate()
  // })

  const getInitialValues = (book) => {
    if (!id)
      return {
        isSaga: false,
        isAdaptation: false,
        status: 'done',
        language: 'pol',
      }
    return {
      ...book,
      adaptation: get(book, 'isAdaptation', null),
      date: get(book, 'dateOfBeingRead', null),
    }
  }

  useEffect(() => {
    if (id && id !== 'addBook') {
      dispatchAction(allActions.booksActions.getBook(id))
    }
  }, [dispatchAction, id])

  if (isPending && !!id) return <h1>Loading...</h1>

  return (
    <>
      <header>
        <nav className="books-form__header-nav">
          <Link to="/my">Menu</Link>
          <span>/</span>
          <Link to="/my/books/board">Books</Link>
        </nav>
      </header>

      <nav className="books-form__main-nav">
        {!!id && (
          <>
            <button
              className="books-form__main-nav-item"
              disabled={!(parseInt(id) > 1)}
              onClick={() => history.push(`/my/books/${parseInt(id) - 1}`)}
            >
              Go to previous book
            </button>
            <button
              className="books-form__main-nav-item"
              onClick={() => history.push(`/my/books/${parseInt(id) + 1}`)}
            >
              Go to next book
            </button>
          </>
        )}
        <button
          className="books-form__main-nav-item"
          onClick={() => history.push('/my/books/list')}
        >
          Go to books list
        </button>
      </nav>
      <Form
        initialValues={getInitialValues(book)}
        isEdit={id !== 'add' ? true : false}
      />
    </>
  )
}

export default AddEditBook
