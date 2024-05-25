
import { useUserState } from "@/components/hooks/useUserState";
import { Login } from "@/pages";
import React from "react";
import { Outlet } from "react-router-dom";

export const AdminRoute = () => {
    // const {isLoggedIn, userData} = useSelector((state: RootState) => state.userR)
    const {isLoggedIn , userData}= useUserState();

    return isLoggedIn && userData?.role ? <Outlet/> : <Login/>
 
}
