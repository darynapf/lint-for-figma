import React from 'react';
import styles from './Footer.module.scss';
import Button from '../Button/Button';

interface ComponentProps {
  tertiaryClick: React.MouseEventHandler<HTMLButtonElement>;
  secondaryClick: React.MouseEventHandler<HTMLButtonElement>;
  primaryClick: React.MouseEventHandler<HTMLButtonElement>;
  tertiaryName: JSX.Element | string;
  secondaryName: JSX.Element | string;
  primaryName: JSX.Element | string;
}

const Footer = ({
  tertiaryName,
  secondaryName,
  primaryName,
  tertiaryClick,
  secondaryClick,
  primaryClick,
}: ComponentProps) => {
  return (
    <div className={styles.footer}>
      <Button onClick={tertiaryClick} secondary>
        {tertiaryName}
      </Button>
      <div className={styles.mainControl}>
        <Button onClick={secondaryClick} secondary>
          {secondaryName}
        </Button>
        <Button onClick={primaryClick}>{primaryName}</Button>
      </div>
    </div>
  );
};

export default Footer;
