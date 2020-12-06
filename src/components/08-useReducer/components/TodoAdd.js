import React from 'react';
import { useForm } from '../../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {
  const [{ description }, handleInputChanges, reset] = useForm({
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo)
    reset();
  };
  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='description'
          className='form-control'
          placeholder='I must to do...'
          autoComplete='off'
          value={description}
          onChange={handleInputChanges}
        />

        <button type='submit' className='btn btn-outline-success mt-1 btn-block'>
          Agregar
        </button>
      </form>
    </>
  );
};
