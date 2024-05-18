import { fetchProductsBySlug } from "@/tookit/slices/productSlice";
import { AppDispatch, RootState } from "@/tookit/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
    const {slug} = useParams<{slug: string}>()
    const { product, isLoading, error, totalPages} = useSelector((state: RootState) => state.productR)
  
    const dispatch: AppDispatch = useDispatch()
    
    
    useEffect(() => { 
      const fetchDate = async () =>{
        await dispatch(fetchProductsBySlug (slug))
      }
      fetchDate()
  }, [])
      return (
        <article className="product-details">

            <h2> Product Details page </h2>
        { isLoading && <p>Loading ...</p>}
        {error && <p>Error{error}</p>}
        
        {product && (
            <div>
                     <img src={product.image} alt={product.name} className="product-img"/>
                     <h3 className="Product_Name">{product.name}</h3>
                     </div>
        )}
        </article>
    )
}

