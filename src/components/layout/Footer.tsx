import React from "react";

const Footer = () => {
    return(
        <footer className="footer">
            <form className="form-field">
                <label htmlFor="subscibe"> Subscribe to Newsletter</label>
                <input className="footer-email"
                type="email"
                name="subscribe"
                id="subscribe"
                placeholder="Enter your email"/>
                <button className="btn btn-subscribe">Subscribe</button>
          
            </form>
            <div>
                <h3> Your bag is for you because you deserve it.</h3>
                <p> Copyright 2024.</p>
            </div>
          
        </footer>
    )
}
export default Footer