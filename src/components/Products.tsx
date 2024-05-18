import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/tookit/store";
import { fetchProducts } from "@/tookit/slices/productSlice";


 const Products = () => {

  const { products, isLoading, error, totalPages} = useSelector((state: RootState) => state.productR)

    const dispatch: AppDispatch = useDispatch()
    
    const [page, setPage] = useState(1);
    const [limit, setlimit] = useState(3);
    useEffect(() => { 
      const fetchDate = async () =>{
        await dispatch(fetchProducts({page, limit}))
      }
      fetchDate()
  }, [page])

  const handlePreviousPage = () => {
    setPage((currentPage: number) => currentPage - 1)

  } 
   const handleNextPage = () => {
    setPage((currentPage: number) => currentPage + 1)
  }

  //console.log(products)
  return  (
      <div>
      <h2>Product</h2>
        { isLoading && <p>Loading ...</p>}
        {error && <p>Error{error}</p>}

        {products &&
         products.length > 0 &&
         products.map((product) => <SingleProduct key={product.productId}
        product={product}/>)}
        <section/>
       <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
       <button onClick={handleNextPage} disabled={page === totalPages}>Next</button>
</div>
        
            )
}
 
export default Products