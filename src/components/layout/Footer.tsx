import React from "react";

const Footer = () => {
    return(
        <footer className="footer">
            <div>
                <label htmlFor="subscibe"> Subscribe to Newsletter</label>
                <input
                type="email"
                name="subscribe"
                id="subscribe"
                placeholder="Enter your email"/>
                <button className="btn btn-subscribe">Subscribe</button>
            </div>
            <div>
                <p> Copyright 2024.</p>
            </div>
        </footer>
    )
}
export default Footer