import React from 'react'
import classNames from 'class-names'
import { isEmpty } from 'lodash'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NavItem = styled.button`
  background-color: #adada1;
  padding: 8px;
  margin: 8px;
`

const AnimeNavigation = ({
  disabled,
  formikProps,
  goToPage,
  headings,
  pageIndex,
}) => {
  const handleClick = async (index) => {
    const result = await formikProps.validateForm()
    if (!isEmpty(result)) return formikProps.setTouched(result)
    pageIndex !== index && goToPage(index)
  }

  return (
    <ul>
      {headings.map((heading, index) => {
        return (
          <NavItem
            key={heading}
            className={classNames(
              'anime-nav__item',
              { '-active': index === pageIndex },
              { '-disasbled': disabled }
            )}
            type="button"
            onClick={() => handleClick(index)}
          >
            {heading}
          </NavItem>
        )
      })}
    </ul>
  )
}

AnimeNavigation.propTypes = {
  goToPage: PropTypes.func.isRequired,
  headings: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  pageIndex: PropTypes.number.isRequired,
}

export default AnimeNavigation
