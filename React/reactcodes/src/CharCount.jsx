import { useState } from "react";

function CharCount() {
    const [charText, setCharText] = useState("");

    const handleCharCount = () => {
        setCharText(charText.length);
    }
    return (
        <>
            <h3>character count</h3>
            <div className="char-count">
                <input type="text" placeholder="Enter your text" value={charText} onChange={(e) => setCharText(e.target.value)} />
                <button id="char-count" onClick={handleCharCount}>Count</button>
                <div id="char-count-display">{charText.length}</div>
            </div>
        </>
    )
}
export default CharCount