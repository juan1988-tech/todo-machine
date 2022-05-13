import React from 'react';
import './TodoSearch.css';

const TodoSearch = ({searchValue, setSearchValue}) =>{

  const onSearchValue = (event) =>{
    setSearchValue(event.target.value);
  }
  return(
    <input type="text" placeholder='todo' onChange={onSearchValue} value={searchValue} className='TodoSearch'/>
  )
}

export default TodoSearch;