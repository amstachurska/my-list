import React from 'react'

import PropTypes from 'prop-types'

const hamburger = require('../../assets/images/space/space13.jpg')

const HeaderSmall = ({ onClick, children }) => {
  return (
    <header className="header-small">
      <img
        onClick={onClick}
        alt="hamgurger to menu"
        src={hamburger}
        heigth="50 "
        width="50"
        tabIndex="0"
        onKeyDown={onClick}
      />
      {children}
    </header>
  )
}

HeaderSmall.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default HeaderSmall
