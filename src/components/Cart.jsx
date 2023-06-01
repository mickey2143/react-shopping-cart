import React, { useState, useContext } from "react";
import { GlobalContext } from "./Context/Global";
import CartProducts from "./CartProducts";
import {formatCurrency} from "../utils/helper"

const Cart = () => {
  const { cart,getTotal} = useContext(GlobalContext);
  const [modal, handleModal] = useState(false);
  function handleClick() {
    handleModal(!modal);
  }
 

  return (
    <>
      <div
        onClick={handleClick}
        className="text-xl flex items-center justify-center gap-2 select-none cursor-pointer"
      >
        <p className="font-normal text-xl">cart</p>
        <span className="w-4 h-4 p-3 rounded-full flex items-center justify-center bg-black text-white text-sm">
          {cart.length}
        </span>
      </div>
      {modal && (
        <>
          <div onClick={()=>alert("click")} className="fixed top-0 right-0 opacity-50 bg-black h-full w-full" ></div>

          <div className="fixed top-0 right-0 w-full h-full flex justify-center items-center">
            <div className="max-w-md w-full bg-white rounded-lg mx-auto">
              <div className="px-7 py-3 overflow-auto ">
                <div className="flex justify-between items-center mb-4">
                  <h2>Checkout</h2>
                  <span
                    onClick={handleClick}
                    className="w-4 h-4 p-4 rounded-full flex items-center justify-center bg-black text-white text-sm select-none font-meduim cursor-pointer"
                  >
                    X
                  </span>
                </div>

                {
                  cart.map((pro,inx)=>( <CartProducts key={inx} product={pro} />))
                }
                
                  
                  
                  <div>
                  <div className="flex justify-between">
                    <h2 className="font-bold text-xl">
                     TOTAL
                    </h2>
                    <div className="font-medium text-lg">
                    {formatCurrency(getTotal())}
                    </div>
                  </div>
                 

                </div>

                <span className="select-none mt-5 text-center cursor-pointer px-4 py-2 flex justify-center  bg-black text-white items-center rounded-3xl">
                  Purchase
                </span>

              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
