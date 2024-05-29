
import React from "react";
import { RootState } from "@/tookit/store";
import { useSelector  } from "react-redux";
import { Link } from "react-router-dom";

export const UserSidebar = () => {
    const {userData} = useSelector((state: RootState) => state.userR)

    return (
        <aside className="sidebar flex-center">
        <div className="Dash-card">
            <div>
<h1>User Profile</h1>
        <h2>{userData?.fullName}</h2>
        
        <h2>{userData?.email}</h2> 
        </div>
        <ul>
        <li>
            <Link to="/dashboard/user/profile">Profile</Link>
        </li>
        <li>
            <Link to="/dashboard/user/orders">Orders</Link>
        </li>
        </ul>
        </div>
        </aside>
    )
}