// import api from "@/api"
// import { LoginFormData,Product, ProductState, User, UserState } from "@/types"
// import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// const data = localStorage("cart" ,{
//   cartItem:[]
// })

//    ? JSON.parse(String(localStorage.getItem("loginData")))
//    :[]
        

// const initialState: CartState = {
//  cartItem: []
//   //   users: [],
//   //  // user: null,
//   //   userData:data.userData,
//   //   isLoading: false,
//   //   token: data.token,
//   //   isLoggedIn: data.isLoggedIn,
//   //   error: null
// }



// export const registerUser = createAsyncThunk("users/registerUser", async (newUser: User) => {
//     const response = await api.post("/users/signUp", newUser)
//     const token = response.data.data.token
//     localStorage.setItem("token", token)
//    return response.data
// })
// export const LoginUser = createAsyncThunk("users/registerUser", async (userData: LoginFormData) => {
//     const response = await api.post("/users/signIn", userData)
//     const token = response.data.data.token
//     localStorage.setItem("token", token)
//     return response.data
// })


// const userSlice = createSlice({
//     name: "users",
//     initialState: initialState,
//     reducers: {

//   logoutUser: (state)=>{
//     state.isLoggedIn = false
//     state.userData = null
//     state.token = null
//     localStorage.setItem(
//         "loginData",
//         JSON.stringify({
//           userData: state.userData,
//           isLoggedIn: state.isLoggedIn
//         })
//     )
// }
//   },

//         extraReducers(builder) {
//             builder.addCase(LoginUser.fulfilled, (state, action) => {
//                 state.isLoggedIn = true
//             state.userData = action.payload.data.user
//             localStorage.setItem(
//               "loginUserData",
//               JSON.stringify({
//                 userData: state.userData,
//                 isLoggedIn: state.isLoggedIn
//               })
//             )
//           })
//           .addMatcher(
//             (action) => action.type.endsWith("/rejected"),
//             (state) => {
//               state.error = "An error occurd"
//               state.isLoading = false
//             }
//           )   
//     }

    
// })



// export const {logoutUser} = userSlice.actions 
// export default userSlice.reducer