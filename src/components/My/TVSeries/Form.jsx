import React from 'react'

import { useForm } from 'react-hook-form'
import { NestedFieldArray } from './NestedFieldArray'

//json-server --watch db.json --port 3001 -r routes.json

const MyTVSeriesForm = () => {
  const { handleSubmit, register, control } = useForm()

  const onSubmit = (data) => {
    console.log('data', data)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Title
          <input name="title" ref={register({ required: false })} />
        </label>
        <label>
          Cathegory
          <select name="cathegory" ref={register({ required: false })}></select>
        </label>
        <select name="subcathegory" ref={register({ required: false })} />
        <select name="status" ref={register({ required: false })} />
        <input
          name="date"
          placeholder="Date of being watched"
          ref={register}
          type="date"
        />
        <input
          name="opinion"
          placeholder="opinion"
          ref={register({ required: false })}
          type="text"
        />
        <input name="nrOfSeasons" ref={register} type="number"></input>
        <button type="submit">Save</button>
        przed nested
        <NestedFieldArray control={control} register={register} nestIndex={1} />
        po nested
      </form>
    </>
  )
}

export default MyTVSeriesForm
