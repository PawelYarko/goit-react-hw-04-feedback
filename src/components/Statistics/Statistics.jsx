import React from 'react';
import Notification from './Notification';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ stats, total, percentageCount }) => {
  return (
    <div>
      <h2>Statistics</h2>
      {<Notification message="There is no feedback" /> && (
        <ul className={s.statsList}>
          {stats.map(([name, value]) => {
            return (
              <li key={name} className={s.item}>
                {name} : {value}
              </li>
            );
          })}
          <li className={s.item}>Total: {total}</li>
          <li className={s.item}>
            Positive feedback: {Math.round(percentageCount)}%
          </li>
        </ul>
      )}
    </div>
  );
};

Statistics.propTypes = {
//   stats: PropTypes.arrayOf(PropTypes.number),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};

export default Statistics;
