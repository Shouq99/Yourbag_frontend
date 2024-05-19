import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/tookit/store";
import { fetchProducts } from "@/tookit/slices/productSlice";
import { Link } from "react-router-dom";


 const Products = () => {

  const { products, isLoading, error, totalPages} = useSelector((state: RootState) => state.productR)

    const dispatch: AppDispatch = useDispatch()
    
    const [page, setPage] = useState(1);
    const [limit, setlimit] = useState(5);
    useEffect(() => { 
      const fetchDate = async () =>{
        await dispatch(fetchProducts({page, limit}))
      }
      fetchDate()
  }, [page, limit])

  const handlePreviousPage = () => {
    setPage((currentPage: number) => currentPage - 1)

  } 
   const handleNextPage = () => {
    setPage((currentPage: number) => currentPage + 1)
  }

  //console.log(products)
  return (
    <section>
      <h2>Product</h2>
      <div className="grid flex-center">
        {products?.length &&
          products.map((product) => (
            <div className="product-card" key={product.productId}>
              <img src={product.image} alt="product.name" className="product-img" />
              <h3 className="Product_Name">{product.name}</h3>
                <p>
                  {" "}
                  Price:
                  {product.price}
                  {/*.toLocaleString("ar-SA",{
                style: "currency",
                currency: "ksa"
              } */}
                </p>

              <Link to={`/products/${product.slug}`}>
                  <button className="product-btn">
                    Show Details <li className="fa fa-eye"></li>
                  </button>
                </Link>
            </div>
            
          ))}
                  <article className="product-body">
            
              
                {/* <button className="product-btn">
                  Add to cart <li className="fa fa-shopping"></li>
                </button>
                <button onClick={handlePreviousPage} disabled={page === 1}>
                  Previous
                </button>
                <button onClick={handleNextPage} disabled={page === totalPages}>
                  Next
                </button> */}
              </article>
      </div>
    </section>
  )
}
 
export default Products