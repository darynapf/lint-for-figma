import React from 'react';
import styles from './Switcher.module.scss';

const Switcher = () => {
  // const [active, activeState] = useState(false);
  return (
    <label className={styles.base}>
      <span className={styles.circle} />
      <input className={styles.control} type="checkbox" />
    </label>
  );
};

export default Switcher;
