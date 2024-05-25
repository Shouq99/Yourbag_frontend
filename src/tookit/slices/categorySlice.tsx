// import api from "@/api"
// import { Categories } from "@/pages"
// import {Category, CategoryState, FilterType} from "@/types"

// import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"


//  const initialState: CategoryState = {
//   categories:[],
//   category: null,
//   totalPages:1,
//   error: null,
//   isLoading: false
// }


// const categorySlice = createSlice({
//     name: "categories",
//     initialState: {},
//     reducers: {},
 
// })

// export const fetchCategories = createAsyncThunk(
//   "products/fetchCategories",
//   async ({
//     page,
//     limit,
//     keyword,
//     orderBy,
//     sortBy,
//     minPrice,
//     maxPrice
//   }: FilterType) => {
//     let url = `/categories?page=${page}&limit=${limit}&sortBy=${sortBy}&orderBy=${orderBy}&minPrice=${minPrice}&maxPrice=${maxPrice}`
//     if (keyword) {
//       url += `&keyword=${keyword}`
//     }
//     const response = await api.get(url)
//     return response.data
//   }
// )

// export default categorySlice.reducer