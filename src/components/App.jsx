import { useState, useEffect, useRef } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import s from './App.module.css';

const useFeedback = (defaultValue = 0) => {
  const [state, setState] = useState(() => {
    return defaultValue;
  });
  return [state, setState];
};

export default function App() {
  const [good, setGood] = useFeedback(0);
  const [neutral, setNeutral] = useFeedback(0);
  const [bad, setBad] = useFeedback(0);

  let total = useRef(0);
  let percentageCount = useRef(0);

  useEffect(() => {
    total.current = good + neutral + bad;
  }, [good, neutral, bad]);

  useEffect(() => {
    percentageCount.current = 100 - (bad / (good + bad + neutral)) * 100;
  }, [good, neutral, bad]);

  return (
    <div className={s.container}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          good={good}
          neutral={neutral}
          bad={bad}
          setGood={setGood}
          setNeutral={setNeutral}
          setBad={setBad}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          percentageCount={percentageCount}
        />
      </Section>
    </div>
  );
}
