import api from "@/api"
import {CreateProductFormData, FilterType, ProductState} from "@/types"
import { getToken } from "@/utils/localStorage"

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"


const initialState: ProductState = {
    products:[],
    product: null,
    totalPages:1,
    error: null,
    isLoading: false
}

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({
    page,
    limit,
    keyword,
    orderBy,
    sortBy,
    minPrice,
    maxPrice
  }: FilterType) => {
    let url = `/products?page=${page}&limit=${limit}&sortBy=${sortBy}&orderBy=${orderBy}&minPrice=${minPrice}&maxPrice=${maxPrice}`
    if (keyword) {
      url += `&keyword=${keyword}`
    }
    const response = await api.get(url)
    return response.data
  }
)

// export const fetchProducts = createAsyncThunk("products/fetchProducts",
//  async ({page, limit, keyword, sortBy}:{
//   page: number,
//   limit: number,
//   keyword: string,
//   sortBy: string  }) => {
//     const response = 
//     keyword .length > 0 
//     ? await api.get(`/products?page=${page}&limit=${limit}&keyword=${keyword}`
//     )
//     : await api.get(
//     `/products?page=${page}&limit=${limit}&sortBy=${sortBy}`)
//     return response.data

// })



export const fetchProductsBySlug = createAsyncThunk(
  "products/fetchProductsBySlug",
  async (slug: string | undefined) => {
    const response = await api.get(`/products/${slug}`)
    return response.data
  }
)

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId: string ) => {
  await api.delete(`/products/${productId}`,{
    headers:{
      Authorization: `Bearer ${getToken()}`
    }
   } )
    return productId
  }
)

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (newProduct: CreateProductFormData ) => {
 const response = await api.post(`/products/${newProduct}`,{
    headers:{
      Authorization: `Bearer ${getToken()}`
    }
   } )
   console.log(response)
    return response.data
  }
)


const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
     
 
              builder.addCase(fetchProducts.fulfilled, (state, action) =>
             {
            state.products = action.payload.data.$values
            state.totalPages = action.payload.data.totalPages
            state.isLoading = false
             })
            // builder.addCase(fetchProducts.rejected, (state, action) =>
            //     {
            //         state.error = action.error.message || "An error occurd"
            //         state.isLoading = false
                
            //     }) 
                
         
              builder.addCase(fetchProductsBySlug.fulfilled, (state, action) =>
             {
              state.product = action.payload.data
              state.isLoading = false
             })
            // builder.addCase(fetchProductsBySlug.rejected, (state, action) =>
            //     {
            //         state.error = action.error.message || "An error occurd"
            //         state.isLoading = false
                
            //     })

            .addCase(deleteProduct.fulfilled, (state, action) => {
              //   console.log(action.payload)

           state.products = state.products.filter(
             (products) => products.productId !== action.payload)
        }) 
        
        .addCase(createProduct.fulfilled, (state, action) => {
              //   console.log(action.payload)
              state.products.push(action.payload.data)
              console.log(action.payload.data)
           //   state.isloading = false
    

          // state.products = state.products.filter(
           //  (products) => products.productId !== action.payload)
        })


            
        .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.error = null
          state.isLoading = true
        }
      ) 
      .addMatcher(
       (action) => action.type.endsWith("/rejected"),
       (state) => {
         state.error = "An error occurd"
         state.isLoading = false
       }
     )

    
    }
})

export default productSlice.reducer