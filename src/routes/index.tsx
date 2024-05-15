import { BrowserRouter,Routes, Route } from "react-router-dom";

import { Contact, Error, Home } from "@/pages";
import React from "react";

export const Index = () => {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/*" element={<Error/>} />

        </Routes>
        </BrowserRouter>
    )
}
export default Index