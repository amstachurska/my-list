import React, { useEffect, useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import TodayILearnItem from './TodayILearntItem'

// dodac storybooka i tam jest addon do accessibility ktory pokazuje czy komponenty sa dobrze napisane

const TodayILearnt = () => {
  const [learntItems, setLearntItems] = useState(null)
  const [color, setColor] = useState('blue')

  const fetchItems = () => {
    fetch(`${process.env.REACT_APP_API_URL}/articles`, {
      method: 'GET',
      headers: {
        accept: 'Application/json',
        'Content-type': 'Application/json',
      },
    })
      .then((response) => response.json())
      .then((articles) => {
        setLearntItems(articles)
      })
  }

  useEffect(() => {
    fetchItems()
    requestAnimationFrame(() => {
      setColor('orange')
    })
  }, [])

  return (
    <section>
      <header>
        <h1 className="learnt__title">
          Description Of Properties Which I Have Learnt
        </h1>
      </header>
      <TransitionGroup component={null}>
        {learntItems && (
          <CSSTransition
            in={!!learntItems}
            timeout={2000}
            classNames="learnt-list-animated"
          >
            <ul className="learnt-list">
              {learntItems.map((item) => (
                <TodayILearnItem key={`learnt-article-${item.id}`} {...item} />
              ))}
            </ul>
          </CSSTransition>
        )}
      </TransitionGroup>
      {/* https://www.w3schools.com/tags/tag_optgroup.asp */}

      {/* <label for="mainCathegoryArticles">Types of articles</label>
            <select name="mainCathegoryArticles">
                <option value="style">Styles</option>
                <option value="framework">Framework</option>
                <option value="html">HTML</option>
                <option value="js">JavaScript</option>
                <option value="es6">ES6</option>
                <option value="general">General</option>
            </select>
            <label for="subcategoryStylesLanguage">Subcathegory</label>
            <select name="subcategoryStylesLanguage">
                <option value="css">CSS</option>
                <option value="sass">SASS</option>
                <option value="general">General</option>
            </select>
            
            <textarea rows="10"/> */}

      {/* <article>
                <h2></h2>
                <section>
                    <div>
                        <button>Add text</button>
                        <button>Add code</button>
                        
                    </div>

                </section>
                <section>
                    <h3>Linked Items</h3>
                    <li>
                        <a>Link to item</a>
                        <select>
                            <option value="video">Video</option>
                            <option value="article">Article</option>
                        </select>
                        <select>
                            <option>Coursera</option>
                            <option>Youtube</option>
                            <option>Selleo</option>
                        </select>
                    </li>

                </section>

            </article> */}
    </section>
  )
}

export default TodayILearnt
