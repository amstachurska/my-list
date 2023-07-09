import React from 'react'
import PropTypes from 'prop-types'

export const Alert = ({ message, type }) => {
  return <li className={`alert ${type}`}>{message}</li>
}

Alert.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['alert-success', 'alert-error']),
}

export default Alert
