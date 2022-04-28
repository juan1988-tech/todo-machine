import React from 'react';
import './TodoItem.css';

const TodoItem = (props) =>{
  const onComplete = () =>{console.log(`aqui completas la tarea ${props.text}`)}

  const onDelete = () =>{console.log(`aqui eliminas la tarea ${props.text}`)}
  return(
    <li className="TodoItem">
    <span onClick={onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
      √
    </span>
    <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
      {props.text}
    </p>
    <span onClick={onDelete} className="Icon Icon-delete">
      X
    </span>
  </li>
  )
}

export default TodoItem;