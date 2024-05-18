import { BrowserRouter,Routes, Route } from "react-router-dom";

import { Contact, Error, Home } from "@/pages";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ProductDetails } from "@/pages/ProductDetails";

export const Index = () => {
    return (
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products/:slug" element={<ProductDetails/>} />
        <Route path="/*" element={<Error/>} />
        </Routes>
        <Footer/>

        </BrowserRouter>
    )
}
export default Index