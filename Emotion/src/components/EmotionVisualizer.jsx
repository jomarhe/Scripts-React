// src/components/EmotionVisualizer.jsx
import { useSpring, animated } from '@react-spring/web';

const EmotionVisualizer = ({ sentiment }) => {
  const emotionMap = {
    positive: 'green',
    neutral: 'blue',
    negative: 'red',
  };

  const styles = useSpring({
    backgroundColor: emotionMap[sentiment.label],
    width: sentiment.score * 100 + 100,
    height: sentiment.score * 100 + 100,
    borderRadius: '50%',
  });

  return (
    <div>
      <animated.div style={styles}></animated.div>
      <p>{sentiment.label.toUpperCase()} (Score: {sentiment.score})</p>
    </div>
  );
};

export default EmotionVisualizer;
