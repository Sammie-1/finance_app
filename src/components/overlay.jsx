import React from 'react';
import styles from '../styles/overlay.module.css';

const Overlay = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
    </div>
  );
};

export default Overlay;
