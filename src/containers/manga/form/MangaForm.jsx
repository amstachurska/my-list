import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import Select from 'react-select'
import styled from 'styled-components'

import { MANGA_GENRE_OPTIONS, MANGA_STATUS_OPTIONS } from '../const'

const MangaFormStyled = styled.form`
  background-color: #456783; 
  display: flex;
  flex-wrap: wrap;
  .input-item {
    color: white;
    margin: 10px;
  }
  .input-item > div {
    background-color: #234561; 
    min-width: 200px;
  }
  .ania, label {
    color: white !important;
  }
  .select-item {
    background-color: #234561; 
  }
`

const colourStyles = {
  control: styles => ({...styles, backgroundColor: 'red'}),
  option: (styles, {data, isDisabled, isFocused, isSelected}) => {
    
  } 
}

const MangaForm = ({ onSubmit }) => {
  const { control, register, handleSubmit, watch, errors } = useForm()
  console.log(watch('status'))

  return (
    <MangaFormStyled onSubmit={handleSubmit(onSubmit)}>
      <Controller

        name="title"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextField
            className="input-item"
            label="title"
            variant="outlined"
            onChange={onChange}
            value={value}
            InputProps={{
              className: 'ania',
          }}
          />
        )}
      />

      <Controller
        name="status"
        control={control}
        // as={Select}

        render={({ onChange, value }) => (
          <Select

            options={MANGA_STATUS_OPTIONS}
            defaulValue={MANGA_STATUS_OPTIONS[1]}
            onChange={onChange}
            styles={colourStyles}
            value={value}
          />
        )}
      />

      <TextField
        className="input-item"
        inputRef={register}
        label="Remarks"
        name="opinion"
        variant="outlined"
      />
      <Controller
      className="select-item"
        name="genre"
        control={control}
        options={MANGA_GENRE_OPTIONS}
        as={Select}
        isMulti
      />
      <TextField
        className="input-item"
        inputRef={register}
        label="Chapters"
        name="chapters"
        type="number"
        variant="outlined"
      />
      <TextField
        className="input-item"
        inputRef={register}
        label="Current chapter"
        name="currentChapter"
        type="number"
        variant="outlined"
      />
    </MangaFormStyled>
  )
}

export default MangaForm

MangaForm.propTypes = {
  onSubmit: PropTypes.func,
}
