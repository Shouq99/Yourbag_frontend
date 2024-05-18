import React from "react";
import {Link} from "react-router-dom"

 const Navbar = () => {
    return (

        <nav className="flex-center">
        <ul className="nav-lists flex-center">
            <li>
                <Link className="nav_link" to= "/">Home</Link>
            </li>

            <li>
                <Link className="nav_link" to= "/contact">Contact</Link>
            </li>
            </ul>
            </nav>
    )
}
export default Navbar