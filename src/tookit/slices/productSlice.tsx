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

export const fetchProducts = createAsyncThunk("products/fetchProducts", async ({page, limit}:{page: number, limit: number}) => {
    const response = await api.get(`/products?page=${page}&limit=${limit}`)
   return response.data
})
export const fetchProductsBySlug = createAsyncThunk("products/fetchProductsBySlug", async (slug : string | undefined) => {
    const response = await api.get(`/products/${slug}`)
   return response.data
})

const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProducts.pending, (state) =>
        {
            state.error = null
            state.isLoading = true
        })
 
              builder.addCase(fetchProducts.fulfilled, (state, action) =>
             {
            state.products = action.payload.data.$values
            state.totalPages = action.payload.data.totalPages
            state.isLoading = false
             })
            builder.addCase(fetchProducts.rejected, (state, action) =>
                {
                    state.error = action.error.message || "An error occurd"
                    state.isLoading = false
                
                }) 
                
                builder.addCase(fetchProductsBySlug.pending, (state) =>
            {
                state.error = null
                state.isLoading = true
            })
              builder.addCase(fetchProductsBySlug.fulfilled, (state, action) =>
             {
            state.products = action.payload.data
            state.isLoading = false
             })
            builder.addCase(fetchProductsBySlug.rejected, (state, action) =>
                {
                    state.error = action.error.message || "An error occurd"
                    state.isLoading = false
                
                })
    },
})

export default productSlice.reducer