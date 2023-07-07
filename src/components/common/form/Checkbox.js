import { get } from 'lodash'
import React from 'react'
import classNames from 'class-names'
import PropTypes from 'prop-types'
import { ReactComponent as Icon } from '../../../assets/images/common/checkbox.svg'

const Checkbox = (props) => {
  const { input, label, wrapperClassName } = props
  const id = get(props, 'id') ? get(props, 'id') : get(props, 'input.name')
  return (
    <div
      className={classNames(
        'checkbox',
        { [wrapperClassName]: !!wrapperClassName },
        { '--checked': get(input, 'value') === true }
      )}
    >
      {label && (
        <label className="checkbox__label" htmlFor={id}>
          <span className="checkbox__sign">
            <Icon className="checkbox__icon" width={20} height={20} />
          </span>
          <span className="checkbox__text">{label}</span>
        </label>
      )}
      <input className="checkbox__input" id={id} type="checkbox" {...input} />
    </div>
  )
}

Checkbox.propTypes = {
  id: PropTypes.string,
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  wrapperClassName: PropTypes.string,
}

export default Checkbox
