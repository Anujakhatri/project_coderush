import React, { useState, useEffect } from "react";

function Theme() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.body.className = theme === "light" ? "light-theme" : "dark-theme";
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    
    return (
        <>
            <h3>theme changer</h3>
            <div className="theme">
                <p>Current Theme: {theme}</p>
                <button id="theme-btn" onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </>
    )
}

export default Theme;