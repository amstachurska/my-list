import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({ className, content }) => {
  return <p className={`badge ${className}`}>{content}</p>
}

Badge.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
}

export default Badge
