import { RootState } from "@/tookit/store";
import React from "react";
import { useSelector } from "react-redux";

export const useUserState = () => {
    const { isLoggedIn, userData, token, isLoading, error} = useSelector(
        (state: RootState) => state.userR)
    
    return  { isLoggedIn, userData, token, isLoading, error} 

}