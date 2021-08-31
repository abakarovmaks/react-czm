import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {friends.map(friend => (
          <li className={styles.item} key={friend.id}>
            <FriendListItem {...friend} />
          </li>
        ))}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
