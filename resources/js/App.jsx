import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import PageHome from "./pagepublic/PageHome";
import LayoutPublic from "./layouts/LayoutPublic";
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutClient from "./layouts/LayoutClient";
import ProtectedRoutes from "./pageauth/ProtectedRoutes";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* publica */}
                <Route path="/" element={<LayoutPublic/>}>
                    <Route index element={<PageHome/>}/>
                </Route>

                {/* Privadas */}
                <Route element={<ProtectedRoutes/>}>
                    <Route path="/admin" element={<LayoutAdmin/>}>
                        <Route index element={<PageHome/>}/>
                    </Route>
                    <Route path="/client" element={<LayoutClient/>}>
                        <Route index element={<PageHome/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default App;

if (document.getElementById("root")) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
