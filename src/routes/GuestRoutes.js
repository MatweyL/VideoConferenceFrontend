import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../components/pages/Main";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";

const GuestRoutes = (props) => {
    return (<Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}/>
            </Routes>);
}

export default GuestRoutes;
