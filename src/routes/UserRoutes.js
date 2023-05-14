import React from "react";
import {Route, Routes} from "react-router-dom";

export const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
        </Routes>
    );
};