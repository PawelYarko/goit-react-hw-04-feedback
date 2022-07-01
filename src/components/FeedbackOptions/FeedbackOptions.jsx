import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const FeedbackOptions = ({options , onLeaveFeedback}) => {
  return (
        options.map(option =>
            <button type="button" className={s.button} onClick={onLeaveFeedback} key={option}>{option}</button>) 
    )   
};

// FeedbackOptions.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   setGood: PropTypes.func.isRequired,
//   setNeutral: PropTypes.func.isRequired,
//   setBad: PropTypes.func.isRequired,
// };

export default FeedbackOptions;
