import { Link, useLocation } from 'react-router-dom';
import { Search } from '@/components';

import styles from './header.module.scss';

const Header = (): JSX.Element => {
  const { search } = useLocation();
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <div className={styles.logo}>
          <Link to={`/${search}`}>MoviesApp</Link>
        </div>
        <Search />
      </div>
    </header>
  );
};

export default Header;
