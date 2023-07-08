import React, { useEffect, useState } from 'react'
import classNames from 'class-names'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Field, Form, formValueSelector, reduxForm } from 'redux-form'
import { get } from 'lodash'
import { notification } from 'antd'
import allActions from '../../../../store/allActions'
import { BOOK_GENRE } from '../const'

//import Multiselect from 'react-widgets/lib/Multiselect'

//json-server --watch db.json --port 3001 -r routes.json
const ENTER_KEY = 13

const renderField = ({
  input,
  label,
  type,

  meta: { touched, error, warning },
}) => {
  return (
    <div className="books-form-field">
      <label className="books-form-field__label">{label}</label>
      <div className="books-form-field-data">
        <input
          className="books-form-field-data__input"
          {...input}
          placeholder={label}
          type={type}
        />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
}

let MyBooksForm = ({
  title,
  author,
  titlePl,
  rating,
  status,
  dateOfBeingRead,
  language,
  isAdaptation,
  genre,
  pristine,
  reset,
  submitting,
  initialValues,
  isEdit,
  isSaga,
}) => {
  console.log('initialValues', status, initialValues)
  const [isDecorationVisible, setIsDecorationVisible] = useState(false)
  const dispatchAction = useDispatch()

  const alert = useSelector((store) => store.alerts.alert)
  const booksList = useSelector((store) => store.books.books)
  const isBookPending = useSelector((store) => store.books.isPending)

  const handleSubmit = (event) => {
    event.preventDefault()

    const book = {
      title,
      titlePl,
      author,
      rating,
      status,
      dateOfBeingRead,
      language,
      isAdaptation,
      genre,
      isSaga,
    }

    if (isEdit) {
      dispatchAction(
        allActions.booksActions.editBook({ ...book, id: initialValues.id })
      )
    } else {
      dispatchAction(allActions.booksActions.addBook(book))
    }
  }

  const preventFormSubmitOnEnter = (event) => {
    if (event.keyCode === ENTER_KEY) {
      event.preventDefault()
    }
  }

  useEffect(() => {
    notification.config({
      placement: 'bottomRight',
      bottom: 50,
      duration: 2,
    })
  }, [])

  useEffect(() => {
    if (
      (isEdit && !isBookPending && booksList.length === 0) ||
      (!isEdit && booksList.length === 0)
    ) {
      dispatchAction(allActions.booksActions.getBooks())
    }
  }, [booksList, dispatchAction, isBookPending, isEdit])

  useEffect(() => {
    alert &&
      alert.type &&
      notification.open({
        message:
          alert.type === 'alert-success' ? 'Action succeded' : 'Action failed',
        description: alert.message,
      })

    let timeoutId

    if (alert && alert.type === 'alert-success') {
      setIsDecorationVisible(true)
      timeoutId = setTimeout(() => {
        setIsDecorationVisible(false)
      }, 3000)
    }
    return () => {
      clearTimeout(timeoutId)
      setIsDecorationVisible(false)
    }
  }, [alert, setIsDecorationVisible])

  // useEffect(() => {
  //   console.log('jesyem w return 2 a', isDecorationVisible)
  //   setIsDecorationVisible(false)
  //   console.log('jesyem w return 2 aa', isDecorationVisible)
  // }, [])

  return (
    <>
      {!isDecorationVisible && (
        <Form className="books-form" onSubmit={handleSubmit}>
          <h1 className="books-form__title">
            {isEdit ? 'Edit book' : 'Add book'}
          </h1>
          <Field
            className="books-form-field"
            component={renderField}
            label="Title"
            name="title"
            placeholder="Enter the title"
            type="text"
            onKeyDown={preventFormSubmitOnEnter}
          />
          <Field
            className="books-form-field"
            component={renderField}
            label="Title in Polish"
            name="titlePl"
            placeholder="Enter the title in Polish"
            type="text"
          />
          <Field
            className="books-form-field"
            component={renderField}
            label="Author"
            name="author"
            placeholder="Enter the autor"
            type="text"
          />
          <div className="rating books-form-field">
            <span className="books-form-field__label">Rating</span>
            <div className="books-form-field-data">
              <span>
                <Field
                  className={classNames('books-form-field-data__input-rating', {
                    active: rating === '1',
                  })}
                  name="rating"
                  type="radio"
                  id="start1"
                  value="1"
                  component="input"
                />
                <label htmlFor="start1">☆</label>
              </span>
              <span>
                <Field
                  className={classNames('books-form-field-data__input-rating', {
                    active: rating === '2',
                  })}
                  name="rating"
                  type="radio"
                  id="start2"
                  value="2"
                  component="input"
                />
                <label htmlFor="start2">☆</label>
              </span>
              <span>
                <Field
                  className={classNames('books-form-field-data__input-rating', {
                    active: rating === '3',
                  })}
                  name="rating"
                  type="radio"
                  id="start3"
                  value="3"
                  component="input"
                />
                <label htmlFor="start3">☆</label>
              </span>
              <span>
                <Field
                  className={classNames('books-form-field-data__input-rating', {
                    active: rating === '4',
                  })}
                  name="rating"
                  type="radio"
                  id="start4"
                  value="4"
                  component="input"
                />
                <label htmlFor="start4">☆</label>
              </span>
              <span>
                <Field
                  className={classNames('books-form-field-data__input-rating', {
                    active: rating === '5',
                  })}
                  checked={rating === '5'}
                  name="rating"
                  type="radio"
                  id="start5"
                  value="5"
                  component="input"
                  active={(rating === '5').toString()}
                />
                <label htmlFor="start5">☆</label>
              </span>
            </div>
          </div>
          <div className="books-form-field">
            <label className="books-form-field__label">Status</label>
            <div className="books-form-field-data">
              <Field name="status" component="select">
                <option value="done">Read</option>
                <option value="inProgress">During reading</option>
                <option value="toRead">To be read</option>
              </Field>
            </div>
          </div>
          <Field
            className="books-form-field"
            component={renderField}
            label="Date of being read"
            name="date"
            placeholder="Enter the date when you completed reading"
            type="date"
          />

          {/* https://redux-form.com/6.0.0-rc.4/examples/react-widgets/ */}
          {/* https://redux-form.com/6.0.0-rc.1/examples/fieldarrays/ */}
          <div className="books-form-field">
            <label className="books-form-field__label">Genre</label>
            <div className="books-form-field-data">
              <Field
                name="genre"
                component="select"
                type="select-multiple"
                multiple
              >
                {BOOK_GENRE.map((genre) => (
                  <option key={genre.value} value={genre.value}>
                    {genre.label}
                  </option>
                ))}
              </Field>
            </div>
          </div>
          <div className="books-form-field">
            <label>Language</label>
            <div>
              <Field name="language" component="select">
                <option value="pol">Polish</option>
                <option value="eng">English</option>
              </Field>
            </div>
          </div>
          <Field
            className="books-form-field"
            component={renderField}
            label="Movie adaptation"
            name="adaptation"
            placeholder="adaptation"
            type="checkbox"
          />

          <Field
            className="books-form-field"
            component={renderField}
            label="Is saga"
            name="isSaga"
            type="checkbox"
          />
          {isSaga && (
            <div className="books-form-field">
              <label className="books-form-field__label">Saga items</label>
              <div className="books-form-field-data">
                <Field
                  label="Saga itemts"
                  name="sagaItems"
                  component="select"
                  type="select-multiple"
                  multiple
                >
                  {booksList.map((bookItem) => (
                    <option key={bookItem.id} value={bookItem.id}>
                      {`${get(bookItem, 'author', '')} - ${get(
                        bookItem,
                        'title',
                        ''
                      )}(${get(bookItem, 'titlePl', '')})`}
                    </option>
                  ))}
                </Field>
              </div>
            </div>
          )}
          {/* tutaj dodac link aby polaczyc z baza do filmow  */}
          {/* https://redux-form.com/6.0.0-rc.1/examples/fieldarrays/ */}
          <div className="books-form__sub-nav">
            <button
              className="books-form-submit"
              disabled={submitting}
              type="submit"
            >
              {isEdit ? 'Edit book' : 'Add Book'}
            </button>
            <button
              className="books-form-reset"
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
            >
              {isEdit ? 'Go back to initial book' : 'Clear Values'}
            </button>
          </div>
        </Form>
      )}
      {isDecorationVisible && (
        <img
          alt="decoration Eric reading"
          src="https://media.giphy.com/media/nM3ETO7d6t51m/giphy.gif"
        />
      )}
    </>
  )
}

// function mapStateToProps(state, ownProps) {
//   console.log('own', ownProps)
//   return {
//     initialValues: {...ownProps.book}
//   }
// }

MyBooksForm = reduxForm({
  form: 'addBook',
})(MyBooksForm)

const selector = formValueSelector('addBook')
MyBooksForm = connect((state) => {
  const title = selector(state, 'title')
  const titlePl = selector(state, 'titlePl')
  const author = selector(state, 'author')
  const rating = selector(state, 'rating')
  const status = selector(state, 'status') || 'done'
  const genre = selector(state, 'genre')
  const dateOfBeingRead = selector(state, 'date')
  const language = selector(state, 'language') || 'pol'
  const isAdaptation = selector(state, 'adaptation') || false
  const isSaga = selector(state, 'isSaga') || false

  // or together as a group
  // const { firstName, lastName } = selector(state, 'firstName', 'lastName')
  return {
    title,
    author,
    titlePl,
    rating,
    status,
    dateOfBeingRead,
    language,
    isAdaptation,
    genre,
    isSaga,
    // fullName: `${firstName || ''} ${lastName || ''}`
  }
})(MyBooksForm)

// export default reduxForm({ form: 'addBook' })(MyBooksForm)

export default MyBooksForm
