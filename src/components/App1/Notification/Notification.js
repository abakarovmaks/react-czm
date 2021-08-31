import React from 'react';
import styles from './Notification.module.css';

export default function Notification({ message }) {
  const { notification } = styles;
  return <div className={notification}>{message}</div>;
}
