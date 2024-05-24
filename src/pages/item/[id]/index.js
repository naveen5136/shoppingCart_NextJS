import React from 'react'
import styles from '../../../styles/Product.module.css'

export const getStaticProps= async(context) => {
   const resp = await fetch(`https://fakestoreapi.com/products/${context.params.id}`)
   const data = await resp.json()
   debugger
   console.log("dd",data)
   return {
     props: {data}
   }
}

export const getStaticPaths= async() =>{
   const res = await fetch(`https://fakestoreapi.com/products`)
   const data = await res.json()
   const ids = data.map((a)=>a.id)
   const paths = ids.map(item => ({ params: {id:item.toString()} }));

    return {
        paths,
        fallback: false,
    }
}

const Item = ({data}) => {
    
    
  return (
    data && <div className={styles.itemContainer}>
            <h2>{data.title}</h2>
            <br /><p><img src={data.image} height="150" /></p>
            <br /><p>image url: {data.image}</p>
            <br /><p>price: ${data.price}</p>
            <br /><p>category: {data.category}</p>
            <br /><p>description: {data.description}</p>
        </div> 
  )
}

export default Item