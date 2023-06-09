import {useContext} from 'react'
import { GlobalContext } from './Context/Global'

import tea from "../assets/tea.jpg"
import {formatCurrency} from "../utils/helper";
const Card = ({data}) => {
    const { addOneToCart } = useContext(GlobalContext)
   
  return (
    <div className="bg-white shadow-xl flex justify-center w-64 rounded-xl flex-col py-5">
    <div className='w-full flex items-center justify-center select-none'>
        
        <img src={data.images[0]} alt=""  className="w-32 "/>
       
    </div>
    <div className="px-4 py-5 space-y-2">
        <h1 className="font-bold text-xl">{data.title}</h1>
        <h1 className="font-normal text-sm capitalize">{data.description}</h1>
        <p className="">Price : {formatCurrency(data.price)}</p>
    </div>

    <div className="px-4 flex items-center justify-between">
        <span>
            {data.rating}
        </span>
        <span  onClick={()=>addOneToCart(data.id)} className="select-none text-center cursor-pointer px-4 py-2 flex justify-center  hover:bg-black hover:text-white border border-black items-center rounded-3xl">
           {data.cart ? "Check Out":"Add to Cart"}
        </span>
    </div>
  
    </div>
  )
}

export default Card
