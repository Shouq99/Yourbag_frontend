
import React from "react";
import { RootState } from "@/tookit/store";
import { useSelector  } from "react-redux";
import { Link } from "react-router-dom";

export const AdminSidebar = () => {
    const {userData} = useSelector((state: RootState) => state.userR)

    return (
        <aside className="sidebar flex-center">
        <div className="Dash-card">
            <div>
<h1> Admin Profile</h1>
        <p>{userData?.fullName}</p>
        
        <p>{userData?.email}</p> 
        </div>
        <ul>
        <li>
            <Link to="/dashboard/admin/categories">Categories</Link>
        </li> 
        <li>
            <Link to="/dashboard/admin/product">Product</Link>
        </li> 
        <li>
            <Link to="/dashboard/admin/users">Users</Link>
        </li>
        <li>
            <Link to="/dashboard/admin/orders">Orders</Link>
        </li>
        </ul>
        </div>
        </aside>
    )
}