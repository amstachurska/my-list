import React from 'react'

const TodayILearntItem = ({ cathegories, content, date, source, title }) => {
  const itemId = () => Math.random().toString(36).substring(2)

  return (
    <li className="learnt-item" key={itemId}>
      {/* <div contenteditable="true" draggable={true}>atry</div> */}
      {/* https://pl.reactjs.org/docs/dom-elements.html */}
      {/* https://stackoverflow.com/questions/19030742/difference-between-innertext-and-innerhtml */}
      {/* https://developer.mozilla.org/pl/docs/Web/API/Element/textContent */}
      {/* https://stackoverflow.com/questions/39758136/render-html-string-as-real-html-in-a-react-component */}

      {/* 
      https://www.freecodecamp.org/forum/t/react-iterate-through-object-nested-in-array/178649 */}

      {/* w tej o roznicach reacta jest o options select i dlatego mi nie dziala */}

      {/* https://medium.com/@lucksp_22012/pure-react-modal-6e562a317b85 */}
      {/* https://stackoverflow.com/questions/58355628/animate-react-modal */}
      <details className="learnt-item-details">
        <summary className="learnt-item-details-summary">
          {title && (
            <h3 className="learnt-item-details-summary__title">{title}</h3>
          )}
        </summary>
        <ul className="learnt-item-list">
          {date && (
            <li className="learnt-item-list__item" key={itemId()}>
              <span className="badge -date" draggable={true}>{date}</span>
            </li>
          )}
          {cathegories &&
            Object.keys(cathegories).map((key) => (
              <li className="learnt-item-list__item" key={itemId()} draggable={true}>
                {/* <b>{key}</b>:  */}
                <span className={`badge -${key}`}>{cathegories[key]}</span>
              </li>
            ))}
        </ul>
        <p
          className="learnt-item__content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
        {/* {source &&
          source.map((link) => (
            <p className="learnt-item-links" key={itemId()}>
              <span>{link.description}</span>
              <button className="learnt-item-links__button">
                <a className="learnt-item-links__button-link" href={link.link}>
                  Go to source
                </a>
              </button>
            </p>
          ))} */}
      </details>
    </li>
  )
}

export default TodayILearntItem

// https://stackoverflow.com/questions/5489946/how-to-wait-for-the-end-of-resize-event-and-only-then-perform-an-action
// https://medium.com/@rrc0138/handling-animations-in-react-9c42409a9e77
// https://muffinman.io/react-rerender-in-component-did-mount/
// https://css-tricks.com/using-requestanimationframe-with-react-hooks/
// https://stackoverflow.com/questions/52212703/using-requestanimationframe-in-react

// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content
