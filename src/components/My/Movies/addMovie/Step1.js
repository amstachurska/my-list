import React from 'react'
import { Field, FieldArray } from 'redux-form'
import PropTypes from 'prop-types'

import Directors from './Directors'
import { GENRE_OPTIONS } from '../const'
import Input from '../../../common/form/Input'
import Select from '../../../common/form/Select'

// https://redux-form.com/8.3.0/docs/api/field.md/
// dopisac o normalize i format

// https://css-tricks.com/the-magic-of-react-based-multi-step-forms/

const Step1 = (props) => {
  const { currentStep } = props

  if (currentStep !== 1) {
    return null
  }
  return (
    <>
      <h2>Enter the main information about the movie</h2>
      <Field component={Input} label="Title" name="title"></Field>
      <Field component={Input} label="Title in Polish" name="titlePl"></Field>
      <Field
        component={Input}
        label="Year of production"
        max="2020"
        min="1888"
        name="year"
        step="1"
        type="number"
      ></Field>
      <Field
        component={Select}
        isMulti
        label="Genre"
        name="cathegory"
        options={GENRE_OPTIONS}
      />
      <FieldArray component={Directors} label="Directors" name="directors" />
    </>
  )
}

Step1.propTypes = {
  currentStep: PropTypes.number.isRequired,
}

export default Step1
