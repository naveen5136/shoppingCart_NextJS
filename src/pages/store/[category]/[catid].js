import React from 'react'
import styles from '../../../styles/Product.module.css'

export const getStaticProps= async (context) => {
    
   const resp = await fetch(`https://fakestoreapi.com/products/${context.params.catid}`)
   const data = await resp.json()
   
   return {
     props: {data}
   }
}

export const getStaticPaths= async() =>{
   const res = await fetch(`https://fakestoreapi.com/products/category/jewelery`)
   const data = await res.json()
   const ids = data.map((a)=>(a.id))
   debugger
   const paths = ids.map(item => ({ params: {catid:item.toString(),category: 'jewelery'} }));
   debugger
    return {
        paths,
        fallback: false,
    }
}

const ProductCat = ({data}) => {
    
    
  return (
    data && <><div className={styles.itemContainer}>
            <h2>{data.title}</h2>
            <br /><p><img src={data.image} height="150" /></p>
            <br /><p>image url: {data.image}</p>
            <br /><p>price: ${data.price}</p>
            <br /><p>category: {data.category}</p>
            <br /><p>description: {data.description}</p>
        </div> </>
  )
}

export default ProductCat