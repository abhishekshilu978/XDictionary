import { useState } from "react";
import React from "react";

const App = () => {
  const words = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A resuable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]

  const [definition, setDefinition] = useState("");
  const [data, setData] = useState(null)

  const handleSearch = () => {
    if(!definition.trim()){
      setData(null);
      return;
    }
    const value = words.find(item => item.word.toLocaleCase() === definition.toLocaleLowerCase());

    if(value){
      setData("Word not found in the dictionary.");
    }
  }
  function handleInput(event) {
    setDefinition(event.target.value);
  }
  return (
    <>
    <div>
      <h1>
        Dictionary App
      </h1>
    </div>
    <div>
      <input type="text" placeholder="Write a Something..." value={definition} onChange={handleInput}/>
      <button onClick={handleSearch}>Search</button>
    </div>
    <div>
      { data !== null && (
        data === "Word not found in the dictionary." ? (
          <p>{data}</p>
        ) : (
          <>
          <h3>Definition:</h3>
          </>
        )
        )}
    </div>
    
    </>
  )
}
export default App;