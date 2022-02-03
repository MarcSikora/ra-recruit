import Link from 'next/link';
import styles from '../styles/Header.module.css'
import { useContext } from 'react';
import AppContext from '../context/AppContext';

const Header = () => {
  const {items} = useContext(AppContext)
  const amount = items.reduce((a, b) => a + b.amount, 0)
  const alert = (items.length > 0) ? <span className={styles.alert}>{amount}</span> : null
  
  return <div className={styles.container}>
      <Link href="/" passHref>
        <button className={styles.home}>Home</button>
      </Link>
      <Link href="/cart" passHref>
        <button className={styles.cart}>
            {alert}
           Cart
        </button>
      </Link>
  </div>;
};

export default Header;
