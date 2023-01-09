import Image from 'next/image'
import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src='/img/telephone.png' alt="phone" width={32} height={32}/>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW</div>
          <div className={styles.text}>502089</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href='/'><li className={styles.listItem}>Homepage</li></Link>
          <Link href="/product/1"><li className={styles.listItem}>Products</li></Link>
          <Image src='/img/restaurant.jpg' height={42} width={42} alt=""/>
          <Link href="/order/1"><li className={styles.listItem}>Orders</li></Link>
          <li className={styles.listItem}>SignIN</li>
        </ul>
      </div>
      <div className={styles.item}>
        <Link href='/cart'>
        <div className={styles.cart}>
        <Image src='/img/cart.png' alt="cart" width={32} height={32}/>
        <div className={styles.counter}>2</div>

        </div>
        </Link>
      </div>
    </div>
  )
}
