import React, { createContext, useState, useContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({children})=>{
    const [addToFavorite, setAddToFavorite] = useState([]);
    const [addToCart, setAddToCart] = useState([]);

    return(
        <GlobalContext.Provider value={{
            addToFavorite,
            setAddToFavorite,
            addToCart,
            setAddToCart
        }}>
            {children}
        </GlobalContext.Provider>
    )
}