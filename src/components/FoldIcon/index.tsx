import cn from 'classnames';
import React, { useState } from 'react';

import styles from './index.module.css';

export interface FoldIconProps {
  className?: string;
  isFolded?: boolean;
}

const FoldIcon: React.FC<FoldIconProps> = ({ className, isFolded }) => {
  return (
    <div className={cn(styles.container, className)}>
      <svg
        className={cn(styles.icon, { [styles.folded]: isFolded })}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.853553 7.14645L3.64645 4.35355C3.84171 4.15829 3.84171 3.84171 3.64645 3.64645L0.853554 0.853553C0.538571 0.538571 2.05126e-07 0.761654 1.85654e-07 1.20711L-5.85082e-08 6.79289C-7.79796e-08 7.23835 0.53857 7.46143 0.853553 7.14645Z" />
      </svg>
    </div>
  );
};

export default FoldIcon;
