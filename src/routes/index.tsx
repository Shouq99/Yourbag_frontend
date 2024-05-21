import { BrowserRouter,Routes, Route } from "react-router-dom";

import { UserDashboard,AdminDashboard, Contact, Error, Home, Login } from "@/pages";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ProductDetails } from "@/pages/ProductDetails";
import { Register } from "@/pages/Register";




export const Index = () => {
    return (
        <BrowserRouter>
        <Navbar />
        <main>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products/:slug" element={<ProductDetails/>} />
        <Route path="/signUp" element={<Register/>} />
        <Route path="/signIn" element={<Login/>} />
        <Route path="/dashboard/user" element={<UserDashboard/>} />
        <Route path="/dashboard/user/profile" element={<UserDashboard/>} />
        <Route path="/dashboard/user/orders" element={<UserDashboard/>} />
        <Route path="/dashboard/admin" element={<AdminDashboard/>} />
        <Route path="/dashboard/caregories" element={<AdminDashboard/>} />
        <Route path="/dashboard/product" element={<AdminDashboard/>} />
        <Route path="/dashboard/users" element={<AdminDashboard/>} />
        <Route path="/dashboard/orders" element={<AdminDashboard/>} />
        <Route path="/*" element={<Error/>} />
        </Routes>
        </main>
        <Footer/>

        </BrowserRouter>
    )
}
export default Index