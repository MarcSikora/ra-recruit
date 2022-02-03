import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeItem from '../components/HomeItem';
import useSwr from 'swr'
import { useState } from 'react';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
  const [search, setSearch] = useState('');
  const { data, error } = useSwr('/api/products', fetcher)

  if (error) return <div className="center">Failed to load products :(</div>
  if (!data) return <div className="center">Loading...</div>

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <input 
        className={styles.searchbar} 
        type="text" 
        placeholder="Search" 
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      ></input>
      <div className={styles.list}>
        {data.products
        .filter(product => product.name.toLowerCase().includes(search))
        .map(product => <HomeItem key={product.id} product={product} />)}
      </div>
    </div>
  )
}