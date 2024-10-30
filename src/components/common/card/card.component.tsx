import clsx from 'clsx';

import CardCover from './card-cover.component';
import CardMeta from './card-meta.component';

import styles from './card.module.scss';

interface ICard {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

const Card = ({ children, className }: ICard): JSX.Element => {
  return <div className={clsx(styles.card, className)}>{children}</div>;
};

Card.Cover = CardCover;
Card.Meta = CardMeta;

export default Card;
