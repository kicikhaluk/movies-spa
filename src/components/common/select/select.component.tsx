import clsx from 'clsx';

import styles from './select.module.scss';

interface ISelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
}

const Select = ({ children, className, ...props }: ISelect): JSX.Element => {
  return (
    <select className={clsx(styles.select, className)} {...props}>
      {children}
    </select>
  );
};

export default Select;
