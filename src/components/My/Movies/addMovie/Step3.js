import React from 'react'
// import { DatePicker } from 'antd'
import { Field } from 'redux-form'
import PropTypes from 'prop-types'

import Checkbox from '../../../common/form/Checkbox'
import Input from '../../../common/form/Input'
import { MOVIE_STATUS } from '../const'
import Select from '../../../common/form/Select'

const Step3 = (props) => {
  const { currentStep } = props
  // const dateFormat = 'YYYY-MM-DD'

  if (currentStep !== 3) return null
  return (
    <>
      <h2>Type in opinion about movie</h2>
      <Field
        component={Select}
        label="Status"
        name="status"
        options={MOVIE_STATUS}
      />
      <Field
        component={Input}
        // format={dateFormat}
        label="Date of being watched"
        name="date"
        type="date"
        // id="date"
      />
      {/* <Field
            className="books-form-field"
            component={renderField}
            label="Date of being read"
            name="date"
            placeholder="Enter the date when you completed reading"
            type="date"
          /> */}
      {/* <DatePicker name="date"         
        format={dateFormat} /> */}
      <Field
        component={Input}
        label="Ranking"
        min={1}
        max="5"
        name="ranking"
        step="1"
        type="number"
      />
      <Field
        component={Checkbox}
        label="Is worth watching again?"
        name="isWorthWatchingAgain"
      />
      <Field
        component={Input}
        label="Number of times watched"
        min="0"
        name="nrOfTimesWatched"
        step="1"
        type="number"
      />
      <Field component={Input} label="Remarks" name="remarks" type="text" />
    </>
  )
}

Step3.propTypes = {
  currentStep: PropTypes.number.isRequired,
}

export default Step3
