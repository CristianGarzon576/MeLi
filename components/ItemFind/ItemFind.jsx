import styles from './ItemFind.module.scss';
import Link from 'next/link';

export const ItemFind = ({item}) => {
  console.log(item);
  const iconShipping = '/assets/ic_shipping.png';
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: `${item.price.currency}`,
    minimumFractionDigits: 2
  });
  const price = formatter.format(item.price.amount);
  return (
    <Link href={`/items/${item.id}`}>
      <div className={styles.itemFind}>
        <div className={styles.imgItemFind}>
          <img src={item.picture} />
        </div>
        <div className={styles.infoItemFind}>
          <div className={styles.infoItemAdd}>
            <div className={styles.infoItemPrice}>
              <span>{price}</span>
              {!!item.free_shipping && (<img src={iconShipping} alt="free shipping icon" />)}
            </div>
            <span>{item.address}</span>
          </div>
          <div className={styles.infoItemTitle}>
            <span>{item.title}</span>
            <span>{item.condition}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ItemFind;