import api from "@/api"
import { LoginFormData, User, UserState } from "@/types"
import { ReducerType, createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState: UserState = {
    error: null,
    isLoading: false
}

export const registerUser = createAsyncThunk("users/registerUser", async (newUser: User) => {
    const response = await api.post("/users/signUp", newUser)
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