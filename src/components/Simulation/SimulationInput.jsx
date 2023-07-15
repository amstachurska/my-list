import React, { useEffect, useState } from 'react'

export const SimulationInput = (props) => {
  const [value, setValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)
  return (
    <div style={{ margin: '20px' }}>
      <label
        htmlFor={props?.name ? props.name : 'name'}
        style={{ color: 'orange', margin: '0 10px', fontSize: '20px' }}
      >
        {props?.title || 'Field'}
      </label>

      <input
        name="name"
        type="text"
        value={value}
        onChange={(e) => setValue(e.targetValue)}
        {...props}
      ></input>
    </div>
  )
}

SimulationInput.defaultProps = {}
