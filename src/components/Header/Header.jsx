import React, { useEffect, useState } from 'react'

import HeaderComplete from './Complete'
import HeaderSmall from './Small'
const response = (
  <div
    style={{
      backgroundColor: '#f75c66',
      padding: '25px',
      margin: '0 25px',
    }}
  >
    Response
  </div>
)

const Header = ({ children }) => {
  const [isCompleteHeaderVisible, setIsCompleteHeaderVisible] = useState(false)
  const [isResponse, setIsResponse] = useState(false)

  const changeCompleteHeaderVisibility = () => {
    setIsCompleteHeaderVisible(!isCompleteHeaderVisible)
  }

  useEffect(() => {
    window.addEventListener('storage', () => {
      setIsResponse(true)
    })
  }, [])

  return (
    <>
      {isCompleteHeaderVisible && <HeaderComplete />}
      <HeaderSmall onClick={changeCompleteHeaderVisibility}>
        {isResponse && response}
        {children}
      </HeaderSmall>
    </>
  )
}

export default Header
