import React from 'react';
import './CreateTodoButton.css';

const CreateTodoButton = () =>{
  return(
    <button className="CreateTodoButton" onClick={()=>{console.log('presiono el boton agregar')}}>+</button>
  )
}

export default CreateTodoButton;