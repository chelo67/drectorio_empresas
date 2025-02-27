import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
//public
import PageHome from "./pagepublic/PageHome";
//Layouts
import LayoutPublic from "./layouts/LayoutPublic";
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutClient from "./layouts/LayoutClient";
//Auth
import ProtectedRoutes from "./pageauth/ProtectedRoutes";
import Login from "./pageauth/Login";
import Register from "./pageauth/Register";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PanelAdmin from "./pageadmin/PanelAdmin";
import PanelClient from "./pageclient/PanelClient";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* publica */}
                <Route path="/" element={<LayoutPublic/>}>
                    <Route index element={<PageHome/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                </Route>

                {/* Privadas */}
                <Route element={<ProtectedRoutes/>}>
                    <Route path="/admin" element={<LayoutAdmin/>}>
                        <Route index element={<PanelAdmin/>}/>
                    </Route>
                    <Route path="/client" element={<LayoutClient/>}>
                        <Route index element={<PanelClient/>}/>
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
