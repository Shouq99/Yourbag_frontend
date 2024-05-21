import { AppDispatch } from "@/tookit/store";
import React from "react";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom"

 const Navbar = () => {
    // const dispatch: AppDispatch = useDispatch()
    // const handleLogout = () =>{
    //     dispatch()
    // }
    return (

        <nav className="flex-center">
        <ul className="nav-lists flex-center">
            <li>
                <Link className="nav_link" to= "/">Home</Link>
            </li> 

            <li>
                <Link className="nav_link" to= "/signUp">SignUp</Link>
            </li>
             <li>
                <Link className="nav_link" to= "/signIn">SignIn</Link>
            </li> 
             <li>
                <Link className="nav_link" to= "/">Logout</Link>
            </li>

            <li>
                <Link className="nav_link" to= "/contact">Contact</Link>
            </li>
            </ul>
            </nav>
    )
}
export default Navbar