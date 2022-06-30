import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const FeedbackOptions = ({state , setState}) => {
  return (
    <div>
      <button
        type="button"
        className={s.button}
        onClick={() => setState(state + 1)}
      >
        {state.name}
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
