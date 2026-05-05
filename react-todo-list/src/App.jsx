import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import NewTodoForm from './NewTodoForm';
import { Todolist } from './Todolist'

function App() {
  const [item, setItem] = useState('');
  const [todoList, setTodoList] = useState(() => {
    const storedTodoList = localStorage.getItem('todoList');
    return storedTodoList ? JSON.parse(storedTodoList) : [];  
  });

  const addTodo = (title) => {
    setTodoList(current => [...current, {
      id: crypto.randomUUID(),
      title,
      completed: false
    }]);
    setItem('');
  };

  function toggleItemCompleted(id) {
    setTodoList(current => {
      return current.map(item => {
        if (item.id === id) {
          return {...item, completed: !item.completed}
        }
        return item;
      })
    })
  }

  function deleteTodo(id) {
    setTodoList(current => {
      return current.filter(item => item.id !== id);
    })
  }

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
    <NewTodoForm onSubmit={addTodo}></NewTodoForm>
    <Todolist todoList={todoList} toggleItemCompleted={toggleItemCompleted} deleteTodo={deleteTodo}></Todolist>
    </>
  )
}

export default App
