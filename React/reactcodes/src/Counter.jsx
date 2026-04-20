import { useState } from "react"

function Counter() {
    const title = "Counter App"
    const [count, setCount] = useState(0)
    const handleIncrease = () => {
        setCount(prevCount => prevCount + 1)
    }
    const handleDecrease = () => {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <>
            <h3>{title}</h3>
            <div className="counter-container">
                <div id="count-display">{count}</div>
                <div className="button-group">
                    <button id="decrease" onClick={handleDecrease}>Decrease</button>
                    <button id="increase" onClick={handleIncrease}>Increase</button>
                </div>
            </div>
        </>
    )
}

export default Counter
