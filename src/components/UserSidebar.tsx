
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
        <p>{userData?.fullName}</p>
        
        <p>{userData?.email}</p> 
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