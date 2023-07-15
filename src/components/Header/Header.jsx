import React, { useState } from 'react'

import HeaderComplete from './Complete'
import HeaderSmall from './Small'

const Header = ({ children }) => {
  const [isCompleteHeaderVisible, setIsCompleteHeaderVisible] = useState(false)

  const changeCompleteHeaderVisibility = () => {
    setIsCompleteHeaderVisible(!isCompleteHeaderVisible)
  }
  return (
    <>
      {isCompleteHeaderVisible && <HeaderComplete />}
      <HeaderSmall onClick={changeCompleteHeaderVisibility}>
        {children}
      </HeaderSmall>
    </>
  )
}

export default Header
