// import { AdminSidebar } from "@/components/AdminSidebar";
// import React from "react";

// export const AdminCategories = () => {
//     return (
//         <div>
//    <AdminSidebar/>
//    <p>Caregories here.</p>
//         </div>
//     )
// }

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/tookit/store";
import { fetchProducts } from "@/tookit/slices/productSlice";
import { Link } from "react-router-dom";

import { CreateCategoryFormData, Product } from "@/types";
import { addToCart } from "@/tookit/slices/cartSlice";
import { AdminSidebar } from "./AdminSidebar";
import { useCategoriesState } from "./hooks/useCategoiresState";
import { createCategory, deleteCategory, fetchCategories } from "@/tookit/slices/categorySlice";
import { toast } from "react-toastify";
import { SubmitHandler, useForm } from "react-hook-form";


 const AdminCategories = () => {

  // const { products, isLoading, error, totalPages} = useSelector(
  //   (state: RootState) => state.productR)

  const { categories, isLoading, error, totalPages,category} = useCategoriesState();

    const dispatch: AppDispatch = useDispatch()

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<CreateCategoryFormData>()

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
        await dispatch(fetchCategories({page, limit, keyword,orderBy, sortBy, minPrice, maxPrice }))
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




  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(Number(e.target.value))
  }
    const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setOrderBy(Number(e.target.value))
  }

  
  // const handleDelete = (id: string)=>{
  //   dispatch(deleteCategory(id))
  // }
  const handleDelete = async(id: string) => {
    dispatch(deleteCategory(id))
    try{
      const response = await dispatch(deleteCategory(id))
    console.log(response)
  } catch (error){
    console.log(error)
  }
     
    } 
    
  //   const handleEdit = async(id: string) => {
  //   dispatch(createCategory(id))
  //   try{
  //     const response = await dispatch(createCategory(id))
  //   console.log(response)
  // } catch (error){
  //   console.log(error)
  // }
     
  //   }

    const onSubmit:
     SubmitHandler<CreateCategoryFormData> = async (data) => {
      // if(!userData?.userId){
      //  toast.error("user data is not available")
      //  return
      // }
           try{
      const response = await dispatch(createCategory(data))
         console.log(response);
   
       }catch (error){
           console.log(error);
       }
           }
  


  //console.log(products)
  return (
             <div>
   <AdminSidebar/>
   <section>
    <div>
      <h2> Create Category</h2>
      <form onSubmit={handleSubmit (onSubmit)}>
            <div className="form-field">
            <label htmlFor="name"> Name: </label>
    
              <input
            type="text"
            {... register ("fullName", {
              required: "Name is required",
            minLength: {value: 2, message: "Name must be at least 2 characters"}})}/>
            {errors.fullName && <p>{errors.fullName?.message}</p>}
            </div>
            <div className="form-field">
        <label htmlFor="name"> description: </label>

          <input
        type="text"
        {... register ("description", {
          required: "phone is required",
          pattern: {
            value: /^0\d{9}$/,
            message: "Invalid phone"
          }
       })}/>
        {errors.description && <p>{errors.description?.message}</p>}
        </div>
            <button type="submit" className="product-btn">Create Category</button>
    
            </form>
    </div>
      <h2>List Category</h2>

      <div className="product-search">
        <form>
          <span>
            <h3>
              Search
            </h3>
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
          {/* <span className="price-range">
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
          </span> */}
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
      <div className="grid flex-center">
        {categories?.length &&
          categories.map((category) => (
            <div className="product-card" key={category.categoryId} >
              <h3 className="Product_Name">{category.name}</h3>
              <p className="Product_Name">{category.description}</p>
              <div>
                {/* <button className="btn" onClick={() =>{
                    handleEdit(category.categoryId)}}>Edit</button> */}
                
                <button className="btn" onClick={() =>{
                    handleDelete(category.categoryId)
                }}>Delete</button>
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
        </div>
  
  )
}
 
export default AdminCategories