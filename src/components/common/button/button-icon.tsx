import * as React from 'react';
import clsx from 'clsx';
import styles from './button.module.scss';

interface IButtonIcon extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  className?: string;
}

const ButtonIcon = ({ icon, className, ...props }: IButtonIcon) => {
  return (
    <button
      className={clsx(styles.button, styles.button_icon, className)}
      {...props}
    >
      <span className={clsx(styles.icon)}>{icon}</span>
    </button>
  );
};

export default ButtonIcon;
