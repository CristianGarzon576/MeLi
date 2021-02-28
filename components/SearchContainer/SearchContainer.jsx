import styles from './SearchContainer.module.scss';

import BreadCrumbs from '../BreadCrumb/BreadCrumbs';
import ItemFindContainer from '../ItemFindContainer/ItemFindContainer';

export const SearchContainer = ({breadCrumbs, items}) => {
  console.log(items);
  return (
    <div className={styles.searchContainer}>
      <BreadCrumbs breadCrumbs={breadCrumbs}/>
      <ItemFindContainer items={items} />
    </div>
  );
};

export default SearchContainer;