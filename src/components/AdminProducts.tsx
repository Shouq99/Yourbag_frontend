import { AdminSidebar } from "@/components/AdminSidebar";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/tookit/store";
import {   createProduct, deleteProduct, fetchProducts } from "@/tookit/slices/productSlice";
import { useCategoriesState } from "./hooks/useCategoiresState";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useProductsState } from "./hooks/useProductsState";
import { CreateProductFormData } from "@/types";
export const AdminProduct = () => {

  // const { products, isLoading, error, totalPages} = useSelector(
  //   (state: RootState) => state.productR)

  const { categories, isLoading, error, totalPages,category} = useCategoriesState();
  const { products} = useProductsState();

    const dispatch: AppDispatch = useDispatch()

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<CreateProductFormData>()

    const [page, setPage] = useState(1);
    const [limit, setlimit] = useState(5);
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


  
  // const handleDelete = (id: string)=>{
  //   dispatch(deleteCategory(id))
  // }
  const handleDelete = async(productId: string) => {
   
    try{
        dispatch(deleteProduct(productId))

    //  const response = await dispatch(deleteCategory(id))
   // console.log(response)
  } catch (error){
    console.log(error)
  }
     
    }
    
    
    const handleEdit = async(productId: string) => {
   
    try{
        dispatch(deleteProduct(productId))

    //  const response = await dispatch(deleteCategory(id))
   // console.log(response)
  } catch (error){
    console.log(error)
  }
     
    }
    
 
//      const handleEdit = async(id: string) => {
//      dispatch(createProduct(id))
//      try{
//        const response = await dispatch(createProduct(id))
//      console.log(response)
//    } catch (error){
//      console.log(error)
//    } 
//      }

    const onSubmit:
     SubmitHandler<CreateProductFormData> = async (data) => {
      // if(!userData?.userId){
      //  toast.error("user data is not available")
      //  return
      // }
           try{
      const response = await dispatch(createProduct(data))
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
      <h2> Create Product</h2>
       <form onSubmit={handleSubmit (onSubmit)}>
            <div className="form-field">
            <label htmlFor="name"> Name: </label>
    
              <input
            type="text"
            {... register ("name", {
              required: "Name is required",
            minLength: {value: 2, message: "Name must be at least 2 characters"}})}/>
            {errors.name && <p>{errors.name?.message}</p>}
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

        <div className="form-field">
        <label htmlFor="name"> Price: </label>

          <input
        type="text"
        {... register ("description", {
          required: " required",
          pattern: {
            value: /^0\d{9}$/,
            message: "Invalid "
          }
       })}/>
        {errors.price && <p>{errors.price?.message}</p>}
        </div>
            <button type="submit" className="product-btn">Create Product</button>
    
            </form> 
    </div>
      <h2>List Product</h2>

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
          
         
        </form>
      </div>
    
      <div className="grid flex-center">
        {products?.length &&
          products.map((product) => (
            <div className="product-card" key={product.productId}>
                 <img src={product.image} alt={product.name} className="product-img"/>
         <h3 className="Product_Name">{product.name}</h3>
         {/* <p>{product.category.map((category) => category.name)}</p> */}
         <p className="Product_Name">{product.description}</p>
              <div>
                <button className="btn" onClick={() =>{
                    handleEdit(product.productId)}}>Edit</button> 
                
                <button className="btn" onClick={() =>{
                    handleDelete(product.productId)
                }}>Delete</button>
              </div>
             </div>
            
          ))}
                  <article className="product-body">
            

                <button className="product-btn" onClick={handlePreviousPage} hidden={page == 1}>
                  Previous
                </button>
                
                {/* {Array.from({ length: totalPages}, (_, index) =>(
                  <button className="product-btn" key={index} onClick={() => setPage(index + 1)}>
                    {index + 1}

                  </button>
                ))}  */}
                <button className="product-btn" onClick={handleNextPage} hidden={page == totalPages}>
                  Next
                </button> 
              </article>
      </div>
    </section>
        </div>
  
  )
}
 
export default AdminProduct


