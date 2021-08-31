import React from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import styles from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.list}>
        {stats.map(item => (
          <li className={styles.item} key={item.id}>
            <StatisticsItem {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
