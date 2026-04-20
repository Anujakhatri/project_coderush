// React converted logic code!
import { useState } from 'react'
import Counter from './Counter'
import Toggle from './Toggle'

function App() {
  //TASK 2: Toggle visibility of text when button is clicked(hide and show 
  const [isVisible, setIsVisible] = useState(true);

  // TASK 3: Add Two Numbers State
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  // TASK 5: Todo List State
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const handleAddTodo = () => {
    if (todoInput.trim() !== "") {
      setTodos([...todos, todoInput]);
      setTodoInput(""); // clear input after adding
    }
  }

  // TASK 6: Character Count State
  const [charText, setCharText] = useState("");

  // TASK 3: Console Input State
  const [consoleInput, setConsoleInput] = useState("");
  const handleConsoleSubmit = () => {
    console.log(consoleInput);
  };

  // TASK 7: Filter Items State
  const [filterQuery, setFilterQuery] = useState("");
  const allItems = ["React", "Javascript", "Python", "Mango", "Angular", "PHP", "NodeJs"];
  const filteredItems = allItems.filter(item =>
    item.toLowerCase().includes(filterQuery.toLowerCase())
  );

  // TASK 8: Random Number State
  const [randomNum, setRandomNum] = useState(null);
  const generateRandom = () => {
    setRandomNum(Math.floor(Math.random() * 100));
  };

  // TASK 9: Empty Check State
  const [emptyInput, setEmptyInput] = useState("");
  const handleEmptySubmit = () => {
    if (emptyInput.trim() === "") {
      alert("Input is empty");
    } else {
      console.log(emptyInput);
    }
  };

  // TASK 10: Light/Dark Mode State
  const [isLightMode, setIsLightMode] = useState(false);
  const handleLightDark = () => {
    setIsLightMode(prev => !prev);
  };

  return (
    <div className={isLightMode ? "light-theme" : "dark-theme"}>
      <Counter />
      <hr />

      {/* TASK 2: Toggle Visibility */}
      <h3>Toggle visibility</h3>
      <div className="toggle">
        {isVisible && <p id="text">This is a text that will be toggled</p>}
        <button id="toggle-btn" onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      </div>

      <hr />

      {/* TASK 3: Console Input */}
      <h3>take a input from the user and display in console</h3>
      <div className="input">
        <input
          type="text"
          placeholder="Enter your name"
          value={consoleInput}
          onChange={(e) => setConsoleInput(e.target.value)}
        />
        <button id="submit" onClick={handleConsoleSubmit}>Submit</button>
      </div>

      <hr />

      {/* TASK 4: Add Two Numbers */}
      <h3>add two numbers entered by user</h3>
      <div className="add">
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <div id="result">
          Result: {Number(num1) + Number(num2)}
        </div>
      </div>

      <hr />

      {/* TASK 5: Todo List */}
      <h3>todo list: add items and display them using list</h3>
      <div className="todo">
        <input
          type="text"
          placeholder="Enter your task"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button id="add-todo" onClick={handleAddTodo}>Add</button>
        <ul id="todo-list">
          {/* We loop over array of todos using .map() to generate <li> tags */}
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>

      <hr />

      {/* TASK 6: Count Characters */}
      <h3>count character in input field</h3>
      <div className="count">
        <input
          type="text"
          placeholder="Enter your text"
          value={charText}
          onChange={(e) => setCharText(e.target.value)}
        />
        <button id="count-btn" onClick={() => alert("Character count is: " + charText.length)}>Count</button>
        <div id="count">Length: {charText.length}</div>
      </div>

      <hr />

      {/* TASK 7: Filter Items */}
      <h3>filter items based in search input(use filter and list)</h3>
      <div className="filter">
        <input
          type="text"
          placeholder="Search items (e.g. React, Angular, Python)..."
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
        />
        <ul id="filter-list">
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <hr />

      {/* TASK 8: Random Number */}
      <h3>generate a random number on button click</h3>
      <div className="random">
        <button id="random-btn" onClick={generateRandom}>Generate</button>
        <div id="random-number">{randomNum !== null ? randomNum : ""}</div>
      </div>

      <hr />

      {/* TASK 9: Empty Check */}
      <h3>check if input is empty before submit</h3>
      <div className="empty">
        <input
          type="text"
          placeholder="Enter your text"
          value={emptyInput}
          onChange={(e) => setEmptyInput(e.target.value)}
        />
        <button id="empty-btn" onClick={handleEmptySubmit}>Submit</button>
      </div>

      <hr />

      {/* TASK 10: Light and Dark Mode */}
      <div id="light-dark" className="light-dark">
        <h3>switch between light and dark mode</h3>
        <button id="light-dark-btn" onClick={handleLightDark}>Switch</button>
      </div>
    </div>
  )
}
export default App
