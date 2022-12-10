import React, { useState } from 'react';
import styles from './Switcher.module.scss';

const Switcher = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <label className={styles.switcher}>
      <input className={styles.switcher__control} type="checkbox" checked={checked} onChange={handleChange} />
      <span className={styles.switcher__circle} />
      <span className={styles.switcher__background} />
    </label>
  );
};

export default Switcher;
