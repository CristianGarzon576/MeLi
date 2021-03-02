import SearchBar from './SearchBar/SearchBar';
import styles from './Header.module.scss';
import { MeLiIcon } from '../utilities.components';
import { memo } from 'react';

export const Header = ({initialState}) => {
  
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.mlLogo}>
          <MeLiIcon />
        </div>
        <SearchBar initialState={initialState} />
      </div>
    </div>
  );
};

export default memo(Header);