import React from 'react'

import DescriptionItem from './Item/Item'

const descriptionElements = [
  { direction: 'up', text: 'rotate the element' },
  {
    direction: 'right',
    text: 'move the element to the right',
  },
  {
    direction: 'left',
    text: 'move the element to the left',
  },
  {
    direction: 'down',
    text: 'drop the element down',
  },
]

const IntroductionDescription = () => (
  <>
    <h2>Game Instructions</h2>
    <ul className="introduction-description__list">
      {descriptionElements.map((item) => (
        <DescriptionItem {...item} key={item.direction} />
      ))}
    </ul>
  </>
)

export default IntroductionDescription
