import React from 'react'

import PropTypes from 'prop-types'

import IntroductionDescriptionItemArrow from './Arrow'

const IntroductionDescriptionItem = ({ direction, text }) => (
  <p className="introduction-description__text">
    to {text} press
    <IntroductionDescriptionItemArrow direction={direction} />
  </p>
)

IntroductionDescriptionItem.propTypes = {
  direction: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default IntroductionDescriptionItem
