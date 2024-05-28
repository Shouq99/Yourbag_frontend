import { logoutUser } from "@/tookit/slices/userSlice";
import { AppDispatch, RootState } from "@/tookit/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import { CartIcon } from "../CartIcon";
import { useUserState } from "../hooks/useUserState";
import { useCartState } from "../hooks/userCartState";

 const Navbar = () => {
    const dispatch: AppDispatch = useDispatch()
    // const {isLoggedIn} = useSelector((state: RootState) => state.userR)
   const {isLoggedIn, userData}= useUserState();
   const {cartItem}= useCartState();
    const handleLogout = () =>{
         dispatch(logoutUser())
     }
    return (

        <nav>
          

        <div className="flex-center">
        <ul className="nav-lists flex-center">
         {isLoggedIn && (
            <>
                        <li>
                <Link className="nav_link" to= "/" onClick={handleLogout}>Logout</Link>
            </li>    
                     <li>
                <Link className="nav_link" to= {`/dashboard/${userData && userData.role ? "admin" : "user"} `} >
                {userData && userData.role ? "admin" : "user"} Dashboard
                
                </Link>
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
                <Link className="nav_link" to= "/cart">
                    <CartIcon value={cartItem && cartItem.length > 0 ? cartItem.length : 0 }
                    
                    />
                </Link>
            </li> 

     
            </ul>
 </div>
            </nav>
            
  




    )
}
export default Navbar