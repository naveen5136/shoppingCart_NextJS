import Products from '@/components/Products';
import React from 'react'
import styles from '../../styles/Home.module.css'

export const getStaticProps = async() => {
  const resp = await fetch(`https://fakestoreapi.com/products`);
  const data = await resp.json();

  if(data){
    return {
      props:{data}
    }

  }
 
    
}

const Store = ({data}) => {

    
  return (
    <div className={styles.container}>

    <Products data={data}/>
     
    </div>
  )
}

export default Store