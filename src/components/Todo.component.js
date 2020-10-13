import React from 'react';



const Todo = ({ title, id, completed, setTodo, todos }) => {
    const deleteTodo = () => {
        setTodo(todos.filter(t => t.id !== id))
    }

    const changeToCompleted = () => {
        setTodo(todos.map((item) => {
            if (item.id === id) {
                return { ...item, completed: !item.completed }
            }
            return item;
        }));
    }
    return (
        <div className="todo">
            <li className={`todo-item ${completed ? "completed" : ""}`}>{title}</li>
            <button className="complete-btn" onClick={changeToCompleted} ><i className="fas fa-check"></i></button>
            <button className="trash-btn" onClick={deleteTodo}><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Todo;