import React from "react";
import {isUserAuthenticated} from "../services/auth";
import {UserRoutes} from "./UserRoutes";
import GuestRoutes from "./GuestRoutes";

const HeaderRoutes = (props) => {

    if (isUserAuthenticated()) {
        return <UserRoutes></UserRoutes>
    }
    else {
        return <GuestRoutes></GuestRoutes>
    }
}

export default HeaderRoutes;
