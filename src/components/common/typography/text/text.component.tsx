import * as React from 'react';
import clsx from 'clsx';

import styles from './text.module.scss';

interface IText
  extends React.HTMLAttributes<HTMLParagraphElement & HTMLSpanElement> {
  as?: 'span' | 'p' | 'small';
  variant?: 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  weight?: 'light' | 'normal' | 'medium';
  align?: 'left' | 'center' | 'right';
  isUppercase?: boolean;
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

const Text = ({
  as: Tag = 'p',
  variant = 'dark',
  size = 'md',
  weight = 'normal',
  align = 'left',
  isUppercase = false,
  className,
  children,
}: IText): JSX.Element => {
  return (
    <Tag
      className={clsx(
        styles.text,
        styles[`text--${variant}`],
        styles[`text--s-${size}`],
        styles[`text--w-${weight}`],
        styles[`text--a-${align}`],
        isUppercase && styles[`text--uppercase`],
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Text;
