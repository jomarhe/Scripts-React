// src/App.js
import React, { useState } from "react";
import EmotionCircle from "./components/EmotionCircle";
import EmotionHistory from "./components/EmotionHistory";
import useEmotionAnalyzer from "./hooks/useEmotionAnalyzer";
import "./App.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [emotions, setEmotions] = useState([]);
  const { analyzeEmotion } = useEmotionAnalyzer();

  const handleAnalyze = () => {
    const result = analyzeEmotion(inputText);
    setEmotions([...emotions, result]);
    setInputText("");
  };

  return (
    <div className="app">
      <h1>Visualizador de Emociones en Tiempo Real</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Escribe algo..."
      />
      <button onClick={handleAnalyze}>Analizar Emoción</button>
      <EmotionCircle emotion={emotions[emotions.length - 1]} />
      <EmotionHistory emotions={emotions} />
    </div>
  );
};

export default App;
