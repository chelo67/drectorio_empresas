import React from "react";
import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
    return (
        <div>
            <h1>Página Pública</h1>
            <Outlet /> {/* Aquí se renderiza el contenido de la ruta */}
        </div>
    );
};

export default LayoutPublic;
