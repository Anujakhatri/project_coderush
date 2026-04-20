import { useState } from "react"
function Toggle() {
    const [show, setShow] = useState(true);
    const handleToggle = () => {
        setShow(prev => !prev);
    }
    return (
        <>
            <div className="toggle">
                {show && <p id="text">This is a text that will be toggled</p>}
                <button id="toggle-btn" onClick={handleToggle}>Toggle</button>
            </div>
        </>
    )
}

export default Toggle
