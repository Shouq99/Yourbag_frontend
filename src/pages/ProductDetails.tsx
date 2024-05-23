import { fetchProductsBySlug } from "@/tookit/slices/productSlice";
import { AppDispatch, RootState } from "@/tookit/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import img from "./../img/img1.jpg";
export const ProductDetails = () => {
    const {slug} = useParams<{slug: string}>()
    const { product, isLoading, error, totalPages} = useSelector((
      state: RootState) => state.productR)
  
    const dispatch: AppDispatch = useDispatch()
    
    
    useEffect(() => { 
      const fetchDate = async () =>{
        await dispatch(fetchProductsBySlug(slug))
      }
      fetchDate()
  }, [])
  console.log(img);
  console.log(product?.image);
      return (

        <article className="product-info">
        <div className="product-details">

            <h2> Product Details page </h2>

        { isLoading && <p>Loading ...</p>}
        {error && <p>Error{error}</p>}

        {product && (
            <div className="product-details">
            <div className="product-letf">

                 {/* <img src={product.image} alt={product.name} className="product-img"/> */}
                 <img src={"/" + product.image} alt={product.name} className="product-img"/>
                     </div>

                     <div className="product-body">
                     <p className="Product_Name">{product.name}</p>
                     <p className="Product_description">{product.description}  </p>
                     <p>
                     {" "}
                  Price:
                  {product.price.toLocaleString("en-us",{
                style: "currency",
                currency: "USD" 
                    } )}
                     </p>
              
                      <p>Product Added: {new Date (product.createdAt).toLocaleDateString()}</p>
                     </div>
                     </div>
        )}
        </div>
        </article>
    );
};

