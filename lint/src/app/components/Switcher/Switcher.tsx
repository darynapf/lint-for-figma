import React, { useState } from 'react';
import styles from './Switcher.module.scss';

const Switcher = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <label className={styles.container}>
      <input className={styles.control} type="checkbox" checked={checked} onChange={handleChange} />
      <span className={styles.circle} />
      <span className={styles.background} />
    </label>
  );
};

export default Switcher;
