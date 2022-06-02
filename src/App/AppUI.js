
import React from 'react';
import TodoCounter from '../TodoCounter/TodoCounter';
import TodoSearch from '../TodoSearch/TodoSearch';
import TodoList from '../TodoList/TodoList';
import TodoItem from '../TodoItem/TodoItem';
import CreateTodoButton from '../CreateTodoButton/CreateTodoButton';
import { TodoContext } from '../TodoContext/TodoContext';

function AppUI(){
  return(
    <React.Fragment>
    <TodoCounter/>
    <TodoSearch/>

    <TodoContext.Consumer>
      {({error,loading,searchedTodos,completeTodos,deleteTodos})=>(
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
      )}
    </TodoContext.Consumer>
    <CreateTodoButton />
  </React.Fragment>
  )
}

export default AppUI;