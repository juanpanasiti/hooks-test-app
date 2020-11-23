import React, { useEffect, useState } from 'react';

import './effects.css'

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const {name, email} = formState

  useEffect(() => {
    // console.log('componente cargado!');
  },[])

  useEffect(() => {
    // console.log('algo cambió!');
  },[name,email])

 
  const handleInputChange = ({target}) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })

  }
  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className='form-group'>
        <input
        type='text'
        name='name'
        className='form-control'
        placeholder='Nombre'
        autoComplete='off'
        value={name}
        onChange={handleInputChange} />
      </div>

      <div className='form-group'>
        <input
        type='text'
        name='email'
        className='form-control'
        placeholder='email@gmail.com'
        autoComplete='off'
        value={email}
        onChange={handleInputChange} />
      </div>
    </>
  );
};