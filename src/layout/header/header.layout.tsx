import { Search } from '@/components';
import styles from './header.module.scss';

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <div className={styles.logo}>MoviesApp</div>
        <Search />
      </div>
    </header>
  );
};

export default Header;
