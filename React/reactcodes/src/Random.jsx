import React, { useState } from "react";

function Random() {
    const [randomNum, setRandomNum] = useState(null);
    const generateRandom = () => {
        setRandomNum(Math.floor(Math.random() * 100));
    }
    return (
        <>
            <h3>random number generator</h3>
            <div className="random">
                <p>Random Number: {randomNum}</p>
                <button id="random-btn" onClick={generateRandom}>Generate Random</button>
            </div>
        </>
    )
}
export default Random