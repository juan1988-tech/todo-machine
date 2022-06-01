import React from 'react';
import './App.css';
import './AppUI';
import AppUI from './AppUI';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: true },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];

//localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));
function App() {
  
  function useLocalStorage(itemName,initialValue){
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
    
    if(!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    }else{
      parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = React.useState(parsedItem);

    const saveItem = (newItem) =>{
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    }
    return[
      item,
      saveItem
    ]
  }

  const [todos, saveTodos] = useLocalStorage('TODOS_V1',[]);
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

  return (
    <AppUI
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    completeTodos={completeTodos}
    deleteTodos={deleteTodos}
    searchedTodos={searchedTodos}
    />
  );
}

export default App;