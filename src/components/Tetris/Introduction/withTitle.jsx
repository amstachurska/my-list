import React from 'react'

const withTitle = (WrappedComponent, title, ...outerProps) => ({...props}) => {
  return (
    <>
      <h1 className="introduction__header">{title}</h1>
      <h2>created by Anna Stachurska</h2>
      <WrappedComponent {...props}/>
    </>
  )
}

export default withTitle