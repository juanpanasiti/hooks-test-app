import React from 'react'

export const FocusScreen = () => {
  return (
    <div>
      <h1>UseRef</h1>
      <hr/>

      <input className='form-control' placeholder='Nombre' />

      <button className='btn btn-outline-dark mt-3'>
        Focus
      </button>
    </div>
  )
}
