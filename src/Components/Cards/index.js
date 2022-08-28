import React from 'react'
import styles from './styles.css'
import HeartIcon from '@heroicons/react/solid'
const Card = ({item}) => {
  return (
    <div className={styles.card}>
        <div className={styles.cardLink}>
            <button className={styles.favButton}>
                <HeartIcon/>
            </button>
          <div className={styles.cardHeader}>
            <img className={styles.cardImg} src={item.img}></img>
          </div> 
          <div className={styles.cardBody}>
            <>
                <p className={styles.cardTitle}>
                    <span className={styles.brand}>
                        Brand,
                    </span>
                    
                    {item.title}
                    
                </p>
            </>
            <div className={styles.rating}>
                
            </div>


          </div> 
        </div>
    </div>
  )
}

export default Card