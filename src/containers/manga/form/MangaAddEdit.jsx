import React from 'react'
import styled from 'styled-components'
import MangaForm from './MangaForm'

const MangaAddEditStyled = styled.section`
  ${props => console.log('props', window.innerHeight, props, props.takeViewportHeight) && props.takeViewportHeight && `min-height: calc(100vh - 16px);`}
  background-color: #6768EF;
  // min-height: 80vh;
  padding: 50px;
`

const MangaAddEdit = () => {
  // window.addEventListener('click', handleResize);
  // let elem = document.querySelector('div');
  // let rect = elem.getBoundingClientRect();
  // console.log('rec', rect)
  return (
    <MangaAddEditStyled>
      <h1>Manga form</h1>
      <MangaForm onSubmit={() => {}}/>
    </MangaAddEditStyled>
  )
}

export default MangaAddEdit
