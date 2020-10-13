import React from 'react';

// import component
import Todo from './Todo.component'


const TodoList = ({ todos, setTodo, FilteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {FilteredTodos.map(todo => (
                    <Todo title={todo.title} id={todo.id} completed={todo.completed} setTodo={setTodo} key={todo.id} todos={todos} />
                ))}
            </ul>
        </div>
    );
}
export default TodoList;