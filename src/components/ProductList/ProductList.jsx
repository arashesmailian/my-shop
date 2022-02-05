import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './product.list.style.module.css'

const ProductList = ({ProductList = []}) => {
  return (
      <div className={styles.product_list}>
          {ProductList.map((product) => (
              <ProductCard key={product.id} name={product.title} price={product.price} imageSrc={product.image} id={product.id}/>
          ))}
      </div>
  )
};

export default ProductList;
