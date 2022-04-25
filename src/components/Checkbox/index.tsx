import cn from 'classnames';
import React, { MouseEventHandler } from 'react';

import styles from './index.module.css';

export interface CheckboxProps {
  className?: string;
  checked?: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Checkbox: React.FC<CheckboxProps> = ({ className, checked, onClick }) => {
  return (
    <div className={cn(styles.container, className)} onClick={onClick}>
      {checked ? renderChecked() : renderUncheck()}
    </div>
  );

  function renderChecked() {
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7.49951" cy="7.5" r="7.5" fill="#6E6ACF" />
        <path
          d="M4.64593 7.00106L6.87961 9.23256L10.5012 5.61325"
          stroke="white"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  function renderUncheck() {
    return <div className={styles.uncheck}></div>;
  }
};

export default Checkbox;
