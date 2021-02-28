import ItemFind from "../ItemFind/ItemFind";

export const ItemFindContainer = ({items}) => {
  return (
    <div className="card">
      {items.map((item) => {
        return <ItemFind key={item.id} item={item}/>
      })}
    </div>
  )
}

export default ItemFindContainer;
