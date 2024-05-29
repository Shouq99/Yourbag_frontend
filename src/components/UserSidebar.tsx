
import React from "react";
import { RootState } from "@/tookit/store";
import { useSelector  } from "react-redux";
import { Link } from "react-router-dom";

export const UserSidebar = () => {
    const {userData} = useSelector((state: RootState) => state.userR)

    return (
        <aside className="sidebar">
        <div>
            <div>
<h2>User Profile</h2>
        <h1>{userData?.fullName}</h1>
        
        <h1>{userData?.email}</h1> 
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