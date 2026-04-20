import React, { useState } from 'react';

const StateEventDemo = () => {
  // 1. Simple State: Counter
  const [count, setCount] = useState(0);

  // 2. String State: Input handled by OnChange
  const [name, setName] = useState('Explorer');

  // 3. Boolean State: Toggle Visibility
  const [showExplanation, setShowExplanation] = useState(false);

  // 4. Array State: List of items
  const [skills, setSkills] = useState(['React Hooks', 'Event Handlers', 'State Management']);
  const [newSkill, setNewSkill] = useState('');

  // Event Handlers
  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => Math.max(0, prev - 1));

  const handleNameChange = (e) => setName(e.target.value);

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (indexToRemove) => {
    setSkills(skills.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="demo-container">
      <header className="demo-header">
        <h2>Interactive State & Events</h2>
        <p className="welcome-tag">Hello, <span className="highlight">{name}</span>!</p>
      </header>

      <div className="demo-grid">
        {/* Section 1: useState & onClick */}
        <div className="demo-card">
          <h3>1. Counter (onClick)</h3>
          <p>State helps React remember values like this count.</p>
          <div className="counter-controls">
            <button onClick={handleDecrement} className="btn-circle">-</button>
            <span className="count-display">{count}</span>
            <button onClick={handleIncrement} className="btn-circle">+</button>
          </div>
        </div>

        {/* Section 2: Input Handling (onChange) */}
        <div className="demo-card">
          <h3>2. Input (onChange)</h3>
          <p>Events capture your keystrokes to update the "name" state in real-time.</p>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Type your name..."
            className="demo-input"
          />
        </div>

        {/* Section 3: Conditional Rendering (Toggle) */}
        <div className="demo-card">
          <h3>3. Toggle (Conditional State)</h3>
          <p>Change state to show or hide elements.</p>
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className={`btn-toggle ${showExplanation ? 'active' : ''}`}
          >
            {showExplanation ? 'Hide Concept' : 'Show Concept'}
          </button>
          {showExplanation && (
            <div className="explanation-box">
              <strong>State:</strong> The internal data of a component.<br />
              <strong>Event:</strong> Actions like 'click' or 'change' that trigger updates.
            </div>
          )}
        </div>

        {/* Section 4: Array Management (Forms) */}
        <div className="demo-card list-card">
          <h3>4. List (Array State)</h3>
          <form onSubmit={handleAddSkill} className="demo-form">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Add a skill..."
              className="demo-input-small"
            />
            <button type="submit" className="btn-add">Add</button>
          </form>
          <ul className="skill-list">
            {skills.map((skill, index) => (
              <li key={index} className="skill-item">
                {skill}
                <button onClick={() => removeSkill(index)} className="btn-remove">×</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StateEventDemo;
