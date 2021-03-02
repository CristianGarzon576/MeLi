import styles from './ItemFind.module.scss';
import Link from 'next/link';
import { ConditionItem, FreeShippingIcon, PriceItem } from '../utilities.components';

export const ItemFind = ({item}) => {
  return (
    <Link href={`/items/${item.id}`}>
      <div className={styles.itemFind} tabIndex="0">
        <div className={styles.imgItemFind}>
          <img src={item.picture} alt={item.title} />
        </div>
        <div className={styles.infoItemFind}>
          <div className={styles.infoItemAdd}>
            <div className={styles.infoItemPrice}>
              <PriceItem price={item.price} />
              <FreeShippingIcon freeShipping={item.free_shipping} />
            </div>
            <span>{item.address}</span>
          </div>
          <div className={styles.infoItemTitle}>
            <span>{item.title}</span>
            <ConditionItem condition={item.condition} />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ItemFind;