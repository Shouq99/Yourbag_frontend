
import PageTitle from "@/components/PageTitle";
import Products from "@/components/Products";
import ProductSidebars from "@/components/layout/sidebars/ProductSidebars";
import React from "react";

export const Home = () => {
    return (
            <div className="container">
            <PageTitle title ="Home"/>
            <div className="sidebar-container">
            <ProductSidebars/>
            </div>
            <div className="main-container">
            <h1> List of all products </h1>
            <Products/>
            </div>
        </div>
          
    )        

}