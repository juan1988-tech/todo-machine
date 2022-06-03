
import React from 'react';
import TodoCounter from '../TodoCounter/TodoCounter';
import TodoSearch from '../TodoSearch/TodoSearch';
import TodoList from '../TodoList/TodoList';
import TodoItem from '../TodoItem/TodoItem';
import CreateTodoButton from '../CreateTodoButton/CreateTodoButton';
import { TodoContext } from '../TodoContext/TodoContext';
import { Modal } from '../Modal/Modal';


function AppUI(){
  const {error,loading,searchedTodos,completeTodos,deleteTodos, openModal, setOpenModal} = React.useContext(TodoContext);
  return(
    <React.Fragment>
    <TodoCounter/>
    <TodoSearch/>
         <TodoList>
         {error && <p>Error 404</p>}  
         {loading && <p>Estamos cargando no desesperes</p>}
         {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}
           {searchedTodos.map(todo => (
             <TodoItem
               key={todo.text}
               text={todo.text}
               completed={todo.completed}
               onComplete={()=>completeTodos(todo.text)}
               onDelete={()=>deleteTodos(todo.text)}
             />
           ))}
         </TodoList>
         {(openModal === true) && (
            <Modal>
            <p>Teletransportacion</p>
          </Modal>
         )}
    <CreateTodoButton 
    setOpenModal={setOpenModal}
    />
  </React.Fragment>
  )
}

export default AppUI;