import Card from './Card'



const Products = ({data}) => {
  let {data:resData,products} = data
  // let products = null
  if(resData?.products){
    products = resData.products
  }
 
 
  return <>
    {products && <div className="grid px-5 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 py-5 grid-flow-row gap-6">{products.map((prod)=>(<Card data={prod} key={prod.id } />))}</div>}
  </>


  
}

export default Products
