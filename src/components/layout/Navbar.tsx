import { logoutUser } from "@/tookit/slices/userSlice";
import { AppDispatch, RootState } from "@/tookit/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"

 const Navbar = () => {
    const dispatch: AppDispatch = useDispatch()
    const {isLoggedIn} = useSelector((state: RootState) => state.userR)
    const handleLogout = () =>{
         dispatch(logoutUser())
     }
    return (

        <nav className="flex-center">
        <ul className="nav-lists flex-center">
         {isLoggedIn && (
            <>
                        <li>
                <Link className="nav_link" to= "/" onClick={handleLogout}>Logout</Link>
            </li>

            </>
         )}
         {!isLoggedIn && (
        <>
               <li>
                <Link className="nav_link" to= "/signUp">Register</Link>
            </li>
             <li>
                <Link className="nav_link" to= "/signIn">LogIn</Link>
            </li> 
 
            <li>
                <Link className="nav_link" to= "/contact">Contact</Link>
            </li>
        </>

         )}
            <li>
                <Link className="nav_link" to= "/">Home</Link>
            </li> 

     
            </ul>
            </nav>
    )
}
export default Navbar