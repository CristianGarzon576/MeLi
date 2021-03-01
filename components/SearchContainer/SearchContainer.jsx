import BreadCrumbs from '../BreadCrumb/BreadCrumbs';
import ItemFind from '../ItemFind/ItemFind';


export const SearchContainer = ({breadCrumbs, items}) => {
  return (
    <div className="wrapperPage">
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