import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const FeedbackOptions = ({
  good,
  neutral,
  bad,
  setGood,
  setNeutral,
  setBad,
}) => {
  return (
    <div>
      <button
        type="button"
        className={s.button}
        onClick={() => setGood(good + 1)}
      >
        Good
      </button>
      <button
        type="button"
        className={s.button}
        onClick={() => setNeutral(neutral + 1)}
      >
        Neitral
      </button>
      <button
        type="button"
        className={s.button}
        onClick={() => setBad(bad + 1)}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  setGood: PropTypes.func.isRequired,
  setNeutral: PropTypes.func.isRequired,
  setBad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
