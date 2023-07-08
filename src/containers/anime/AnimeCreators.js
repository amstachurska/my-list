import React from 'react'
import { Field, FieldArray } from 'formik'

const AnimeCreators = (props) => {
  const { values } = props
  return (
    <div>
      <h2>Anime creators</h2>
      <div>
        <label htmlFor="studio">Studio</label>
        {/* <Field name="studio" component={}></Field> */}
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <FieldArray
          name="author"
          render={(arrayHelpers) => (
            <ul>
              {values?.author?.length > 0 ? (
                values.author.map((author, index) => (
                  <li key={`author-${index}`}>
                    <Field name={`author.${index}`} />
                    <button type="button">Remove author</button>
                  </li>
                ))
              ) : (
                <button>Add author </button>
              )}
            </ul>
          )}
        ></FieldArray>
      </div>
      studio author list of strings music list of strings director llist of
      strings project list of strings
    </div>
  )
}

export default AnimeCreators
