import React from 'react'

const Rating = ({ handleChange, rating }) => {
  return (
    <>
      <label htmlFor="1">☆</label>
      <input
        className="books-form-field-data__input-rating"
        type="radio"
        id="1"
        name="rating"
        onChange={handleChange}
        value="1"
        checked={rating === '1'}
        checked={true}
      ></input>
      <label htmlFor="2">☆</label>
      <input
        className="books-form-field-data__input-rating"
        checked={rating === '2'}
        type="radio"
        id="2"
        onChange={handleChange}
        name="rating"
        value="2"
      ></input>
      <label htmlFor="3">☆</label>
      <input
        className="books-form-field-data__input-rating"
        checked={rating == '3'}
        type="radio"
        id="3"
        onChange={handleChange}
        name="rating"
        value="3"
      ></input>
      <div>
        <i class="fas fa-star"></i>
        <input
          className={`books-form-field-data__input-rating ${
            rating == 4 ? 'checked' : ''
          }`}
          //sprawdzic co robi autocomplete
          autoComplete
          type="radio"
          id="4"
          onChange={handleChange}
          name="rating"
          value="4"
        ></input>
        <label htmlFor="4">&#9733;</label>
      </div>

      <label htmlFor="5">☆</label>
      <input
        className="books-form-field-data__input-rating"
        checked={rating === 5}
        type="radio"
        id="5"
        onChange={handleChange}
        name="rating"
        value="5"
      ></input>
    </>
  )
}

export default Rating
