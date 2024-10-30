import styles from './footer.module.scss';

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <p>© {new Date().getFullYear()} MoviesApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
