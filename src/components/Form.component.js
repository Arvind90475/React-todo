import React from 'react';




const Form = ({ setInputText, todos, setTodo, inputText, setStatus }) => {

    const inputHandler = (e) => {
        setInputText(e.target.value)
    }

    const formSubmit = (e) => {
        e.preventDefault();
        setTodo([
            ...todos,
            {
                title: inputText,
                id: Math.random() * 1000,
                completed: false
            }
        ]);
        setInputText('');
    }

    const handleStatus = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <input type="text" className="todo-input" onChange={inputHandler} value={inputText} />
            <button className="todo-button" onClick={formSubmit}   >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" onChange={handleStatus} className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                </select>
            </div>
        </form>
    );
}


export default Form;