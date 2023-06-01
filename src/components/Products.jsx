import Card from './Card'
import { GridLoader } from 'react-spinners'




const Products = ({data}) => {
  let {isLoading,data:products,error} = data
  
  return <>
    {isLoading &&<div className='py-5 '><GridLoader loading={isLoading}/></div>}
    {products && <div className="grid px-5 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 py-5 grid-flow-row gap-6">{products.map((prod)=>(<Card data={prod} key={prod.id } />))}</div>}
    {error && <h2 className='pt-5'>{error}</h2>}
  </>


 
}

export default Products
