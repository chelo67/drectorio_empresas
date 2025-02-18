import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutPublic = () => {
    return (
        <div>
            <h1>Layout Public</h1>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default LayoutPublic;
