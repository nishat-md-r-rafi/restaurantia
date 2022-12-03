import Image from 'next/image';
import React from 'react'
import styles from '../styles/Featured.module.css';
import { useState } from 'react';

export const Featured = () => {

  const [index, setIndex] = useState(0)

  let images:string[] = [
    '/img/featured.png',
    '/img/featured2.png',
    '/img/featured3.png',
  ]

  const handleClick = (direction:string) => {
    if (direction === 'l') {
      setIndex(index !== 0? index - 1: 2)
    }
    if (direction === 'r') {
      setIndex(index !== 2? index + 1: 0)
    }
  }

  return (
    <div className={styles.container}>

      <div className={styles.arrowContainer} style={{left:0}} onClick={()=>handleClick('l')}>
        <Image src='/img/arrowl.png' alt='arrow' layout='fill' />
      </div>

      <div className={styles.wrapper} style={{transform: `translateX(${-100 * index}vw)`}}>     
        {
          images.map((image, i) => 
          (  
            <div className={styles.imgContainer} key={i}>
              <Image src={image} alt='featured' layout='fill' objectFit='contain'/>
            </div>
          ))
        }      
      </div>
    
      <div className={styles.arrowContainer} style={{right:0}} onClick={()=>handleClick('r')}>
        <Image src='/img/arrowr.png' alt='arrow' layout='fill'/>
      </div>    
    </div>
  )
}
