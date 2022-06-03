import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoForm.css';

function TodoForm(){
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const { addTodos, setOpenModal } = React.useContext(TodoContext);
  const onChange = (event) =>{
    setNewTodoValue(event.target.value);
  }
  const onCancel = ()=>{
    setOpenModal(false);
  }
  const onSubmit = (event)=>{
    event.preventDefault();
    addTodos(newTodoValue);
    setOpenModal(false);
  }
  return(
    <form className='TodoForm' onSubmit={onSubmit}>
      <label>Escribe tu TODO</label>
      <textarea placeholder='Escribe tu primer todo'
      value={newTodoValue}
      onChange={onChange}
      />
      <div>
        <button onClick={onCancel} type="button">Cancelar</button>
        <button type="submit">Añadir</button>
      </div>
    </form>
  )
}

export default TodoForm;

