import React from 'react'

import { Form, Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'

//https://github.com/redux-form/redux-form/issues/1270
// komentarz NeXTs z 159 like

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
}

const validate = (values) => {
  const errors = {}

  if (!values.height) {
    errors.height = 'Required'
  } else if (values.height < 10) {
    errors.height = 'Minimal height of board is 10'
  } else if (values.height > 20) {
    errors.height = 'Maximal height of board is 20'
  }

  if (!values.width) {
    errors.width = 'Required'
  } else if (values.width < 10) {
    errors.width = 'Minimal width of board is 10'
  } else if (values.width > 20) {
    errors.width = 'Maximal width of board is 20'
  }
  return errors
}

const IntroductionForm = (props) => {
  const { handleSubmit } = props

  return (
    <>
      <header></header>
      <h1>Add Book to book list</h1>
      <Form onSubmit={handleSubmit}>
        <Field
          component={renderField}
          label="Choose the board height (10-20)"
          name="height"
          placeholder="Boarder height"
          type="number"
        />
        <Field
          component={renderField}
          label="Choose the board height (10-20)"
          name="width"
          placeholder="Boarder height"
          type="number"
        />
        <Field
          component={renderField}
          label="I like Tetris"
          name="like"
          type="checkbox"
        />
        <button type="submit">Play</button>
      </Form>
      {/* zrobic tetrisa z pokemonami i
       sprawdzaniem typow i dopiero wtedy zmiakaja!!! */}

      {/* https://www.youtube.com/watch?v=SX-8OivnxzM */}
    </>
  )
}

export default reduxForm({
  form: 'tetrisSettings',
  initialValues: { height: 10, width: 10, like: true },
  validate,
})(IntroductionForm)

IntroductionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
