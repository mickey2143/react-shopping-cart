import Products from './Products'
import {GridLoader} from "react-spinners"
import useFetch from './hooks/useFetch'
import { dummy } from './data'

function Categories({categories}) {
    
    const resData = useFetch(`https://dummyjson.com/products/category/${categories}`)
    const {isLoading,error,data} = resData
   console.log(resData)
    
  return <>
    { categories && 
        <div className='mt-8'>
       
            <h2 className='text-2xl font-bold '>{categories} for you!</h2>
            <Products data={resData}/>
            
       </div>
    }
    </>
}

export default Categories
