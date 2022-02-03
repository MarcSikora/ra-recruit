import { useState } from 'react';
import Layout from '../components/Layout'
import AppContext from "../context/AppContext";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [items, setItems] = useState([])
  const addItem = (newItem) => {
    setItems(prev => {
      const prevItem = prev.find(item => item.id === newItem.id)
      if(prevItem)
        return prev.map(item => 
          item.id === newItem.id
            ? { ...item, amount: item.amount + 1}  
            : item
        )

      return [...prev, { ...newItem, amount: 1}]
    })
  }
  const removeItem = (id) => {

    setItems(prev => 
      prev.reduce((ack, item) => {
        if(item.id === id)
        {
          if(item.amount === 1)
            return ack
          return [...ack, { ...item, amount: item.amount - 1}]
        }
        return [...ack, item]
      }, [])
    )
  }

  return <AppContext.Provider value={{items, addItem, removeItem}}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AppContext.Provider>
}

export default MyApp
