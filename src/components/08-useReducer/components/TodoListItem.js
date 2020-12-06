import React from 'react';
import PropTypes from 'prop-types';

export const TodoListItem = ({ todo, index, handleToggle, handleDelete }) => {
  return (
    <li className='list-group-item'>
      <p className={`${todo.done && 'complete'}`} onClick={() => handleToggle(todo.id)}>
        {index}. {todo.desc}
      </p>
      <button className='btn btn-outline-danger' onClick={() => handleDelete(todo.id)}>
        Borrar
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
