 import api from "@/api"
 import { CategoryState, CreateCategoryFormData, FilterType} from "@/types"
import { getToken } from "@/utils/localStorage"

 import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"


  const initialState: CategoryState = {
   categories:[],
   category: null,
   totalPages:1,
   error: null,
   isLoading: false
 }


 export const fetchCategories = createAsyncThunk(
   "categories/fetchCategories",
   async ({
     page,
     limit,
     keyword,
     orderBy,
     sortBy,
     minPrice,
     maxPrice
   }: FilterType) => {
     let link = `/categories?page=${page}&limit=${limit}&sortBy=${sortBy}&orderBy=${orderBy}&minPrice=${minPrice}&maxPrice=${maxPrice}`
     if (keyword) {
       link += `&keyword=${keyword}`
     }
     const response = await api.get(link)
     return response.data
   }
 )
 
 export const deleteCategory = createAsyncThunk(
   "categories/deleteCategory",
   async (categoryId: string ) => {
   await api.delete(`/categories/${categoryId}`,{
     headers:{
       Authorization: `Bearer ${getToken()}`
     }
    } )
     return categoryId
   }
 )

 export const createCategory = createAsyncThunk("categories/createCategory", 
 async (newCategory: CreateCategoryFormData ) => {
  const response = await api.post("/categories", newCategory,{
    headers:{
      Authorization: `Bearer ${getToken()}`
    }
  })
return response.data
})


 


 const categorySlice = createSlice({
    name: "categories",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
     
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
        //  console.log(action.payload.data)
          state.categories = action.payload.data.$values
          state.isLoading = false
        })
  
        .addCase(deleteCategory.fulfilled, (state, action) => {
              //     console.log(action.payload)

          state.categories = state.categories.filter(
            (category) => category.categoryId !== action.payload)
        })

        .addCase(createCategory.fulfilled, (state, action) => {
          state.categories= action.payload.data.$values
      //    console.log(action.payload.data)
         // state.isLoading = false
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
 export default categorySlice.reducer