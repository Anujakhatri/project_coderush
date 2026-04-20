import { useState } from "react"

function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const handleAdd = () => {

    }
    return (
        <>
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
            <div id="result">Result: {Number(num1) + Number(num2)}</div>
        </>
    )
}

export default Calculator