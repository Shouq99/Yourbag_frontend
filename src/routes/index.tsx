import { BrowserRouter,Routes, Route } from "react-router-dom";

import { UserDashboard,AdminDashboard, Contact, Error, Home, Login, Cart, UserProfile, UserOrders, Orders } from "@/pages";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ProductDetails } from "@/pages/ProductDetails";
import { Register } from "@/pages/Register";
import { Users } from "lucide-react";
import { ProtectedRoute } from "./ProtectedRoute";
import { AdminRoute } from "./AdminRoute";
import AdminCategories from "@/components/AdminCategories";
import AdminProduct from "@/components/AdminProducts";
//import { AdminCategories } from "../components/AdminCategories";




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

        <Route path="/dashboard" element={<ProtectedRoute/>} >
            <Route path="user" element={<UserDashboard/>} />
            <Route path="user/profile" element={<UserProfile/>} />
            <Route path="user/orders" element={<UserOrders/>} /> 
        </Route>

        <Route path="/dashboard" element={<AdminRoute/>} >

            <Route path="admin" element={<AdminDashboard/>} />
            <Route path="admin/categories" element={<AdminCategories/>} /> 
            <Route path="admin/Product" element={<AdminProduct/>} />
            <Route path="admin/Users" element={<Users/>} />
            <Route path="admin/Orders" element={<Orders/>} />
    </Route>
        <Route path="/*" element={<Error/>} />
        </Routes>
        </main>
        <Footer/>

        </BrowserRouter>
    )
}
export default Index