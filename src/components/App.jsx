import { useState, useEffect } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import s from './App.module.css';

export default function App() {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const [total, setTotal] = useState(0);
  const [percentageCount, setPercentageCount] = useState(0);

  const { good, neutral, bad } = state;

  useEffect(() => {
    setTotal(good + neutral + bad);
    setPercentageCount(100 - (bad / (good + bad + neutral)) * 100);
  }, [good, neutral, bad]);

  const onLeaveFeedback = e => {
    e.preventDefault();
    const elem = e.target.innerText.toLowerCase();

    setState(pervState => ({ ...pervState, [elem]: pervState[elem] + 1 }));
  };

  const options = Object.keys(state);
  const stats = Object.entries(state);

  return (
    <div className={s.container}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        <Statistics
          stats={stats}
          total={total}
          percentageCount={percentageCount}
        />
      </Section>
    </div>
  );
}
