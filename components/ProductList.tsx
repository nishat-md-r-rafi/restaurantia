import React from 'react'
import styles from '../styles/ProductList.module.css'
import { ProductCard } from './ProductCard';

export const ProductList = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
  )
}
