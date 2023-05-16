import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../components/pages/Main";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Profile from "../components/pages/Profile";
import Conference from "../components/pages/Conference";
import ConferenceMenu from "../components/pages/ConferenceMenu";

const GuestRoutes = (props) => {
    return (<Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}/>
                <Route path="/profile" element={<Profile/>}></Route>
                <Route path="/conferences" element={<ConferenceMenu/>}></Route>
            </Routes>);
}

export default GuestRoutes;
