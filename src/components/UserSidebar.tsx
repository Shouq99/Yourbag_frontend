
import React from "react";
import { RootState } from "@/tookit/store";
import { useSelector  } from "react-redux";
import { Link } from "react-router-dom";

export const UserSidebar = () => {
    const {user} = useSelector((state: RootState) => state.userR)

    return (
        <div>
            <div>
<h2>User Profile</h2>
    <p>{user?.fullName}</p>
    <p>{user?.email}</p> 
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
    )
}