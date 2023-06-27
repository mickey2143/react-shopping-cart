import { useState ,useEffect,useContext } from "react"
import { GlobalContext } from "./Context/Global"

const SearchBox = ({search}) => {
 
 
  return (
    
    <div className=" relative h-10 ">
    <span className="absolute right-2 h-full top-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
    </span>
      <input type="text" className="w-full outline-none h-full border-black border-2 pl-4 pr-11 rounded-md" placeholder="Search" onChange={(e)=>search(e.target.value)}/>
    </div>
  )
}

export default SearchBox
