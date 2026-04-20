import { useState } from "react";

function Todo(){
    const [todos, setTodos] = useState([]);  //array of todos
    const [todoInput, setTodoInput] = useState('') //text in input field

    const handleTodo =() => {
        if(todoInput.trim() !== ''){   //input shouldn't be empty
            setTodos([...todos, todoInput]); //takes all of the existing items currently in your to-do list and spreads them out into a new array.
            setTodoInput('') //clear input after adding
        }
    }

        return(
        <>
        <h3>todo list: add items and display them using list</h3>
        <div className="todo">
            {/* Whenever a user presses a key on their keyboard (triggering a change event e) */}
            <input type="text" placeholder="Enter your task" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
            <button id="add-todo" onClick={handleTodo}>Add</button>
            <ul id="todo-list">
                {/* We loop over array of todos using .map() to generate <li> tags */}
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
        </>
)}

export default Todo