// React converted logic code!
import { useState } from 'react'
import Counter from './Counter'
import Toggle from './Toggle'
import Todo from './Todo'
import CharCount from './CharCount'
import Filter from './Filter'
import Random from './Random'
import Theme from './Theme'
import InputConsole from './InputConsole'
import Calculator from './Calculator'

function App() {

  // TASK 9: Empty Check State
  const [emptyInput, setEmptyInput] = useState("");
  const handleEmptySubmit = () => {
    if (emptyInput.trim() === "") {
      alert("Input is empty");
    } else {
      console.log(emptyInput);
    }
  };

  return (
    <>
      <Theme />
      <hr />
      <Counter />
      <hr />
      <Toggle />
      <hr />
      <Todo />
      <hr />
      <InputConsole />
      <hr />

      <div>
        <h3>Empty Checker</h3>
        <input type="text" value={emptyInput} onChange={(e) => setEmptyInput(e.target.value)} />
        <button onClick={handleEmptySubmit}>Submit</button>
      </div>
      <hr />


      <Calculator />
      <hr />
      <CharCount />
      <hr />
      <Filter />
      <hr />
      <Random />
      <hr />
    </>
  )
}

export default App
