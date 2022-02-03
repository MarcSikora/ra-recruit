import styles from '../styles/ProductView.module.css'
import Image from 'next/image'
import Head from 'next/head'

import { useContext } from 'react';
import AppContext from '../context/AppContext';

const ProductView = ({product}) => {
  const {addItem} = useContext(AppContext)

  const handleAddToCart = (e) => {
    e.preventDefault()
    addItem(product)
  }

  return <div className={styles.container}>
    <Head>
      <title>Product view</title>
    </Head>
    <Image src={product.image} alt={styles.name} layout='responsive' width={640} height={480}></Image>
    <div className={styles.text}>
        <div className={styles.info}>
            <h3 className={styles.name}>{product.name}</h3>
            <div className={styles.description}>{product.description}</div>
        </div>
        <div className={styles.buy}>
            <div className={styles.price}>{product.price} $</div>
            <button className={styles.button} onClick={handleAddToCart}>Add to cart</button>
        </div>
    </div>
  </div>;
};

export default ProductView;
