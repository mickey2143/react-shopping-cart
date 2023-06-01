import Nav from "./Nav";
import Products from "./Products"
import Global from "./Context/Global";

import useFetch from "./hooks/useFetch";


const OnlineStore = () => {
  const products = useFetch("https://dummyjson.com/products")
  return (
    <Global data={products}>
      <div className="flex flex-col items-center justify-center w-full">
        <Nav />
        <Products data={products}/>
      </div>
    </Global>
  );
};

export default OnlineStore;
