import React, { useCallback } from 'react'
import { useFieldArray } from 'react-hook-form'

export const NestedFieldArray = ({ control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `seasons`,
  })

  const addSeason = () => {
    append({
      description: '',
      numberOfEpisodes: 10,
      opinion: '',
      status: 'toWatch',
    })
  }

  const removeItem = () => (index) => {
    remove(index)
  }

  return (
    <div>
      <label htmlFor="seasons">Seasons</label>
      {fields.map((item, index) => {
        return (
          <div key={item.id}>
            <input
              control={control}
              defaultValue={item.numberOfEpisodes}
              name={`seasons[${index}].numberOfEpisodes`}
              ref={register({ required: false, min: 1 })}
              type="number"
            />
            <select
              control={control}
              defaultValue={item.status}
              name={`seasons[${index}].status`}
              ref={register({ required: false })}
            >
              <option value="done">Done</option>
              <option value="inProgress">In progress</option>
              <option value="toWatch">To watch</option>
            </select>
            {/* <input {...register(`season.${nestIndex}.nestedArray[${k}].opinion`, {required: false})} type="text" /> */}
            {/* <input {...register(`season[${k}].opinion`, {required: false})} type="text" />
                        <input {...register(`season.${k}.description`, {required: false})} type="text" /> */}
            <input
              ref={register({ required: false })}
              name={`seasons[${index}].opinion`}
              control={control}
              defaultValue={item.opinion}
              type="text"
            />
            <input
              control={control}
              defaultValue={item.description}
              name={`seasons.${index}.description`}
              ref={register({ required: false })}
              type="text"
            />
            <button onClick={removeItem(index)} type="button">
              Delete
            </button>
          </div>
        )
      })}
      <button type="button" onClick={addSeason}>
        Add Season
      </button>
    </div>
  )
}
