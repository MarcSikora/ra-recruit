import styles from '../styles/Cart.module.css'
import { useContext } from "react";
import AppContext from "../context/AppContext";
import CartItem from '../components/CartItem';
import Head from 'next/head'

const Cart = () =>
{
  const { items } = useContext(AppContext)
  const list = items.map(item => <CartItem key={item.id} item={item} />)
  const total = items.reduce((a, b) => a + parseFloat(b.price) * b.amount, 0)
  const amount = items.reduce((a, b) => a + b.amount, 0)
  
  return <div className={styles.container}>
    <Head>
      <title>Cart</title>
    </Head>
    {items.length > 0
      ?
      <div className={styles.list}>
        {list}
        <div className={styles.summary}>
          <div className={styles.total}>
            Total: {total} $
          </div>
          <div>Items: {amount}</div>
        </div>
      </div>
      :
      <div className="center">Cart is empty</div>
    }
  </div>;
};

export default Cart;
