import { BrowserRouter,Routes, Route } from "react-router-dom";

import { UserDashboard,AdminDashboard, Contact, Error, Home, Login, Cart, UserProfile, UserOrders, Product, Orders } from "@/pages";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ProductDetails } from "@/pages/ProductDetails";
import { Register } from "@/pages/Register";
import { Users } from "lucide-react";
import { Categories } from "@/pages/Admin/Categories";
import { ProtectedRoute } from "./ProtectedRoute";
import { AdminRoute } from "./AdminRoute";




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
        <Route path="/cart" element={<Cart/>} />
       \
        <Route path="/dashboard" element={<ProtectedRoute/>} >
            <Route path="user" element={<UserDashboard/>} />
            <Route path="user/profile" element={<UserProfile/>} />
            <Route path="user/orders" element={<UserOrders/>} /> 
        </Route>

        <Route path="/dashboard" element={<AdminRoute/>} >

            <Route path="admin" element={<AdminDashboard/>} />
            <Route path="admin/categories" element={<Categories/>} />
            <Route path="admin/product" element={<Product/>} />
            <Route path="admin/users" element={<Users/>} />
            <Route path="admin/orders" element={<Orders/>} />
    </Route>
        <Route path="/*" element={<Error/>} />
        </Routes>
        </main>
        <Footer/>

        </BrowserRouter>
    )
}
export default Index