import { Link } from 'react-router-dom';
import { Search } from '@/components';

import styles from './header.module.scss';

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <div className={styles.logo}>
          <Link to={'/'}>MoviesApp</Link>
        </div>
        <Search />
      </div>
    </header>
  );
};

export default Header;
