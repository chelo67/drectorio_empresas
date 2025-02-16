import React from "react";
import { Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    return <Outlet />; // No protege nada por ahora
};

export default ProtectedRoutes;