import React from 'react';
import styles from './Input.module.scss';

const Input = () => {
  return (
    <div className={styles.input}>
      <input className={styles.input__control} type="input" />
    </div>
  );
};

export default Input;
