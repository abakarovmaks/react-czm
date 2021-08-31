import PropTypes from 'prop-types';
import TableRaw from './TableRaw';
import styles from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionsHistory}>
      <thead>
        <tr>
          <th>Тип</th>
          <th>Цена</th>
          <th>Валюта</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TableRaw {...item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
