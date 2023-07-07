import React from 'react'

import PropTypes from 'prop-types'

const IntroductionDescriptionItemArrow = ({ direction }) => {
  switch (direction) {
    case 'left':
      return <span className="introduction-description__arrow">&nbsp;&#8592;</span>
    case 'right':
      return <span className="introduction-description__arrow">&nbsp;&#8594;</span>
    case 'up':
      return <span className="introduction-description__arrow">&nbsp;&#8593;</span>
    case 'down':
      return <span className="introduction-description__arrow">&nbsp;&#8595;</span>
    default:
      return <span className="introduction-description__arrow">&nbsp;&#8594;</span>
  }
}

IntroductionDescriptionItemArrow.propTypes = {
  direction: PropTypes.oneOf(['down', 'left', 'right', 'up']),
}

export default IntroductionDescriptionItemArrow
