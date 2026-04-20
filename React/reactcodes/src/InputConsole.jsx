import { useState } from "react";

function InputConsole() {
    const [consoleInput, setConsoleInput] = useState("");
    
    const handleConsoleSubmit = () => {
        console.log(consoleInput);
    };

    return (
        <>
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
        </>
    );
}

export default InputConsole;