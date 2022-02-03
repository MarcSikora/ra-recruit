import styles from '../styles/HomeItem.module.css'
import Image from 'next/image';
import Link from 'next/link'
import { useContext } from 'react';
import AppContext from '../context/AppContext';

const HomeItem = ({product}) => {
  const {addItem} = useContext(AppContext)

  const handleAddToCart = (e) => {
    e.preventDefault()
    addItem(product)
  }

  return <Link href="/product/[slug]" as={`/product/${product.slug}`} passHref>
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image className={styles.img} src={product.image} alt={styles.name} layout='fill'></Image>
        </div> 
        <div className={styles.info}>
            <div className={styles.name}>{product.name}</div>
            <div className={styles.row}>
                <div className={styles.price}>{product.price} $</div>
                <button className={styles.button} onClick={handleAddToCart}>Add to cart</button>
            </div>
        </div>
    </div>
  </Link>
};

export default HomeItem;
