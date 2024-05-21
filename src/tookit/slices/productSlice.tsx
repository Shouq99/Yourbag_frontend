import api from "@/api"
import {ProductState} from "@/types"

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"


const initialState: ProductState = {
    products:[],
    product: null,
    totalPages:1,
    error: null,
    isLoading: false
}

export const fetchProducts = createAsyncThunk("products/fetchProducts",
 async ({page, limit, keyword, sortBy}:{
  page: number,
  limit: number,
  keyword: string,
  sortBy: string  }) => {
    const response = 
    keyword .length > 0 
    ? await api.get(`/products?page=${page}&limit=${limit}&searchTerm=${keyword}`
    )
    : await api.get(
    `/products?page=${page}&limit=${limit}&sortBy=${sortBy}`)
    return response.data

})



export const fetchProductsBySlug = createAsyncThunk(
  "products/fetchProductsBySlug",
  async (slug: string | undefined) => {
    const response = await api.get(`/products/${slug}`)
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