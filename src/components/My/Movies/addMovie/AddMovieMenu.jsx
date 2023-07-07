import React from 'react'
import classNames from 'class-names'
import PropTypes from 'prop-types'

const AddMovieMenu = ({ setStep, step }) => {
  return (
    <div className="add-movie__menu">
      <button
        className={classNames('add-movie__menu-item', {
          selected: step === 1,
        })}
        onClick={() => setStep(1)}
        type="button"
      >
        Main
      </button>
      <button
        className={classNames('add-movie__menu-item', {
          selected: step === 2,
        })}
        onClick={() => setStep(2)}
        type="button"
      >
        Linked items
      </button>
      <button
        className={classNames('add-movie__menu-item', {
          selected: step === 3,
        })}
        onClick={() => setStep(3)}
        type="button"
      >
        Opinion
      </button>
    </div>
  )
}

AddMovieMenu.propTypes = {
  setStep: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
}

export default AddMovieMenu
