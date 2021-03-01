import { ConditionItem, DescriptionItem, PriceItem } from "../utilities.components";
import styles from './Item.module.scss';

export const Item = ({item}) => {
  return(
    <div className={styles.itemWraper}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <img src={item.picture} alt={item.title}/>
        </div>
        <div className={styles.titleContainer}>
          <ConditionItem condition={item.condition} soldQuantity={item.sold_quantity} />
          <h1>{item.title}</h1>
          <PriceItem price={item.price} />
          <button className="btn-primary">Comprar</button>
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <DescriptionItem description={item.description}/>
      </div>
    </div>
  );
};

export default Item;