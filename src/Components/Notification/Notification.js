import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={styles.text}>{message}</p>;
};

Notification.defaultProps = {
    message: 'No feedbacks yet',
  };
  
  Notification.propTypes = {
    message: PropTypes.string.isRequired,
  };

export default Notification;