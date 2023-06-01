import { createContext, useEffect, useReducer, useState } from "react";
import useFetch from "../hooks/useFetch";

export const GlobalContext = createContext();

const Global = ({ children,data }) => {
  localStorage.getItem("cart") || localStorage.setItem("cart", "[]");
 const getProduct = (id)=>{
   return data?.data?.find(product=>product.id === id)
 }

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  

  const setCartProd = (prodArr) => {
    setCart(prodArr);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const getProdQty = (id) => {
    return cart.find((pro) => +pro.id === id)?.quantity || 0;
  };
  const addOneToCart = (id) => {
    let qty = getProdQty(id);
    if (!qty) {
      setCartProd([...cart, { id, quantity: 1 }]);
    } else {
      setCartProd(
        cart.map((product) =>
          product.id === id ? { id, quantity: product.quantity + 1 } : product
        )
      );
    }
  };
  const deleteFromCart = (id)=>{
    setCartProd(cart.filter((product)=>product.id !== id))
  }
  const removeOneFromCart = (id)=>{
    const qty = getProdQty(id)
    if(qty === 1){
      deleteFromCart(id)
    }else{
      setCartProd(
        cart.map((product) =>
          product.id === id ? { id, quantity: product.quantity - 1 } : product
        )
      );
    }
  }

  const getTotal = ()=>{
    let total = 0
    cart.map(cartItem =>total += getProduct(cartItem.id).price * cartItem.quantity)
    return total
  }
  const getPrice = (id)=>{
  return getProduct(id).price
  }
  const getName = (id)=>{
  return getProduct(id).title
  }
  

  let intialState = {
    addOneToCart,
    getProdQty,
    deleteFromCart,
    removeOneFromCart,
    getPrice,
    getTotal,
    getName,
    cart,
  };
  return (
    <GlobalContext.Provider value={intialState}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Global;
