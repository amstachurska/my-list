import React from 'react'
import { Field } from 'redux-form'
import PropTypes from 'prop-types'
import Input from '../../../common/form/Input'

const Directors = ( { fields, meta: { error, submitFailed } } ) => (
    <ul className="directors">
      <li key="directors__add">
        <button onClick={() => fields.push({})}type="button">Add director</button>
        {error && submitFailed && (<span>{error}</span>)}
      </li>
      {fields.map((director, index) => (
        <li key={index}>
          <h3>Director: {index +1}</h3>
          <Field
            component={Input}
            label="First name"
            name={`${director}.name`}
            type="text"
          />
          <Field
            component={Input}
            label="Surname"
            name={`${director}.surname`}
            type="text"
          />
          <button
            onClick={() => fields.remove(index)}
            title="Remove director"
            type="button"
          >Remove director</button>
        </li>
      ))}
    </ul>
  )

  Directors.propTypes = {
    fields: PropTypes.object,
    meta: PropTypes.object
  }

export default Directors