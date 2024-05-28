import { RootState } from "@/tookit/store";
import React from "react";
import { useSelector } from "react-redux";

export const useCategoriesState = () => {
    const { categories, isLoading, error, totalPages,category} = useSelector(
        (state: RootState) => state.categoryR)
    
    return   { categories, isLoading, error, totalPages,category} 

}