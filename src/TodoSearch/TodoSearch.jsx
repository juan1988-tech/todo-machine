import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoSearch.css';

const TodoSearch = () =>{
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  const onSearchValue = (event) =>{
    setSearchValue(event.target.value);
  }
  return(
    <input type="text" placeholder='todo' onChange={onSearchValue} value={searchValue} className='TodoSearch'/>
  )
}

export default TodoSearch;