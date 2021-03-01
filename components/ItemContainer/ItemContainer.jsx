import BreadCrumbs from '../BreadCrumb/BreadCrumbs';
import Item from '../Item/Item';

export const ItemContainer = ({item}) => {
  return (
    <div className="wrapperPage">
      <BreadCrumbs breadCrumbs={null}/>
      <div className="card">
        <Item item={item}/>
      </div>
    </div>
  );
};

export default ItemContainer;