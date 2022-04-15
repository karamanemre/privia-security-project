import React from 'react'

function Input({ label, error, name, handleChange, value, id, inputType,errorColor}) {

    const className = error ? "form-control is-invalid" : "form-control";

  return (
    <div className="form-group mb-3">
      <label className='d-flex justify-content-left mb-2'>{label}</label>
      <input
        name={name}
        id={id}
        className={className}
        onChange={handleChange}
        value={value}
        type={inputType}
      />
      <small className="form-text error invalid-feedback text-align-left"  style={{color:errorColor}}>
        {error && error}
      </small>
    </div>
  )
}

export default Input