import * as React from 'react';
import clsx from 'clsx';

import styles from './header.module.scss';

interface IHeader extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight?: 'light' | 'normal' | 'medium';
  variant?: 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  align?: 'left' | 'center' | 'right';
  isUppercase?: boolean;
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

const Header = ({
  as: Tag = 'h2',
  weight = 'normal',
  size = 'md',
  align = 'left',
  variant = 'dark',
  isUppercase = false,
  className,
  children,
}: IHeader): JSX.Element => {
  return (
    <Tag
      className={clsx(
        styles.header,
        styles[`header--s-${size}`],
        styles[`header--w-${weight}`],
        styles[`header--a-${align}`],
        styles[`header--${variant}`],
        isUppercase && styles['header--uppercase'],
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Header;
