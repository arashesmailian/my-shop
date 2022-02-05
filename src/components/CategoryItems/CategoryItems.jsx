import React from 'react';
import styles from './category.items.style.module.css'
import { ProductList } from '..'

const CategoryItems = ({title , products = []}) => {
  return (
    <div className={styles.category_items}>
        <h2 className={styles.category_title}>{title}</h2>
        <ProductList ProductList={products} />
    </div>
  )
};

export default CategoryItems;
