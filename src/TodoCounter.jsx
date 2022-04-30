import React from 'react';
import './TodoCounter.css';

const TodoCounter = ({totalTodos, completedTodos}) =>{
  return(
    <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODO's</h2>
  )
}

export default TodoCounter;