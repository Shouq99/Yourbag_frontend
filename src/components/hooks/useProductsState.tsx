import { RootState } from "@/tookit/store";
import React from "react";
import { useSelector } from "react-redux";

export const useProductsState = () => {
    const { products, isLoading, error, totalPages,product} = useSelector(
        (state: RootState) => state.productR)
    
    return  { products, isLoading, error, totalPages , product} 

}