import React, { useState } from 'react'

import { connect } from 'react-redux'
import { Form, formValueSelector, Field, reduxForm } from 'redux-form'
//import Multiselect from 'react-widgets/lib/Multiselect'

//json-server --watch db.json --port 3001 -r routes.json

const renderField = ({
  input,
  label,
  type,
  style,
  meta: { touched, error, warning },
}) => {
  return (
    <div className="books-form-field" style={{ ...style }}>
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
}) => {
  const [isDecorationVisible, setIsDecorationVisible] = useState(false)
  console.log('wchodze')
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
    }

    fetch(`${process.env.REACT_APP_API_URL}/books`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...book }),
    })
      .then((response) => response.json())
      .then((success) => {
        console.log('dodano')
        reset()
        setIsDecorationVisible(true)
        const timeout = setTimeout(() => {
          setIsDecorationVisible(false)
          // wyczyscic to na unmouncie!
          clearTimeout(timeout)
        }, 10000)
      })
      .catch((error) => {
        console.log('nie dodano')
      })
  }
  return (
    <>
      {!isDecorationVisible && (
        <Form className="books-form" onSubmit={handleSubmit}>
          <div>my / books</div>
          <h1 className="books-form__title">My new book</h1>
          <Field
            className="books-form-field"
            component={renderField}
            label="Title"
            name="title"
            placeholder="Enter the title"
            type="text"
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
          <div className="rating">
            <span>Rating</span>
            <span>
              <Field
                className="books-form-field-data__input-rating"
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
                className="books-form-field-data__input-rating"
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
                className="books-form-field-data__input-rating"
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
                className="books-form-field-data__input-rating"
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
                className={`books-form-field-data__input-rating ${
                  rating === 5 ? 'active' : ''
                }`}
                checked={rating === 5}
                name="rating"
                type="radio"
                id="start5"
                value="5"
                component="input"
                active={rating === 5}
              />
              <label htmlFor="start5">☆</label>
            </span>
          </div>
          <div className="books-form-field">
            <label>Status</label>
            <div>
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
          <div>
            <label>Genre</label>
            <div>
              <Field
                name="genre"
                component="select"
                type="select-multiple"
                multiple
              >
                <option value="fantasy">Fantasy</option>
                <option value="crime">Crime story</option>
                <option value="romance">Romance</option>
                <option value="clasic">Clasic</option>
                <option value="religious">Religious</option>
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
          {/* tutaj dodac link aby polaczyc z baza do filmow  */}
          {/* https://redux-form.com/6.0.0-rc.1/examples/fieldarrays/ */}
          <div>
            <button
              className="books-form-submit"
              disabled={submitting}
              type="submit"
            >
              Add Book
            </button>
            <button
              className="books-form-reset"
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
            >
              Clear Values
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

MyBooksForm = reduxForm({
  form: 'addBook',
})(MyBooksForm)

const selector = formValueSelector('addBook')
MyBooksForm = connect((state) => {
  const title = selector(state, 'title')
  const titlePl = selector(state, 'titlePl')
  const author = selector(state, 'author')
  const rating = selector(state, 'rating')
  const status = selector(state, 'status')
  const genre = selector(state, 'genre')
  const dateOfBeingRead = selector(state, 'date')
  const language = selector(state, 'language')
  const isAdaptation = selector(state, 'adaptation')

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
    // fullName: `${firstName || ''} ${lastName || ''}`
  }
})(MyBooksForm)

// export default reduxForm({ form: 'addBook' })(MyBooksForm)

export default MyBooksForm
