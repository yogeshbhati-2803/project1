import React from 'react'
import { useProduct } from '../../Context/ProductContext'
import Card from '../../Components/Cards';
import styles from './styles.module.css';
const Products=()=>{
    const {productList,loading}=useProduct();

    return(
        <div className={styles.cardGroup}>
            {!loading?(productList?.map(i =>(
                <Card item={i}/>
                // <h1>{i.title}</h1>
))):<h1>Loading...</h1>}
        </div>
    );
}

export default Products