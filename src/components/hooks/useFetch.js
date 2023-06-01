import {useEffect, useState} from 'react'
import tea from "../../assets/tea.jpg"
import { dummy } from '../data'
 
const useFetch = (url) => {
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState(null)
    const [data,setData] = useState(null)
    useEffect(()=>{
    
    // fetch('https://dummyjson.com/products/1')
    // fetch('https://dummyjson.com/products/search?q=phone')
            fetch(url).then((res)=>{
               
                if(!res.ok){
                  throw Error("Oopps.. Cound not fetch data")
                }
                return res.json()
            }).then((data)=>{
              
                setData(data.products)
                setIsLoading(false)
                
            }).catch((err)=>{
                setIsLoading(false)
                // setError("Opps... Network error. Do not worry it's our fault. Try Refreshing")
                setData(dummy.products)
              })
        
        
      },[])

    return {isLoading,error,data}
}

export default useFetch
