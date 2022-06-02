import React from 'react';
import { TodoProvider } from '../TodoContext/TodoContext';
import './App.css';
import './AppUI';
import AppUI from './AppUI';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: true },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];

function App() {
  return (
  <TodoProvider>
    <AppUI/>
  </TodoProvider>
  );
}

export default App;