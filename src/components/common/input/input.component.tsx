import * as React from 'react';
import clsx from 'clsx';

import styles from './input.module.scss';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type = 'text',
  wrapperClassName,
  className,
  value,
  onChange,
  ...props
}: IInput) => {
  return (
    <div className={clsx(styles.input__wrapper, wrapperClassName)}>
      <input
        type={type}
        onChange={onChange}
        className={clsx(styles.input, className)}
        value={value}
        {...props}
      />
    </div>
  );
};

export default Input;
