import React from 'react';
import styles from './Checkbox.module.scss';

const Checkbox = () => {
  // const [active, activeState] = useState(false);
  return (
    <label className={styles.base}>
      <input className={styles.control} type="checkbox" />
    </label>
  );
};

export default Checkbox;
