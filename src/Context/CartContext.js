import { createContext, useState } from "react";


const CartContext = createContext();

const CartContextProvider = ({children})=>{

    const[addToCart,setAddToCart]=useState([]);
    
    // items state
    // store items in localstorage - localStorage.setItem('key',value); localStorage.getItem('key');
    // make functions addToCart and removeFromCart

    

    
    const values = {
        setAddToCart
    }

    return (<CartContextProvider value={values}>{children}</CartContextProvider>)
}
