import { RootState } from "@/tookit/store";
import React from "react";
import { useSelector } from "react-redux";

export const useCartState = () => {
    const {cartItem} = useSelector(
        (state: RootState) => state.cartR)
    
    return  { cartItem} 

}