import api from "@/api"
import { LoginFormData,Product, ProductState, UpdateProfileFormData, User, UserState } from "@/types"
import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const data =
localStorage.getItem("loginData") != null

   ? JSON.parse(String(localStorage.getItem("loginData")))
   :[]
        

const initialState: UserState = {
  users: [],
  error: null,
  isLoading: false,
  userData: data.userData,
  token: data.token,
  isLoggedIn: data.isLoggedIn
  
  //   users: [],
  //  // user: null,
  //   userData:data.userData,
  //   isLoading: false,
  //   token: data.token,
  //   isLoggedIn: data.isLoggedIn,
  //   error: null
}



export const registerUser = createAsyncThunk("users/registerUser", async (newUser: User) => {
    const response = await api.post("/users/signUp", newUser)
    // const token = response.data.data.token
    // localStorage.setItem("token", token)
   return response.data
})
export const LoginUser = createAsyncThunk("users/registerUser", async (userData: LoginFormData) => {
    const response = await api.post("/users/signIn", userData)
    // const token = response.data.data.token
    // localStorage.setItem("token", token)
    return response.data
})
export const updateUser = createAsyncThunk("users/updateUser",
 async ({updateUserData , userId}: {updateUserData: UpdateProfileFormData , userId: string | undefined}) => {
    const response = await api.put(`/users/${userId}`, updateUserData)
    return response.data
})


const userSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {

  logoutUser: (state)=>{
    state.isLoggedIn = false
    state.userData = null
    state.token = null
    localStorage.setItem(
        "loginData",
        JSON.stringify({
          isLoggedIn: state.isLoggedIn,
          userData: state.userData,
          token:state.token
        })
    )
}
  },

        extraReducers(builder) {
            builder.addCase(LoginUser.fulfilled, (state, action) => {
                state.isLoggedIn = true
            state.userData = action.payload.data.userSignIn
            console.log(action.payload.data);
            state.token = action.payload.data.token
            localStorage.setItem(
              "loginData",
              JSON.stringify({
                isLoggedIn: state.isLoggedIn,
                userData: state.userData,
                token: state.token
              })
            )
          })
          // builder.addCase(updateUser.fulfilled, (state, action) => {
          //   console.log(action.payload.data)
          //   if(state.userData){
          //     state.userData.fullName = action.payload.fullName
          //     state.userData.phone = action.payload.phone
          //     localStorage.setItem(
          //          "loginData",
          //          JSON.stringify({
          //            isLoggedIn: state.isLoggedIn,
          //            userData: state.userData,
          //            token: state.token
          //          })
          //        )
          //   }
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



export const {logoutUser} = userSlice.actions 
export default userSlice.reducer