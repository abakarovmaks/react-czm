import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  const { list, item } = styles;
  return (
    <>
      <ul className={list}>
        <li className={item}>Good: {good}</li>
        <li className={item}>Neutral: {neutral}</li>
        <li className={item}>Bad: {bad}</li>
        <li className={item}>Total: {total}</li>
        <li className={item}>Positive feedback: {positivePercentage} %</li>
      </ul>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
