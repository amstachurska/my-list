import React from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash'

const Input = (props) => {
  const { error, input, field, form, hint, label, meta } = props
  const innerError =
    error ||
    (field && get(form, `errors.${field.name}`)) ||
    (meta && get(meta, 'error'))

  return (
    <div className="input">
      {label && (
        <label
          className="input__label"
          htmlFor={get(input, 'name') ? get(input, 'name') : get(props, 'id')}
        >
          {label}{' '}
        </label>
      )}
      <input
        className="input__field"
        {...props}
        {...input}
        {...field}
        id={get(props, 'id') ? get(props, 'id') : get(input, 'name')}
        type={get(props, 'type') ? get(props, 'type') : 'text'}
      />
      {innerError && <p className="input__error">{innerError}</p>}
      <p className="input__hint">{hint}</p>
    </div>
  )
}

Input.propTypes = {
  error: PropTypes.string,
  field: PropTypes.object, //Formik object
  form: PropTypes.object, //Formik object
  hint: PropTypes.string,
  input: PropTypes.object, //redux-form
  label: PropTypes.string,
  meta: PropTypes.object, //redux-form
}

export default Input
