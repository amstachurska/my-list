import React, { useState } from 'react'

import HeaderComplete from './Complete'
import HeaderSmall from './Small'

const Header = () => {
  const [isCompleteHeaderVisible, setIsCompleteHeaderVisible] = useState(false)

  const changeCompleteHeaderVisibility = () => {
    setIsCompleteHeaderVisible(!isCompleteHeaderVisible)
  }
  return (
    <>
      {isCompleteHeaderVisible && <HeaderComplete />}
      <HeaderSmall onClick={changeCompleteHeaderVisibility} />
    </>
  )
}

export default Header
