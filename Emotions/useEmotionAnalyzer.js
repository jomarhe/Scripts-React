// src/hooks/useEmotionAnalyzer.js
import Sentiment from "sentiment";

const sentiment = new Sentiment();

const useEmotionAnalyzer = () => {
  const analyzeEmotion = (text) => {
    const result = sentiment.analyze(text);
    return {
      score: result.score,
      emotion:
        result.score > 0 ? "positivo" : result.score < 0 ? "negativo" : "neutral",
    };
  };

  return { analyzeEmotion };
};

export default useEmotionAnalyzer;
