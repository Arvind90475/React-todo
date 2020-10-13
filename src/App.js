import React, { useState, useEffect } from 'react';
import './App.css';

// importing components
import Form from './components/Form.component'
import TodoList from './components/TodoList.component'



function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodo] = useState([]);
  const [status, setStatus] = useState('all');
  const [FilteredTodos, setFilteredTodos] = useState([]);

  // run once only when app starts
  useEffect(() => manageLocalStorage(), []);

  // useEffect
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    switch (status) {
      case "pending":
        setFilteredTodos(todos.filter((item) => item.completed === false))
        break;
      case "completed":
        setFilteredTodos(todos.filter((item) => item.completed === true))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }

  }, [todos, status]); // use effect runs every time the state inside [] changes whereas runs only once when page reloads if [] is empty

  const manageLocalStorage = () => {
    // localStorage.setItem("todos", JSON.stringify(todos));

    let localTodo = localStorage.getItem("todos");
    setTodo(JSON.parse(localTodo))
  }


  return (
    <div className="App">
      <header><h1>Todo List</h1></header>
      <Form setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodo={setTodo}
        setStatus={setStatus}
      />
      <TodoList todos={todos} FilteredTodos={FilteredTodos} setTodo={setTodo} />
    </div>
  );
}

export default App;
