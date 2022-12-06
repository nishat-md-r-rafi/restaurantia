import Image from 'next/image'
import React from 'react'
import styles from "../styles/ProductCard.module.css";

export const ProductCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="100" height="100" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  )
}
