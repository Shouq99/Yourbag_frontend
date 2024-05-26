 import api from "@/api"
 import { Product } from "@/types"
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage"
import { createSlice } from "@reduxjs/toolkit"


// const data =
// localStorage.getItem("cart") != null

//    ? JSON.parse(String(localStorage.getItem("cart")))
//    :[]
       
  const data = getLocalStorage ("cart" ,{
    cartItem:[]
  })

    // ? JSON.parse(String(localStorage.getItem("loginData")))
    // :[]
    
type CartState ={
    cartItem: Product[]
}


 const initialState: CartState = {
  cartItem: data.cartItem

 }

 const cartSlice = createSlice({
     name: "cart",
     initialState: initialState,
     reducers: {
        addToCart: (state, action)=>{
            state.cartItem.push(action.payload)
            setLocalStorage("cart", {cartItem: state.cartItem})
          

     },
     removeFromCart:(state, action)=>{
      const productId = action.payload
      state.cartItem = state.cartItem.filter((cartItem)=> cartItem.productId != 
      productId)
      setLocalStorage("cart", {cartItem: state.cartItem})
    },
      removeAllFromCart:(state)=>{
      state.cartItem = []
        setLocalStorage("cart", {cartItem: state.cartItem})
    }
  }
 
})



export const {addToCart, removeFromCart, removeAllFromCart} = cartSlice.actions 
export default cartSlice.reducer