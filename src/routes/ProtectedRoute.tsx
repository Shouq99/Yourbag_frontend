
import { useUserState } from "@/components/hooks/useUserState";
import { Login } from "@/pages";
import { RootState } from "@/tookit/store";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    // const {isLoggedIn} = useSelector((state: RootState) => state.userR)
    const {isLoggedIn}= useUserState();

    return isLoggedIn ? <Outlet/> : <Login/>
 
}
