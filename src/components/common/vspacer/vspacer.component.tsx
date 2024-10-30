import * as React from 'react';
import clsx from 'clsx';

import styles from './vspacer.module.scss';

interface IVSpacer extends React.HTMLAttributes<HTMLOrSVGElement> {
  as?: keyof JSX.IntrinsicElements;
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}

const VSpacer = ({
  as: Tag = 'div',
  spacing = 'md',
  children,
  className,
  ...props
}: IVSpacer): JSX.Element => {
  return (
    <Tag className={clsx(styles[`spacing--${spacing}`], className)} {...props}>
      {children}
    </Tag>
  );
};

export default VSpacer;
