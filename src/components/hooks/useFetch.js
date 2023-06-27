import {useEffect, useState} from 'react'
import tea from "../../assets/tea.jpg"
import { cate, dummy } from '../data'
 
const useFetch = (url) => {
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState(null)
    const [data,setData] = useState(null)
    useEffect(()=>{
    
    // fetch('https://dummyjson.com/products/1')
    // fetch('https://dummyjson.com/products/search?q=phone')
    // console.log(search)
            fetch(url).then((res)=>{
               
              console.log(res)
                if(!res.ok){
                  throw Error("Oopps.. Cound not fetch data")
                }
                return res.json()
            }).then((data)=>{
              
                setData(data)
                console.log(data)
                setIsLoading(false)
                
            }).catch((err)=>{
                setIsLoading(false)
                setError("Opps... Network error. Do not worry it's our fault. Try Refreshing")
              
              })
        
        
      },[])

    return {isLoading,error,data}
}

export default useFetch
