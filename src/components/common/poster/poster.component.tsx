import styles from './poster.module.scss';

interface IPoster {
  src: string;
  alt?: string;
}

const Poster = ({ src, alt = 'Poster' }: IPoster) => {
  return (
    <div className={styles.poster}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Poster;
