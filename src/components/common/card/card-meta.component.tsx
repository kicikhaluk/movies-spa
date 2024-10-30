import clsx from 'clsx';

import styles from './card.module.scss';

interface ICardMeta {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

const CardMeta = ({ children, className }: ICardMeta): JSX.Element => {
  return <div className={clsx(styles.card_meta, className)}>{children}</div>;
};

export default CardMeta;
