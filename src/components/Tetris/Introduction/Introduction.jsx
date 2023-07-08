import React from 'react'

import IntroductionDescription from './Description/Description'
import IntroductionForm from './Form'

const TetrisIntroduction = () => {
  const saveResults = (values) => {
    console.log('values', values)
    //console.log('values', e, values)
    //https://www.youtube.com/watch?v=ZGOaCxX8HIU
  }
  return (
    <>
      <header></header>
      <section className="introduction">
        <IntroductionForm onSubmit={saveResults} />
        <IntroductionDescription />
      </section>
    </>
  )
}

export default TetrisIntroduction
