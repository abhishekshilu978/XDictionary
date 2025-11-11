import { useState } from 'react';
import './App.css';

const App = () => {
  const words = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];
  
  const [val, setVal] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    if (!val.trim()) {
      setDefinition("Word not found in the dictionary.");
      return;
    }
  
    const foundWord = words.find(
      item => item.word.toLowerCase() === val.toLowerCase()
    );

    setDefinition(
      foundWord 
        ? foundWord.meaning 
        : "Word not found in the dictionary."
    );
  };

  return (
    <div className="dictionary-app">
      <h1>Dictionary App</h1>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a word..."
          value={val}
          onChange={(e) => setVal(e.target.value)}
          data-testid="search-input"
        />
        <button 
          onClick={handleSearch}
          data-testid="search-button"
        >
          Search
        </button>
      </div>

      <div data-testid="definition-container">
        <h3>Definition:</h3>
        {definition && (
          <p data-testid="definition-text">{definition}</p>
        )}
      </div>
    </div>
  );
};

export default App;
