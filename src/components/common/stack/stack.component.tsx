import * as React from 'react';
import clsx from 'clsx';

import styles from './stack.module.scss';

interface IStack extends React.HTMLAttributes<HTMLOrSVGElement> {
  as?: keyof JSX.IntrinsicElements;
  direction?: 'column-reverse' | 'column' | 'row-reverse' | 'row';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'strech' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  spacing?: 0 | 0.5 | 1 | 2 | 4 | 8;
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

const Stack = ({
  as: Tag = 'div',
  direction = 'column',
  alignItems = 'strech',
  justifyContent = 'flex-start',
  spacing = 0,
  className,
  children,
}: IStack): JSX.Element => {
  return (
    <Tag
      className={clsx(
        styles.stack,
        styles[`stack--d-${direction}`],
        styles[`stack--align-${alignItems}`],
        styles[`stack--justify-${justifyContent}`],
        styles[`stack--s-${spacing}`],
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Stack;
