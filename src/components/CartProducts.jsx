import {useContext} from "react";
import { GlobalContext } from "./Context/Global";
import { formatCurrency } from "../utils/helper";

const CartProducts = ({product}) => {
  const { getPrice,addOneToCart,removeOneFromCart,getName} = useContext(GlobalContext)
  return (
    <>
      <div className="mb-5">
        <div className="flex justify-between mb-2">
          <div>
            <h2>{getName(product.id)}</h2>
          </div>
          <div className="flex">
            <span className="w-4 h-4 p-3 rounded-full flex items-center justify-center bg-black text-white text-sm cursor-pointer select-none" onClick={()=>addOneToCart(product.id)}>
              +
            </span>
            <span className="w-4 h-4 p-3 rounded-full flex items-center justify-center bg-black text-white text-sm cursor-pointer select-none" onClick={()=>removeOneFromCart(product.id)}>
              -
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            Quantity: <span>{product.quantity}</span>
          </div>
          <div>
            Price: <span>{ formatCurrency(getPrice(product.id))}</span>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default CartProducts;
