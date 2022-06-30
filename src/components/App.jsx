import { useState, useEffect, useRef } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import s from './App.module.css';

// const useFeedback = (defaultValue = 0) => {
//   const [state, setState] = useState(() => {
//     return defaultValue;
//   });
//   return [state, setState];
// };

export default function App() {
  const [state, setState] = useState({good:0, neutral:0, bad:0});
  const [total, setTotal] = useState(0);
  const [percentageCount, setPercentageCount] = useState(0);

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPercentageCount(100 - (bad / (good + bad + neutral)) * 100);
  }, [good, neutral, bad]);

  return (
    <div className={s.container}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          state={state}
          setState={setState}
        />
        <Statistics
          state={state}
          total={total}
          percentageCount={percentageCount}
        />
      </Section>
    </div>
  );
}
