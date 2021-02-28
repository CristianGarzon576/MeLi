import styles from './SearchContainer.module.scss';

import BreadCrumbs from '../BreadCrumb/BreadCrumbs';
import ItemFind from '../ItemFind/ItemFind';


export const SearchContainer = ({breadCrumbs, items}) => {
  console.log(items);
  return (
    <div className={styles.searchContainer}>
      <BreadCrumbs breadCrumbs={breadCrumbs}/>
      <div className="card">
        {items.map((item) => {
          return <ItemFind key={item.id} item={item}/>
        })}
      </div>
    </div>
  );
};

export default SearchContainer;