import clsx from 'clsx';

import styles from './card.module.scss';

interface ICardCover extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

const CardCover = ({
  src,
  alt,
  className,
  ...props
}: ICardCover): JSX.Element => {
  return (
    <img
      className={clsx(styles.card_cover, className)}
      src={src}
      alt={alt}
      {...props}
    />
  );
};

export default CardCover;
