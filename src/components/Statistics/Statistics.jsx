import React from 'react';
import Notification from './Notification';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, percentageCount }) => {
  return (
    <div>
      <h2>Statistics</h2>
      {<Notification message="There is no feedback" /> && (
        <ul className={s.statsList}>
          <li className={s.item}>good : {good}</li>
          <li className={s.item}>neutral : {neutral}</li>
          <li className={s.item}>bad : {bad}</li>

          <li className={s.item}>Total: {total.current}</li>
          <li className={s.item}>
            Positive feedback: {Math.round(percentageCount.current) || '0'}%
          </li>
        </ul>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.objectOf(PropTypes.number),
  positivePercentage: PropTypes.objectOf(PropTypes.number),
};

export default Statistics;
