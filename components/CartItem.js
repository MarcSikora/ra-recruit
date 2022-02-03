import styles from '../styles/CartItem.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

const CartItem = ({item}) => {
  const {removeItem} = useContext(AppContext)

  const handleRemove = () => {
    removeItem(item.id)
  }

  return <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={item.image} alt={styles.name} layout='responsive' width={180} height={120} />
      </div>
      <div className={styles.info}>
        <Link href="/product/[slug]" as={`/product/${item.slug}`}>
          <a><div className={styles.name}>{item.name}</div></a>
        </Link>
      </div>
      <div className={styles.buy}>
        <div className={styles.amount}>{item.amount} pcs</div>
        <div className={styles.price}>{item.price * item.amount} $</div>
        <div className={styles.button} onClick={handleRemove}>Remove</div>
      </div>
  </div>;
};

export default CartItem;
