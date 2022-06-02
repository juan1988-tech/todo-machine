import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1',[]);

  const [searchValue, setSearchValue] = React.useState('');
  
  let searchedTodos = [];
  const completedTodos= todos.filter((todo)=>(todo.completed === true)).length;
  const totalTodos= todos.length;

  if(searchValue.length === 0){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter((todo)=>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }
 

  const completeTodos = (text) =>{
    const todoIndex = todos.findIndex(todo=>todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodos = (text) =>{
    const todoIndex = todos.findIndex(todo=>todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }
  return(
    <TodoContext.Provider value={{
      error,
      loading,
      searchValue,
      setSearchValue,
      totalTodos,
      completedTodos,
      completeTodos,
      deleteTodos,
      searchedTodos,
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoProvider}