import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Form, reduxForm } from 'redux-form'
import { useHistory } from 'react-router'

import AddMovieMenu from './AddMovieMenu'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

// https://redux-form.com/8.3.0/docs/api/form.md/
const AddMovieForm = (props) => {
  //console.log('props w addMovieForm', props)
  const { goToNextMovie, goToPrevMovie } = props
  const history = useHistory()
  const [step, setStep] = useState(1)

  const prev = () => {
    const newStep = step - 1
    setStep(newStep)
  }

  const next = () => {
    const newStep = step + 1
    setStep(newStep)
  }

  return (
    <section className="add-movie">
      <button
        className="add-movie__button-list"
        onClick={() => history.push('/my/movies')}
      >
        Go to movie list
      </button>
      <h1 className="add-movie__title">Add Movie</h1>
      <AddMovieMenu setStep={setStep} step={step} />
      <Form onSubmit={props.onSubmit}>
        <div className="add-movie__form">
          <Step1 currentStep={step} />
          <Step2 currentStep={step} />
          <Step3 currentStep={step} />
          <div className="add-movie__nav">
            {step !== 1 && (
              <button
                className="add-movie__nav-item"
                onClick={prev}
                type="button"
              >
                Previous
              </button>
            )}
            {step !== 3 && (
              <button
                className="add-movie__nav-item"
                onClick={next}
                type="button"
              >
                Next
              </button>
            )}
          </div>
        </div>
        <div className="movie-form__menu">
          <button
            className="movie-form__menu-item"
            onClick={goToPrevMovie}
            type="button"
          >
            Go To Prev Movie
          </button>
          <button
            className="movie-form__menu-item"
            onClick={goToNextMovie}
            type="button"
          >
            Go To Next Movie
          </button>
          <button className="movie-form__menu-item" type="submit">
            Save
          </button>
        </div>
      </Form>
    </section>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    initialValues: ownProps.initialValues || {},
    // firstName: state.welcome.firstName,
    // lastName: state.welcome.lastName,
    // email: state.welcome.email
  }
}

export default connect(mapStateToProps)(
  reduxForm({
    form: 'addMovie',
    enableReinitialize: true,
    initialValues: { title: 'KOT' },
  })(AddMovieForm)
)
