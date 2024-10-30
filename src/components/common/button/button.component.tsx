import clsx from 'clsx';
import ButtonIcon from './button-icon';

import styles from './button.module.scss';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  addonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'default';
}

const Button = ({
  label,
  addonAfter,
  addonBefore,
  className,
  variant,
  ...props
}: IButton) => {
  return (
    <button
      className={clsx(
        styles.button,
        variant === 'primary' && styles.button_primary,
        className
      )}
      {...props}
    >
      {addonBefore && (
        <span className={clsx(styles.addon, styles.addon_before)}>
          {addonBefore}
        </span>
      )}
      <span>{label}</span>
      {addonAfter && (
        <span className={clsx(styles.addon, styles.addon_after)}>
          {addonAfter}
        </span>
      )}
    </button>
  );
};

Button.Icon = ButtonIcon;

export default Button;
