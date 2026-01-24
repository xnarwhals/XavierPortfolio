import React, { useState } from 'react'
import './CustomToggle.scss'

const CustomToggle = ({ checked, onChange, className = '' }) => {
  const [internalChecked, setInternalChecked] = useState(false)
  const isControlled = typeof checked === 'boolean'
  const isChecked = isControlled ? checked : internalChecked

  const handleCheckboxChange = () => {
    const nextValue = !isChecked
    if (!isControlled) {
      setInternalChecked(nextValue)
    }
    if (onChange) {
      onChange(nextValue)
    }
  }

  return (
    <label
      className={`custom-toggle ${isChecked ? 'is-checked' : ''} ${className}`}
    >
      <input
        type='checkbox'
        checked={isChecked}
        onChange={handleCheckboxChange}
        className='custom-toggle__input'
      />
      <span className='custom-toggle__track' aria-hidden='true'></span>
      <span className='custom-toggle__thumb' aria-hidden='true'></span>
    </label>
  )
}

export default CustomToggle
