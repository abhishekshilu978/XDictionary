import { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const searchWord = async () => {
    if (!word.trim()) return;
    try {
      setError("");
      setData(null);
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!res.ok) throw new Error("Word not found");
      const result = await res.json();
      setData(result[0]);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">X-Dictionary</h1>
      <div className="flex gap-2">
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter a word..."
          className="p-2 border border-gray-400 rounded w-64"
        />
        <button
          onClick={searchWord}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {data && (
        <div className="mt-6 bg-white shadow-md p-4 rounded w-96">
          <h2 className="text-xl font-semibold">{data.word}</h2>
          <p className="text-gray-600 italic">{data.phonetic}</p>
          {data.meanings.map((meaning, idx) => (
            <div key={idx} className="mt-2">
              <h3 className="font-medium">{meaning.partOfSpeech}</h3>
              <ul className="list-disc list-inside">
                {meaning.definitions.map((def, i) => (
                  <li key={i}>{def.definition}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
