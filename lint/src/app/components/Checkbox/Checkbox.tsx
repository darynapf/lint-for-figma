import React from 'react';
import styles from './Checkbox.module.scss';
import Checkmark from '../../assets/icons/checkmark.svg';

const Checkbox = () => {
  return (
    <label className={styles.checkbox}>
      <input className={styles.checkbox__control} type="checkbox" />
      <span className={styles.checkbox__background} />
      <span className={styles.checkbox__checkmark}>
        <Checkmark />
      </span>
    </label>
  );
};

export default Checkbox;
