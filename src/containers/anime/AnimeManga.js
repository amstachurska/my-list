import React from 'react'
import {Field} from 'formik'

const AnimeManga = () => {
    return (
        <div>
            <Field
                component="input"
                type="checkbox"
                name="isManga"
                defaultValue={false}
            />
            linkedItems - list
        </div>
    )
}

AnimeManga.propTypes = {}

export default AnimeManga