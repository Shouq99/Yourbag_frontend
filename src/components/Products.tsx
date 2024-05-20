import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/tookit/store";
import { fetchProducts } from "@/tookit/slices/productSlice";
import { Link } from "react-router-dom";
import Index from "@/routes";


 const Products = () => {

  const { products, isLoading, error, totalPages} = useSelector((state: RootState) => state.productR)

    const dispatch: AppDispatch = useDispatch()
    
    const [page, setPage] = useState(1);
    const [limit, setlimit] = useState(3);
    const [keyword, setkeyword] = useState("")
    const [sortBy, setsortBy] = useState("name")
    
    useEffect(() => { 
      const fetchDate = async () =>{
        await dispatch(fetchProducts({page, limit, keyword, sortBy}))
      }
      fetchDate()
  }, [page, limit, keyword, sortBy])

  const handlePreviousPage = () => {
    setPage((currentPage: number) => currentPage - 1)

  } 
   const handleNextPage = () => {
    setPage((currentPage: number) => currentPage + 1)
  } 
   const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setkeyword(e.target.value)
  }
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setsortBy(e.target.value)
  }


  //console.log(products)
  return (
    <section>
      <h2>Product</h2>
      <div>
      <input type="text" id="search" name="search" value={keyword}className="input"
              onChange={handleKeyword}
              placeholder="search...."
            />
            <p>Sort By :</p>
            <select name="" id="" onChange={handleSortChange}>
            <option value="name">Name</option>
            <option value="Price">Price</option>
              </select>
      </div>
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
                
            

                  <button className="product-btn">
                  Add to cart <li className="fa fa-shopping"></li>
                </button>
                </Link>
            </div>
            
          ))}
                  <article className="product-body">
            

                <button className="product-btn" onClick={handlePreviousPage} disabled={page === 1}>
                  Previous
                </button>
                {/* {Array.from({ length: totalPages}, (_, index) =>(
                  <button className="product-btn" key={index} onClick={() => setPage(index + 1)}>
                    {index + 1}

                  </button>
                ))} */}
                <button className="product-btn" onClick={handleNextPage} disabled={page === totalPages}>
                  Next
                </button> 
              </article>
      </div>
    </section>
  )
}
 
export default Products