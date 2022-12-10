import React from 'react';
import styles from './Button.module.scss';

interface ComponentProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: JSX.Element | string;
  secondary?: boolean;
}

const Button = ({ onClick, children, secondary = false }: ComponentProps) => {
  const buttonType = secondary ? styles.button_secondary : styles.button_primary;

  return (
    <button onClick={onClick} className={`${styles.button} ${buttonType}`}>
      {children}
    </button>
  );
};

export default Button;
