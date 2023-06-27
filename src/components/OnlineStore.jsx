import { useState } from "react";
import Nav from "./Nav";
import Categories from "./Categories";
import Global from "./Context/Global";
import useFetch from "./hooks/useFetch";
import { GridLoader } from "react-spinners";



const OnlineStore = () => {
  const [searchVal,setSearchVal] = useState('')
  
  const {data:categories,isLoading,error} = useFetch(`https://dummyjson.com/products/categories`)
  console.log(categories)
  return (
    <Global>
      <div className="flex flex-col items-center justify-center w-full">
        <Nav search={setSearchVal} />
        {isLoading ?? <div className='py-5'><GridLoader loading={categories.isLoading}/></div>}
        {categories && categories.map((cat)=><Categories key={cat} categories={cat}/>)}
        {error && <h2>{error}</h2>}
        
      </div>
    </Global>
  );
};

export default OnlineStore;
