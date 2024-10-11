// src/components/SentimentAnalyzer.jsx
import { useState } from 'react';
import { SentimentAnalyzer } from '@nlpjs/sentiment';

const analyzer = new SentimentAnalyzer({ language: 'en' });

const SentimentAnalyzerComponent = ({ onAnalyze }) => {
  const [inputText, setInputText] = useState('');

  const analyzeSentiment = () => {
    const result = analyzer.getSentiment(inputText);
    onAnalyze(result);
  };

  return (
    <div>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Write something..."
      />
      <button onClick={analyzeSentiment}>Analyze Emotion</button>
    </div>
  );
};

export default SentimentAnalyzerComponent;
