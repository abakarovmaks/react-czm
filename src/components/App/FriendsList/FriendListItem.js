import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  const activeClass = isOnline ? styles.online : styles.offline;

  return (
    <>
      <span className={[styles.status, activeClass].join(' ')}>{isOnline}</span>
      <img
        className={styles.avatar}
        src={avatar}
        alt={`avatar of + {name}`}
        width="50"
      />
      <p className={styles.name}>{name}</p>
    </>
  );
}

FriendListItem.defaultProps = {
  avatar: 'https://vk-wiki.ru/wp-content/uploads/2019/06/user-1.png',
  isOnline: false,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
