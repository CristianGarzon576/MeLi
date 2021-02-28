import SearchBar from './SearchBar/SearchBar';
import styles from './Header.module.scss';

export const Header = ({initialState}) => {
  const meLiLogo = '/assets/Logo_ML.png';
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.mlLogo}>
          <img src={meLiLogo} alt="Logo Mercado Libre"/>
        </div>
        <SearchBar initialState={initialState} />
      </div>
    </div>
  );
};

export default Header;