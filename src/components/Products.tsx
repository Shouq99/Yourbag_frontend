import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/tookit/store";
import { fetchProducts } from "@/tookit/slices/productSlice";
import { Link } from "react-router-dom";

import { Product } from "@/types";
import { useProductsState } from "./hooks/useProductsState";
import { addToCart } from "@/tookit/slices/cartSlice";


 const Products = () => {

  // const { products, isLoading, error, totalPages} = useSelector(
  //   (state: RootState) => state.productR)

  const {products, isLoading, error, totalPages } = useProductsState();

    const dispatch: AppDispatch = useDispatch()

   

    const [page, setPage] = useState(1);
    const [limit, setlimit] = useState(3);
    // const [keyword, setkeyword] = useState("")
    // const [sortBy, setsortBy] = useState("name")
    const [keyword, setkeyword] = useState("")
    const [orderBy, setOrderBy] = useState<number>(0)
    const [sortBy, setSortBy] = useState<number>(1)
    const [minPrice, setMinPrice] = useState<number>(1)
    const [maxPrice, setMaxPrice] = useState<number>(2000000)
    useEffect(() => { 
      const fetchDate = async () =>{
        await dispatch(fetchProducts({page, limit, keyword,orderBy, sortBy, minPrice, maxPrice }))
      }
      fetchDate()
  }, [page, limit, keyword, sortBy , minPrice, maxPrice])

  const handlePreviousPage = () => {
    setPage((currentPage: number) => currentPage - 1)

  } 
   const handleNextPage = () => {
    setPage((currentPage: number) => currentPage + 1)
  } 
   const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setkeyword(e.target.value)
  }

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name == "min") {
      setMinPrice(Number(value))
    } else {
      setMaxPrice(Number(value))
    }
  }


  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(Number(e.target.value))
  }
    const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setOrderBy(Number(e.target.value))
  }

  const handleAddToCart = (product: Product)=>{
    dispatch(addToCart(product))
  }
  


  //console.log(products)
  return (
    <section>
    
      
      <div className="product-search">
        <form>
          <span>
            <h2>
              Search
            </h2>
            <input
              type="text"
              id="search"
              name="search"
              value={keyword}
              className="input"
              onChange={handleKeyword}
              placeholder="search...."
            />
          </span>
          {/* <span>
            <label htmlFor="orderBy">OrderBy</label>
            <select value={orderBy} onChange={handleOrderChange} id="orderBy">
              <option value={0}>ASC</option>
              <option value={1}>DESC</option>
            </select>
            <label htmlFor="sortBy">SortBy</label>
            <select value={sortBy} onChange={handleSortChange} id="sortBy">
              <option value={1}>Date</option>
              <option value={0}>Name</option>
            </select>
          </span> */}
          
          <span className="price-range">
            <h2>Filter by Price</h2>
            <label htmlFor="range">Price</label>
            <input
              type="text"
              id="min"
              name="min"
              placeholder="Min Price"
              onChange={handlePrice}
              value={minPrice}
            />{" "}
            To
            <input
              type="text"
              id="max"
              name="max"
              placeholder="Max Price"
              onChange={handlePrice}
              value={maxPrice}
            />
          </span>
        </form>
      </div>
      {/* <div>
      <input type="text" id="search" name="search" value={keyword} className="input"
              onChange={handleKeyword}
              placeholder="search...."
            />
            <p>Sort By :</p>
            <select name="" id="" onChange={handleSortChange}>
            <option value="name">Name</option>
            <option value="Price">Price</option>
              </select>
      </div> */}
            <p className="text">All Handbags</p>

      <div className="grid flex-center">
        {products?.length &&
          products.map((product) => (
            <div className="product-card" key={product.productId}>
                 <img src={product.image} alt={product.name} className="product-img"/>
              <h3 className="Product_Name">{product.name}</h3>
                <p>
                  {" "}
                  Price:
                  {product.price.toLocaleString("en-us",{
                style: "currency",
                currency: "SAR" 
                    } )}
                </p>
            <div className="P-btn">
              <Link to={`/products/${product.slug}`}>
                 <button className="product-btn">
                    Show Details 
                </button>
                
            
                </Link>

                  <button className="product-btn" onClick={()=>{
                    handleAddToCart(product)
                  }}>
                  Add to cart 
                </button>
                </div>
            </div>
            
          ))}
                  <article className="product-body">
            

                <button className="product-btn" onClick={handlePreviousPage} hidden={page == 1}>
                  Previous
                </button>
                
                {Array.from({ length: totalPages}, (_, index) =>(
                  <button className="product-btn" key={index} onClick={() => setPage(index + 1)}>
                    {index + 1}

                  </button>
                ))} 
                <button className="product-btn" onClick={handleNextPage} hidden={page == totalPages}>
                  Next
                </button> 
              </article>
            
      </div>
    </section>
  )
}
 
export default Products