import api from "@/api"
import { LoginFormData, User, UserState } from "@/types"
import { ReducerType, createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState: UserState = {
    users: [],
    user: null,
    isLoading: false,
    isLoggedIn: false,
    error: null
}

// const savedState = localStorage.getItem("loginUserData")
// if (savedState) {
//   const parsedState = JSON.parse(savedState)
//   initialState.user = parsedState.user
//   initialState.isLoggedIn = parsedState.isLoggedIn
// }

export const registerUser = createAsyncThunk("users/registerUser", async (newUser: User) => {
    const response = await api.post("/users/signUp", newUser)
    const token = response.data.data.token
    localStorage.setItem("token", token)
   return response.data
})
export const LoginUser = createAsyncThunk("users/registerUser", async (userData: LoginFormData) => {
    const response = await api.post("/users/signIn", userData)
   return response.data
})


const userSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {}
})


export default userSlice.reducer