import React, { useEffect, useMemo } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Field, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import allActions from '../../../../store/allActions'
import Checkbox from '../../../common/form/Checkbox'
import Select from '../../../common/form/Select'

const Step2 = ({ currentStep, isBook, isSaga }) => {
  const dispatch = useDispatch()
  const books = useSelector((store) => store.books.books)
  const movies = useSelector((store) => store.movies.movies)
  const mappedBooks = useMemo(
    () =>
      books &&
      books
        .map((book) => ({
          id: book.id,
          label: `${book.author} - ${book.titlePl}`,
          value: book.id,
        }))
        .sort((book1, book2) => (book1.label > book2.label ? 1 : -1)),
    [books]
  )
  const mappedMovies = useMemo(
    () =>
      movies &&
      movies
        .map((movie) => ({
          id: movie.id,
          label: `${movie.title} (${movie.titlePl}) - ${movie.year}`,
          value: movie.id,
        }))
        .sort((movie1, movie2) => (movie1.label > movie2.label ? 1 : -1)),
    [movies]
  )

  useEffect(() => {
    isBook && dispatch(allActions.booksActions.getBooks())
  }, [dispatch, isBook])

  useEffect(() => {
    isSaga && dispatch(allActions.moviesActions.getMovies())
  }, [dispatch, isSaga])

  if (currentStep !== 2 || (!!isSaga && !movies) || (!!isBook && !books))
    return null

  return (
    <>
      <h2>Linked items</h2>
      <Field component={Checkbox} label="Is based on book?" name="isBook" />
      {isBook && (
        <>
          <h3>Choose linked books</h3>
          <Field
            component={Select}
            isMulti
            label="Linked Books"
            name="linkedBooks"
            options={mappedBooks}
          />
        </>
      )}
      <Field component={Checkbox} label="Is saga?" name="isSaga" />
      {isSaga && (
        <>
          <h3>Choose linked movies</h3>
          <Field
            component={Select}
            isMulti
            label="Linked Movies"
            name="linkedMovies"
            options={mappedMovies}
          />
        </>
      )}
    </>
  )
}
const formValues = formValueSelector('addMovie')

const mapStateToProps = (state) => ({
  isBook: formValues(state, 'isBook'),
  isSaga: formValues(state, 'isSaga'),
})

Step2.propTypes = {
  currentStep: PropTypes.number.isRequired,
  isBook: PropTypes.bool,
  isSaga: PropTypes.bool,
}

export default connect(mapStateToProps)(Step2)
